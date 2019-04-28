import React from "reactn";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Button from "components/common/Button.jsx";
import GridItem from "components/common/GridItem.jsx";
import GridContainer from "components/common/GridContainer.jsx";
import Card from "components/card/Card.jsx";
import CardHeader from "components/card/CardHeader.jsx";
import CardBody from "components/card/CardBody.jsx";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Campaigns from "variables/CampaignList.jsx";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Input from '@material-ui/core/Input';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import { openDB } from 'idb';

let db = openDB('runtimeData', 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains('themeData')) {
      db.createObjectStore('themeData', {keypath: 'id', autoIncrement: true});
    }
    if (!db.objectStoreNames.contains('campaignData')) {
      db.createObjectStore('campaignData', {keypath: 'campaignID'});
    }
  }
});

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  }
};

let updatedVariables;
let logs = [];
let pushedVariables = [];

class ScenarioViewer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      campaignLogOpen: false,
      chaosBagOpen: false,
      resolved: false,
      checked: [],
      data: [],
      selectedValue: null,
      radio: 0
    }
  }

  showResolution() {
    let currentCampaign = this.global.activeCampaign;
    this.setState({ resolved: true });
    pushedVariables = this.state.data;
    // eslint-disable-next-line
    pushedVariables.map(object => {
      // eslint-disable-next-line
      object.map(variable => {
        if (variable.id)
        {
         if (currentCampaign.hasOwnProperty(variable.id))
         {
          console.log(variable);
          if (currentCampaign[variable.id] instanceof Array)
            currentCampaign[variable.id].push(variable.text);
          if (typeof currentCampaign[variable.id] === 'boolean')
            currentCampaign[variable.id] = true;
         }
        }
      })
    })
    console.log(currentCampaign);
  }

  updateVariables(variables) {
    updatedVariables = variables;
  }

  addLogs(resolution) {
    logs.push({"text": resolution.text});
  }

  addVariableToLogs(resolution, variable) {
    if (variable !== null)
      logs.push({"text": resolution.text + variable});
  }

  handleRadioChange = (id) => {
    this.setState({ radio: id });
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleToggle(value, variableID) {
      const { checked } = this.state;
      const { data } = this.state;
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
      const newData = [...data];
      const newVariable = [];
      newVariable.push({"text": value, "id": variableID});

      if (currentIndex === -1) {
          newChecked.push(value);
          newData.push(newVariable);
      } else {
          newChecked.splice(currentIndex, 1);
      }

      this.setState({
          checked: newChecked,
          data: newData
      });
  }

  continue() {
    let currentCampaign = this.global.activeCampaign;
    const campaignData = Campaigns[currentCampaign.campaignRef];
    this.setGlobal({activeCampaign: updatedVariables});
    currentCampaign.campaign_path[currentCampaign.current_section].section_color = "success";
    currentCampaign.current_section = currentCampaign.current_section + 1;
    if (campaignData.scenarios.length > currentCampaign.current_scenario + 1)
      currentCampaign.current_scenario = currentCampaign.current_scenario + 1;
    currentCampaign.current_state = "setup";
    this.setState({ resolved: false });
    logs.unshift({
      "text": "You reached " + campaignData.scenarios[currentCampaign.current_scenario].resolution[this.state.radio].title
    });
    logs.map(logEntry => (
      currentCampaign.campaign_log.push(logEntry)
    ));
    this.setGlobal({activeCampaign: currentCampaign});
    let campaign = currentCampaign;
    if ('indexedDB' in window) {
      db.then(async function(db) {
        let cursor = await db.transaction('campaignData', 'readwrite').store.openCursor()
        while (cursor) {
          if (cursor.value.active === false)
            cursor = await cursor.continue();
          else {
            cursor.update(campaign);
            cursor = await cursor.continue();
          }
        }
        if (cursor)
          cursor.close();
      })
    }
  }

  showCampaignLog() {
    this.setState({ campaignLogOpen: true });
  }

  closeCampaignLog() {
    this.setState({ campaignLogOpen: false });
  }

  showChaosBag() {
    let currentCampaign = this.global.activeCampaign;
    currentCampaign.chaos_bag.sort(function(a, b){return a.tokenID - b.tokenID});
    this.setState({ chaosBagOpen: true });
  }

  closeChaosBag() {
    this.setState({ chaosBagOpen: false });
  }

  render() {
    let currentCampaign = this.global.activeCampaign;
    const campaignData = Campaigns[currentCampaign.campaignRef];
    const { classes } = this.props;
    logs = [];
    if (this.state.resolved === false)
    {
      return (
        <GridItem xs={8} sm={8} md={8}>
            <Card className={classes.textCenter} style={{maxHeight: "85vh"}}>
              <CardHeader color={this.global.color}>
                <h6 className={classes.cardTitleWhite}>
                <span title={campaignData.code} style={{fontSize: "15px", margin: "auto"}} className={campaignData.icon}></span> {campaignData.name} <span title={campaignData.code} style={{fontSize: "15px", margin: "auto"}} className={campaignData.icon}></span>
                </h6>
              </CardHeader>
              <CardBody scroll>
                <GridContainer>
                  <GridItem xs={6} sm={5} md={4}>
                    <Button
                    color="info"
                    fullWidth
                    onClick={() => this.showCampaignLog()}>Campaign Log</Button>
                    <Dialog
                    open={this.state.campaignLogOpen}
                    onClose={() => this.closeCampaignLog()}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    >
                    <DialogTitle id="alert-dialog-title">{"Campaign Log"}</DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                      <ul>
                        {currentCampaign.campaign_log.map((log, index) => (
                          <li key={index}>{log.text}</li>
                        ))}
                      </ul>
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={() => this.closeCampaignLog()} color="info" autoFocus>
                        Close
                      </Button>
                    </DialogActions>
                  </Dialog>
                  </GridItem>
                  <GridItem xs={6} sm={5} md={4}>
                    <Button
                    color="danger"
                    fullWidth
                    onClick={() => this.showChaosBag()}>Chaos Bag</Button>
                    <Dialog
                    open={this.state.chaosBagOpen}
                    onClose={() => this.closeChaosBag()}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    >
                    <DialogTitle id="alert-dialog-title">{"Chaos Bag"}</DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                      <GridContainer>
                      {currentCampaign.chaos_bag.map((bag, index) => (
                        <GridItem xs={2} sm={2} md={2} key={index}>
                          <Button
                          round disabled style={{width: "64px", height: "64px", margin: "6px", padding: 0}} color={bag.color}>{bag.symbol === undefined ? <span style={{fontSize: "48px"}}>{bag.token}</span> : <span title={bag.token} style={{fontSize: "48px"}} className={bag.icon}></span>}
                          </Button>
                        </GridItem>
                      ))}
                      </GridContainer>
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={() => this.closeChaosBag()} color="danger" autoFocus>
                        Close
                      </Button>
                    </DialogActions>
                  </Dialog>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <h3><strong>{campaignData.scenarios[currentCampaign.current_scenario].title}</strong></h3>
                  </GridItem>
                  <div>
                  <GridContainer>
                    <GridItem xs={11} sm={10} md={9}>
                      {campaignData.scenarios[currentCampaign.current_scenario].resolution_checks.map((resolution_checks, index) => (
                        <div key={index}>
                        {resolution_checks.type === Boolean &&
                        <div><strong>{resolution_checks.text}</strong>
                        <br></br>
                        <Checkbox
                          tabIndex={-1}
                          onClick={() => this.handleToggle(resolution_checks.text, resolution_checks.id)}
                          classes={{
                              checked: classes.checked,
                          }}
                        /></div>}
                        {resolution_checks.type === Number &&
                          <div><strong>{resolution_checks.text}</strong>
                          <div><Input
                            id="regular"
                            name={resolution_checks.id}
                            onChange={this.handleChange.bind(this)}
                            inputProps={{
                              type: "Number"
                            }}
                          /></div>
                        </div>}
                        {resolution_checks.type === String &&
                          <div><strong>{resolution_checks.text}</strong>
                          <Input
                            id="regular"
                            inputProps={{
                              type: "String"
                            }}
                          />
                        </div>}
                        {resolution_checks.type === Array &&
                          <div><span><strong>{resolution_checks.text}</strong></span>
                          <br></br><br></br>
                          <GridContainer>
                          {resolution_checks.data.map((array, index) => (
                            <GridItem xs={4} sm={4} md={4} key={index}>{array.text}
                            <br></br>
                            <Checkbox
                              tabIndex={-1}
                              onClick={() => this.handleToggle(array.text, resolution_checks.id)}
                              classes={{
                                  checked: classes.checked,
                              }}
                              key={index}
                            /></GridItem>
                          ))}</GridContainer>
                          </div>}
                          <hr></hr>
                        </div>
                      ))}
                      <div>
                      {campaignData.scenarios[currentCampaign.current_scenario].resolution.map((resolution, index) => (
                        <GridContainer key={index}>
                          <GridItem xs={10} sm={10} md={10}>
                            <strong>{resolution.header}</strong>
                          </GridItem>
                          <GridItem xs={2} sm={2} md={2}>
                            <Radio
                              checked={this.state.radio === resolution.id}
                              onChange={this.handleRadioChange.bind(this, resolution.id)}
                              value={resolution.id}
                              aria-label={resolution.id}
                              icon={<RadioButtonUncheckedIcon fontSize="small" />}
                              checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                              />
                            </GridItem>
                          </GridContainer>
                      ))}
                      </div>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <Button
                      color={this.global.color}
                      fullWidth
                      onClick={() => this.showResolution()}>Show Resolution</Button>
                    </GridItem>
                  </GridContainer>
                  </div>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
      )
    }
    else {
      return (
        <GridItem xs={8} sm={8} md={8}>
            <Card className={classes.textCenter} style={{maxHeight: "85vh"}}>
              <CardHeader color={this.global.color}>
                <h6 className={classes.cardTitleWhite}>
                <span title={campaignData.code} style={{fontSize: "15px", margin: "auto"}} className={campaignData.icon}></span> {campaignData.name} <span title={campaignData.code} style={{fontSize: "15px", margin: "auto"}} className={campaignData.icon}></span>
                </h6>
              </CardHeader>
              <CardBody scroll>
                <GridContainer>
                  <GridItem xs={3} sm={3} md={3}>
                    <Button
                    color="info"
                    fullWidth
                    onClick={() => this.showCampaignLog()}>Campaign Log</Button>
                    <Dialog
                    open={this.state.campaignLogOpen}
                    onClose={() => this.closeCampaignLog()}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    >
                    <DialogTitle id="alert-dialog-title">{"Campaign Log"}</DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                      <ul>
                        {currentCampaign.campaign_log.map((log, index) => (
                          <li key={index}>{log.text}</li>
                        ))}
                      </ul>
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={() => this.closeCampaignLog()} color="info" autoFocus>
                        Close
                      </Button>
                    </DialogActions>
                  </Dialog>
                  </GridItem>
                  <GridItem xs={6} sm={6} md={6}>
                    <h3><strong>{campaignData.scenarios[currentCampaign.current_scenario].title}</strong></h3>
                  </GridItem>
                  <GridItem xs={3} sm={3} md={3}>
                    <Button
                    color="danger"
                    fullWidth
                    onClick={() => this.showChaosBag()}>Chaos Bag</Button>
                    <Dialog
                    open={this.state.chaosBagOpen}
                    onClose={() => this.closeChaosBag()}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    >
                    <DialogTitle id="alert-dialog-title">{"Chaos Bag"}</DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                      <GridContainer>
                      {currentCampaign.chaos_bag.map((bag, index) => (
                        <GridItem xs={2} sm={2} md={2} key={index}>
                          <Button
                          round disabled style={{width: "64px", height: "64px", margin: "6px", padding: 0}} color={bag.color}>{bag.symbol === undefined ? <span style={{fontSize: "48px"}}>{bag.token}</span> : <span title={bag.token} style={{fontSize: "48px"}} className={bag.icon}></span>}
                          </Button>
                        </GridItem>
                      ))}
                      </GridContainer>
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={() => this.closeChaosBag()} color="danger" autoFocus>
                        Close
                      </Button>
                    </DialogActions>
                  </Dialog>
                  </GridItem>
                  <div>
                  <GridContainer>
                    <GridItem xs={9} sm={9} md={9}>
                        <div><h4><em>{campaignData.scenarios[currentCampaign.current_scenario].resolution[this.state.radio].description}</em></h4></div>
                      <hr></hr>
                    </GridItem>
                    <GridItem xs={9} sm={9} md={9}>
                      {campaignData.scenarios[currentCampaign.current_scenario].resolution[this.state.radio].steps.map((resolution, index) => (
                        <div key={index}>
                        {resolution.varLinked !== true && resolution.varCheck !== true &&
                          <div><h4><div>{resolution.text}
                          {resolution.icons === true &&
                          <div><br></br></div>}
                          {resolution.icons === true &&
                          resolution.icon_list.map((icons, index) => (
                            <span title={resolution.name} style={{fontSize: "30px", margin: "auto"}} className={resolution.icon} key={index}></span>
                          ))}
                          {resolution.addToLog === true &&
                          this.addLogs(resolution)}
                          {resolution.check === true &&
                          <div>{this.updateVariables( resolution.check_function(currentCampaign))}
                          </div>}</div></h4></div>}
                        {resolution.varLinked === true &&
                          <div><h4><div>{resolution.var_function(this.state, resolution.id)}
                          {resolution.icons === true &&
                          <div><br></br></div>}
                          {resolution.icons === true &&
                          resolution.icon_list.map((icons, index) => (
                            <span title={resolution.name} style={{fontSize: "30px", margin: "auto"}} className={resolution.icon} key={index}></span>
                          ))}
                          {resolution.addToLog === true &&
                          this.addLogs(resolution)}
                          {resolution.check === true &&
                          <div>{this.updateVariables( resolution.check_function(currentCampaign))}
                          </div>}</div></h4></div>}
                        {resolution.varCheck === true &&
                          <div><h4><div><strong>{resolution.text}</strong>{resolution.var_check_function(currentCampaign, resolution.id)}
                          {resolution.icons === true &&
                          <div><br></br></div>}
                          {resolution.icons === true &&
                          resolution.icon_list.map((icons, index) => (
                            <span title={resolution.name} style={{fontSize: "30px", margin: "auto"}} className={resolution.icon} key={index}></span>
                          ))}
                          {resolution.addToLog === true &&
                          this.addVariableToLogs(resolution, resolution.var_check_function(currentCampaign, resolution.id))}
                          {resolution.check === true &&
                          <div>{this.updateVariables(resolution.check_function(currentCampaign))}
                          </div>}</div></h4></div>}
                        </div>
                      ))}
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <Button
                      color={this.global.color}
                      fullWidth
                      onClick={() => this.continue()}>Continue</Button>
                    </GridItem>
                  </GridContainer>
                  </div>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
        )
      }
    }
  }

export default withStyles(styles)(ScenarioViewer);
