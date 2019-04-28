import React from "reactn";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/common/GridItem.jsx";
import GridContainer from "components/common/GridContainer.jsx";
import Card from "components/card/Card.jsx";
import CardHeader from "components/card/CardHeader.jsx";
import CardBody from "components/card/CardBody.jsx";
import InitialSetup from "./CampaignProgression/InitialSetup.jsx";
import CampaignProgressBar from "./CampaignProgression/CampaignProgressBar.jsx";
import ScenarioViewer from "./CampaignProgression/ScenarioViewer.jsx";
import ResolutionViewer from "./CampaignProgression/ResolutionViewer.jsx";
import CampaignClose from "./CampaignProgression/CampaignClose.jsx";
import { openDB } from 'idb';

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

let db = openDB('runtimeData', 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains('themeData')) {
      db.createObjectStore('themeData', {keypath: 'id', autoIncrement: true});
    }
    if (!db.objectStoreNames.contains('campaignData')) {
      db.createObjectStore('campaignData', {keypath: 'campaignID', autoIncrement: true});
    }
  }
});

let activeCampaign, userCampaigns;

class CurrentCampaign extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  async componentDidMount() {
    if ('indexedDB' in window) {
      userCampaigns = await(await db).getAll('campaignData');
      //eslint-disable-next-line
      userCampaigns.map(userCampaign => {
        if (userCampaign.active === true)
          activeCampaign = userCampaign;
      });
      this.setGlobal({activeCampaign: activeCampaign,
                       campaigns: userCampaigns});
      this.setState(this.state);
    }
  }

  render() {
    let currentCampaign = this.global.activeCampaign;
    //eslint-disable-next-line
    let theCampaigns = this.global.campaigns;
    const { classes } = this.props;
    if (currentCampaign) {
      return (
        <GridContainer>
          <CampaignProgressBar key="progress-bar"></CampaignProgressBar>
          {currentCampaign.campaign_path[currentCampaign.current_section].section_type === "setup" &&
            <InitialSetup key="initial-setup"></InitialSetup>}
          {currentCampaign.campaign_path[currentCampaign.current_section].section_type === "scenario" && currentCampaign.current_state === "setup" &&
            <ScenarioViewer key="scenario-viewer"></ScenarioViewer>}
          {currentCampaign.campaign_path[currentCampaign.current_section].section_type === "scenario" && currentCampaign.current_state === "resolution" &&
            <ResolutionViewer key="scenario-resolution"></ResolutionViewer>}
          {currentCampaign.campaign_path[currentCampaign.current_section].section_type === "finish" &&
          <CampaignClose key="initial-finish"></CampaignClose>}
        </GridContainer>
      );
    }
    
    else {
      return (
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card className={classes.textCenter}>
              <CardHeader color={this.global.color}>
                <h6 className={classes.cardTitleWhite}>No Campaign Selected!</h6>
              </CardHeader>
              <CardBody>
                Perhaps fear has gotten the better of you...
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      )
    }
  }
}

export default withStyles(styles)(CurrentCampaign);
