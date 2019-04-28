import React from "reactn";
import withStyles from "@material-ui/core/styles/withStyles";
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

class ScenarioViewer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      campaignLogOpen: false,
      chaosBagOpen: false
    }
  }

  continue() {
    let currentCampaign = this.global.activeCampaign;
    currentCampaign.campaign_path[currentCampaign.current_section].section_color = "primary";
    currentCampaign.current_state = "resolution";
    let logEntry = {
      "text": "Started " + Campaigns[currentCampaign.campaignRef].scenarios[currentCampaign.current_scenario].title
    };
    currentCampaign.campaign_log.push(logEntry);
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
    this.global.activeCampaign.chaos_bag.sort(function(a, b){return a.tokenID - b.tokenID});
    this.setState({ chaosBagOpen: true });
  }

  closeChaosBag() {
    this.setState({ chaosBagOpen: false });
  }

  render() {
    //eslint-disable-next-line
    let theCampaigns = this.global.campaigns;
    let currentCampaign = this.global.activeCampaign;
    const campaignData = Campaigns[currentCampaign.campaignRef];
    const { classes } = this.props;
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
                      <GridItem xs={2} sm={2} md={2} key={index} >
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
                <GridContainer>
                  <GridItem xs={9} sm={9} md={9}>
                    {campaignData.scenarios[currentCampaign.current_scenario].introductions.map((intro, index) => (
                      <div key={index}><h4><em>{intro.text}</em></h4></div>
                    ))}
                    <hr></hr>
                  </GridItem>
                  <GridItem xs={9} sm={9} md={9}>
                    {campaignData.scenarios[currentCampaign.current_scenario].setup.map((setup, index) => (
                      <div key={index}><h4><div>{setup.text}
                      {setup.addToBag === true &&
                      // eslint-disable-next-line
                      setup.tokensToAdd.map(token => {
                        currentCampaign.chaos_bag.push(token);
                        setup.tokensToAdd.shift();
                        if (setup.tokensToAdd.length === 0)
                          setup.addToBag = false;
                      })}
                      {setup.icons === true &&
                      <div><br></br></div>}
                      {setup.icons === true &&
                      setup.icon_list.map((icons, index) => (
                        <span title={icons.name} style={{fontSize: "30px", margin: "auto"}} className={icons.icon} key={index}></span>
                      ))}
                      {setup.check === true &&
                      <div>{setup.options[setup.check_function(currentCampaign)].text}</div>}</div></h4></div>
                    ))}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <Button
                    color={this.global.color}
                    fullWidth
                    onClick={() => this.continue()}>Continue</Button>
                  </GridItem>
                </GridContainer>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      )
    }
  }

export default withStyles(styles)(ScenarioViewer);
