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

class InterludeViewer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      campaignLogOpen: false,
      chaosBagOpen: false,
      decided: false,
      checked: [],
      data: [],
      selectedValue: null,
      radio: 0
    }
  }

  showDecision() {
    let currentCampaign = this.global.activeCampaign;
    this.setState({ decided: true });
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
          if (typeof currentCampaign[variable.id] === 'number')
            currentCampaign[variable.id] = variable;
         }
        }
      })
    })
  }

  updateVariables(variables) {
    updatedVariables = variables;
  }

  addLogs(decision) {
    logs.push({"text": decision.text});
  }

  addVariableToLogs(decision, variable) {
    if (variable !== null)
      logs.push({"text": decision.text + variable});
  }

  handleRadioChange = (id) => {
    this.setState({ radio: id });
  }

  handleChange(event) {
    let currentCampaign = this.global.activeCampaign;
    this.setState({[event.target.name]: event.target.value});
    if (currentCampaign.hasOwnProperty(event.target.name) === true)
      currentCampaign[event.target.name] = event.target.value;
    this.setGlobal({activeCampaign: currentCampaign});
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
    if (currentCampaign.swap === true && currentCampaign.campaign_path[currentCampaign.current_section].swap_to)
      currentCampaign.current_scenario = currentCampaign.campaign_path[currentCampaign.current_section].swap_to;
    if (campaignData.interludes.length > currentCampaign.current_interlude + 1)
      currentCampaign.current_interlude = currentCampaign.current_interlude + 1;
    this.setState({ decided: false });
    logs.unshift({
      "text": "You chose " + campaignData.interludes[currentCampaign.current_interlude].decisions[this.state.radio].title
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
    console.log(this.global.activeCampaign);
    logs = [];
    if (this.state.decided === false)
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
                    <h3><strong>{campaignData.interludes[currentCampaign.current_interlude].title}</strong></h3>
                  </GridItem>
                  <div>
                  <GridContainer>
                    <GridItem xs={9} sm={9} md={9}>
                      {campaignData.interludes[currentCampaign.current_interlude].introductions.map((intro, index) => (
                        <div key={index}><h4><em>{intro.text}</em></h4></div>
                      ))}
                      <hr></hr>
                    </GridItem>
                    <GridItem xs={11} sm={10} md={9}>
                      {campaignData.interludes[currentCampaign.current_interlude].decision_checks.map((decision_checks, index) => (
                        <div key={index}>
                        {decision_checks.type === Boolean &&
                        <div><strong>{decision_checks.text}</strong>
                        <br></br>
                        <Checkbox
                          tabIndex={-1}
                          onClick={() => this.handleToggle(decision_checks.text, decision_checks.id)}
                          classes={{
                              checked: classes.checked,
                          }}
                        /></div>}
                        {decision_checks.type === Number &&
                          <div><strong>{decision_checks.text}</strong>
                          <div><Input
                            id="regular"
                            name={decision_checks.id}
                            onChange={this.handleChange.bind(this)}
                            inputProps={{
                              type: "Number"
                            }}
                          /></div>
                        </div>}
                        {decision_checks.type === String &&
                          <div><strong>{decision_checks.text}</strong>
                          <Input
                            id="regular"
                            inputProps={{
                              type: "String"
                            }}
                          />
                        </div>}
                        {decision_checks.type === Array &&
                          <div><span><strong>{decision_checks.text}</strong></span>
                          <br></br><br></br>
                          <GridContainer>
                          {decision_checks.data.map((array, index) => (
                            <GridItem xs={4} sm={4} md={4} key={index}>{array.text}
                            <br></br>
                            <Checkbox
                              tabIndex={-1}
                              onClick={() => this.handleToggle(array.text, decision_checks.id)}
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
                      {campaignData.interludes[currentCampaign.current_interlude].decisions.map((decision, index) => (
                        <GridContainer key={index}>
                          <GridItem xs={10} sm={10} md={10}>
                            <strong>{decision.header}</strong>
                          </GridItem>
                          <GridItem xs={2} sm={2} md={2}>
                            <Radio
                              checked={this.state.radio === decision.id}
                              onChange={this.handleRadioChange.bind(this, decision.id)}
                              value={decision.id}
                              aria-label={decision.id}
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
                      onClick={() => this.showDecision()}>Show Decision</Button>
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
                    <h3><strong>{campaignData.interludes[currentCampaign.current_interlude].title}</strong></h3>
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
                        <div><h4><em>{campaignData.interludes[currentCampaign.current_interlude].decisions[this.state.radio].description}</em></h4></div>
                      <hr></hr>
                    </GridItem>
                    <GridItem xs={9} sm={9} md={9}>
                      {campaignData.interludes[currentCampaign.current_interlude].decisions[this.state.radio].steps.map((decision, index) => (
                        <div key={index}>
                        {decision.varLinked !== true && decision.varCheck !== true &&
                          <div><h4><div>{decision.text}
                          {decision.icons === true &&
                          <div><br></br></div>}
                          {decision.icons === true &&
                          decision.icon_list.map((icons, index) => (
                            <span title={decision.name} style={{fontSize: "30px", margin: "auto"}} className={decision.icon} key={index}></span>
                          ))}
                          {decision.addToLog === true &&
                          this.addLogs(decision)}
                          {decision.check === true &&
                          <div>{this.updateVariables( decision.check_function(currentCampaign))}
                          </div>}</div></h4></div>}
                        {decision.varLinked === true &&
                          <div><h4><div>{decision.var_function(this.state, decision.id)}
                          {decision.icons === true &&
                          <div><br></br></div>}
                          {decision.icons === true &&
                          decision.icon_list.map((icons, index) => (
                            <span title={decision.name} style={{fontSize: "30px", margin: "auto"}} className={decision.icon} key={index}></span>
                          ))}
                          {decision.addToLog === true &&
                          this.addLogs(decision)}
                          {decision.check === true &&
                          <div>{this.updateVariables( decision.check_function(currentCampaign))}
                          </div>}</div></h4></div>}
                        {decision.varCheck === true &&
                          <div><h4><div><strong>{decision.text}</strong>{decision.var_check_function(currentCampaign, decision.id)}
                          {decision.icons === true &&
                          <div><br></br></div>}
                          {decision.icons === true &&
                          decision.icon_list.map((icons, index) => (
                            <span title={decision.name} style={{fontSize: "30px", margin: "auto"}} className={decision.icon} key={index}></span>
                          ))}
                          {decision.addToLog === true &&
                          this.addVariableToLogs(decision, decision.var_check_function(currentCampaign, decision.id))}
                          {decision.check === true &&
                          <div>{this.updateVariables(decision.check_function(currentCampaign))}
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

export default withStyles(styles)(InterludeViewer);
