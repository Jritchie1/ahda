import React from "reactn";
import withStyles from "@material-ui/core/styles/withStyles";
import GridItem from "components/common/GridItem.jsx";
import GridContainer from "components/common/GridContainer.jsx";
import CustomInput from "components/common/CustomInput.jsx";
import Button from "components/common/Button.jsx";
import Card from "components/card/Card.jsx";
import CardHeader from "components/card/CardHeader.jsx";
import CardBody from "components/card/CardBody.jsx";
import CardFooter from "components/card/CardFooter.jsx";
import { openDB } from 'idb';
import Campaigns from "variables/CampaignList.jsx";

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

class Home extends React.Component {
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
      this.setGlobal({activeCampaign: activeCampaign, campaigns: userCampaigns});
      this.setState(this.state);
    }
  }

  setCurrentCampaign(campaign, campaigns, index) {
    let allCampaigns = campaigns;
    let activeCampaign = campaign;
     if ('indexedDB' in window) {
       db.then(async function(db) {
         let cursor = await db.transaction('campaignData', 'readwrite').store.openCursor()
         while (cursor) {
           let modValue = cursor.value;
           modValue.active = false;
           if (cursor.key === index + 1) {
             modValue.active = true;
           }
           allCampaigns[cursor.key-1] = modValue;
           cursor.update(modValue);
           cursor = await cursor.continue();
         }
         if (cursor)
           cursor.close();
       })
     }
     this.setGlobal({activeCampaign: activeCampaign, campaigns: allCampaigns});
     this.props.history.push("/ahda/current-campaign");
  }

  render() {
    const { classes } = this.props;
    let theCampaigns = this.global.campaigns;
    if (theCampaigns) {
      return (
        <GridContainer>
          <GridItem xs={4} sm={4} md={4}>
            <Card style={{maxHeight: "85vh"}} className={classes.textCenter}>
              <CardHeader color={this.global.color}>
                <h6 className={classes.cardTitleWhite}>Edit Profile</h6>
              </CardHeader>
              <CardBody scroll>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="Full Name"
                      id="full-name"
                      type="text"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="Email address"
                      id="email-address"
                      type="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="Password"
                      id="password"
                      type="password"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="Password Confirmation"
                      id="password-confirm"
                      type="password"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
                </CardBody>
              <CardFooter>
                <Button color={this.global.color} disabled fullWidth>Coming Soon!</Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={8} sm={8} md={8}>
            <Card style={{maxHeight: "85vh"}} className={classes.textCenter}>
              <CardHeader color={this.global.color}>
                <h6 className={classes.cardTitleWhite}>Player Stats</h6>
              </CardHeader>
              <CardBody scroll>
                <h2 className={classes.cardCategory}>Campaigns</h2>
                  {this.global.campaigns.map((campaign, index) => (
                    <GridContainer key={index}>
                      <GridItem xs={9} sm={9} md={9}>
                        <div style={{margin: "5px"}}><span title={Campaigns[campaign.campaignRef].code} style={{fontSize: "15px", margin: "auto"}} className={Campaigns[campaign.campaignRef].icon}></span> | {Campaigns[campaign.campaignRef].name}
                        <br></br>
                        Difficulty: {Campaigns[campaign.campaignRef].setup.chaos_bag_setup[campaign.difficulty].difficulty} | Players: {campaign.number_of_players} | {campaign.campaign_path[campaign.current_section].title}</div>
                      </GridItem>
                      <GridItem xs={3} sm={3} md={3}>
                        {campaign.active !== true &&
                        <div style={{margin: "5px"}}><Button color="success" fullWidth onClick={() => this.setCurrentCampaign(campaign, theCampaigns, index)}>Resume</Button></div>}
                        {campaign.active === true &&
                        <div style={{margin: "5px"}}><Button color="primary" disabled fullWidth>Active</Button></div>}
                      </GridItem>
                    </GridContainer>
                  ))}
                <h2 className={classes.cardCategory}>Decks</h2>
                <p className={classes.description}>
                Turboroamer | Ursula Downs | 24XP | Active<br></br>
                The Forgotten Age | The Curse of the Rougarou<br></br>
                <br></br>
                Turboroamer | Ursula Downs | 24XP | Active<br></br>
                The Forgotten Age | The Curse of the Rougarou<br></br>
                <br></br>
                Turboroamer | Ursula Downs | 24XP | Active<br></br>
                The Forgotten Age | The Curse of the Rougarou<br></br>
                <br></br>
                Turboroamer | Ursula Downs | 24XP | Active<br></br>
                The Forgotten Age | The Curse of the Rougarou<br></br>
                <br></br>
                Turboroamer | Ursula Downs | 24XP | Active<br></br>
                The Forgotten Age | The Curse of the Rougarou<br></br>
                <br></br>
                Turboroamer | Ursula Downs | 24XP | Active<br></br>
                The Forgotten Age | The Curse of the Rougarou<br></br>
                <br></br>
                Coming Soon!
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      );
    }
    else {
      return (
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card className={classes.textCenter}>
              <CardHeader color="primary">
                <h6 className={classes.cardTitleWhite}>Waiting For Data...</h6>
              </CardHeader>
              <CardBody>
                The mists swirl and eddy, as you try to recall where you've gone before...
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      );
    }
  }
}

export default withStyles(styles)(Home);
