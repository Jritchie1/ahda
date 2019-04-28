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
import { openDB } from 'idb';
import Campaigns from "variables/CampaignList.jsx";

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

class InitialSetup extends React.Component{

continue() {
  let currentCampaign = this.global.activeCampaign;
  const campaignData = Campaigns[currentCampaign.campaignRef];
  if (currentCampaign.number_of_players !== undefined)
    if (currentCampaign.difficulty !== undefined)
      {
        currentCampaign.campaign_path[currentCampaign.current_section].section_color = "success";
        currentCampaign.current_section = currentCampaign.current_section + 1;
        currentCampaign.current_scenario = 0;
        currentCampaign.current_interlude = 0;
        currentCampaign.current_state = "setup";
        let logEntry = {
          "text": "You have started a " + currentCampaign.number_of_players + " investigator campaign, attempting " + campaignData.name + " on " + campaignData.setup.chaos_bag_setup[currentCampaign.difficulty].difficulty + " difficulty."
        };
        currentCampaign.campaign_log.push(logEntry);
        this.setGlobal({activeCampaign: currentCampaign});
        if ('indexedDB' in window) {
          db.then(async function(db) {
            let cursor = await db.transaction('campaignData', 'readwrite').store.openCursor()
            while (cursor) {
              if (cursor.value.active === false)
                cursor = await cursor.continue();
              else {
                cursor.update(currentCampaign);
                cursor = await cursor.continue();
              }
            }
            if (cursor)
              cursor.close();
          })
        }
      }
}
setPlayerCount(players) {
  let currentCampaign = this.global.activeCampaign;
  currentCampaign.number_of_players = players;
  this.setGlobal({activeCampaign: currentCampaign});
}
setDifficulty(difficulty) {
  let currentCampaign = this.global.activeCampaign;
  const campaignData = Campaigns[currentCampaign.campaignRef];
  currentCampaign.difficulty = difficulty;
  currentCampaign.chaos_bag = campaignData.setup.chaos_bag_setup[difficulty].tokens;
  this.setGlobal({activeCampaign: currentCampaign});
}
render() {
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
              <GridItem xs={12} sm={12} md={12}>
                <h3><em>{campaignData.setup.setup_start_text}</em></h3>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                {campaignData.setup.setup_steps.map((steps, index) => (
                  <div key={index}><h4>{steps.text}</h4></div>
                ))}
                <br></br>
              </GridItem>
                <GridItem xs={6} sm={3} md={3}>
                  <Button
                  color={this.global.color}
                  fullWidth
                  onClick={() => this.setPlayerCount(1)}>1
                  </Button>
                </GridItem>
                <GridItem xs={6} sm={3} md={3}>
                  <Button
                  color={this.global.color}
                  fullWidth
                  onClick={() => this.setPlayerCount(2)}>2
                  </Button>
                </GridItem>
                <GridItem xs={6} sm={3} md={3}>
                  <Button
                  color={this.global.color}
                  fullWidth
                  onClick={() => this.setPlayerCount(3)}>3
                  </Button>
                </GridItem>
                <GridItem xs={6} sm={3} md={3}>
                  <Button
                  color={this.global.color}
                  fullWidth
                  onClick={() => this.setPlayerCount(4)}>4
                  </Button>
                </GridItem>
                  {currentCampaign.number_of_players === undefined &&
                  <div style={{width: "100vw"}}><h4><br></br>
                    <GridItem xs={12} sm={12} md={12}>Please choose the number of investigators!
                  <br></br><br></br></GridItem></h4></div>}
                  {currentCampaign.number_of_players !== undefined &&
                  <div style={{width: "100vw"}}><h4><br></br>
                    <GridItem xs={12} sm={12} md={12}>You have chosen to start a {currentCampaign.number_of_players} investigator campaign.
                  <br></br><br></br></GridItem></h4></div>}
                <GridItem xs={6} sm={3} md={3}>
                  <Button
                  color="success"
                  fullWidth
                  onClick={() => this.setDifficulty(0)}>Easy
                  </Button>
                </GridItem>
                <GridItem xs={6} sm={3} md={3}>
                <Button
                color="info"
                fullWidth
                onClick={() => this.setDifficulty(1)}>Normal
                </Button>
                </GridItem>
                <GridItem xs={6} sm={3} md={3}>
                  <Button
                  color="warning"
                  fullWidth
                  onClick={() => this.setDifficulty(2)}>Hard
                  </Button>
                </GridItem>
                <GridItem xs={6} sm={3} md={3}>
                  <Button
                  color="danger"
                  fullWidth
                  onClick={() => this.setDifficulty(3)}>Expert
                  </Button>
                </GridItem>
                {currentCampaign.difficulty === undefined &&
                <div style={{width: "100vw"}}><h4><br></br>
                  <GridItem xs={12} sm={12} md={12}>Please choose a difficulty!
                <br></br><br></br></GridItem></h4></div>}
                {currentCampaign.difficulty !== undefined &&
                <div style={{width: "100vw"}}><h4><br></br>
                  <GridItem xs={12} sm={12} md={12}>{campaignData.setup.chaos_bag_setup[currentCampaign.difficulty].difficulty_text}
                </GridItem><br></br>
                <GridContainer>
                {campaignData.setup.chaos_bag_setup[currentCampaign.difficulty].tokens.map((bag, index) => (
                  <GridItem xs={4} sm={3} md={2} key={index}>
                    <Button
                    round disabled style={{width: "64px", height: "64px", margin: "6px", padding: 0}} color={bag.color}>{bag.symbol === undefined ? <span style={{fontSize: "48px"}}>{bag.token}</span> : <span title={bag.token} style={{fontSize: "48px"}} className={bag.icon}></span>}
                    </Button>
                  </GridItem>
                ))}
                </GridContainer>
                <br></br></h4></div>}
                <GridItem xs={12} sm={12} md={12}>
                  <Button
                  color={this.global.color}
                  fullWidth
                  onClick={() => this.continue()}>Continue</Button>
                </GridItem>
            </GridContainer>
          </CardBody>
        </Card>
      </GridItem>
    )
  }
}

export default withStyles(styles)(InitialSetup);
