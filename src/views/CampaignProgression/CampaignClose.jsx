import React from "reactn";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
//mport Button from "components/CustomButtons/Button.jsx";
import GridItem from "components/common/GridItem.jsx";
import GridContainer from "components/common/GridContainer.jsx";
import Card from "components/card/Card.jsx";
import CardHeader from "components/card/CardHeader.jsx";
import CardBody from "components/card/CardBody.jsx";
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

class ScenarioViewer extends React.Component{
  state = {
    campaignLogOpen: false,
    chaosBagOpen: false
  }

  showCampaignLog() {
    this.setState({ campaignLogOpen: true });
  }

  closeCampaignLog() {
    this.setState({ campaignLogOpen: false });
  }

  showChaosBag() {
    this.setState({ chaosBagOpen: true });
  }

  closeChaosBag() {
    this.setState({ chaosBagOpen: false });
  }

  render() {
    let currentCampaign = this.global.activeCampaign;
    const campaignData = Campaigns[currentCampaign.campaignRef];
    const { classes } = this.props;
      return (
          <GridItem xs={8} sm={8} md={8}>
            <Card className={classes.textCenter}>
              <CardHeader color={this.global.color}>
                <h3 className={classes.cardTitleWhite}>
                <span title={campaignData.code} style={{fontSize: "30px", margin: "auto"}} className={campaignData.icon}></span> {campaignData.name} <span title={campaignData.code} style={{fontSize: "30px", margin: "auto"}} className={campaignData.icon}></span>
                </h3>
              </CardHeader>
              <CardBody style={{maxHeight: "85vh"}} scroll>
                <GridContainer>
                  <GridItem xs={9} sm={9} md={9}>
                    <h3><strong>Final Campaign Log</strong></h3>
                  </GridItem>
                  <div style={{textAlign: "left"}}>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                    <ul>
                      {currentCampaign.campaign_log.map((log, index) => (
                        <li key={index} style={{fontSize: "12px"}}>{log.text}</li>
                      ))}
                    </ul>
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

export default withStyles(styles)(ScenarioViewer);
