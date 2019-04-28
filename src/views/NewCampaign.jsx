import React from "reactn";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Button from "components/common/Button.jsx";
import GridItem from "components/common/GridItem.jsx";
import GridContainer from "components/common/GridContainer.jsx";
import Card from "components/card/Card.jsx";
import CardBody from "components/card/CardBody.jsx";
import CardHeader from "components/card/CardHeader.jsx";
import Campaigns from "variables/CampaignList.jsx";
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

const campaigns = Campaigns;

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

class NewCampaign extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectedCampaign: Campaigns[0]
    }
  }

  changeActiveCampaign(campaign) {
    this.setState({selectedCampaign: campaign})
  }

  setCurrentCampaign(campaign, campaigns) {
    let newCampaign = JSON.parse(JSON.stringify(campaign.campaign_variables));
    let allCampaigns = campaigns;
    if ('indexedDB' in window) {
      db.then(async function(db) {
        let cursor = await db.transaction('campaignData', 'readwrite').store.openCursor()
        while (cursor) {
          let modValue = cursor.value;
          modValue.active = false;
          allCampaigns[cursor.key-1] = modValue;
          cursor.update(modValue);
          cursor = await cursor.continue();
        }
        if (cursor)
          cursor.close();
        })
      db.then(async function(db) {
        newCampaign.active = true;
        const tx = db.transaction('campaignData', 'readwrite');
        tx.store.put(newCampaign);
        return tx.done;
      })
    }
    this.setGlobal({activeCampaign: activeCampaign, campaigns: allCampaigns});
    this.props.history.push("/ahda/current-campaign");
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
    const { classes } = this.props;
    //eslint-disable-next-line
    let theCampaigns = this.global.campaigns;
    return (
      <GridContainer>
        <GridItem xs={4} sm={4} md={4}>
          <Card className={classes.textCenter} style={{maxHeight: "85vh"}}>
            <CardHeader color={this.global.color}>
              <h6 className={classes.cardTitleWhite}>Campaigns</h6>
            </CardHeader>
            <CardBody scroll>
              <GridContainer>
                {campaigns.map((campaign, index) => (
                  <GridItem key={index} xs={12} sm={12} md={12}>
                    <Button
                    color={campaign.color_code}
                    fullWidth
                    onClick={() => this.changeActiveCampaign(campaign)}
                    >
                      <span title={campaign.code} style={{fontSize: "18px", float:"right"}} className={campaign.icon}></span>
                    </Button>
                  </GridItem>
                ))}
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={8} sm={8} md={8}>
          <Card className={classes.textCenter} style={{maxHeight: "85vh"}}>
            <CardHeader color={this.global.color}>
              <h6 className={classes.cardTitleWhite}>Campaign Details</h6>
            </CardHeader>
            <CardBody scroll>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <span title={this.state.selectedCampaign.code} style={{fontSize: "30px"}} className={this.state.selectedCampaign.icon}></span>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <h2>{this.state.selectedCampaign.name}</h2>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <h4>{this.state.selectedCampaign.introduction_title}</h4>
                </GridItem>
                <GridItem xs={7} sm={7} md={7}>
                  <div style={{margin: "auto", textAlign: "justify"}}>
                    <div dangerouslySetInnerHTML={{__html: this.state.selectedCampaign.introduction}}></div>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <h4>Campaign Path</h4>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  {this.state.selectedCampaign.campaign_variables.campaign_path.map((path, index) => (
                    <div key={index}>{path.title}</div>
                  ))}
                  <br></br>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <Button
                  color={this.global.color}
                  fullWidth
                  onClick={() => this.setCurrentCampaign(this.state.selectedCampaign, this.global.campaigns)}>Start Campaign</Button>
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(styles)(NewCampaign);
