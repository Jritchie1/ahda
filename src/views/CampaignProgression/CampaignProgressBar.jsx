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

class CampaignProgressBar extends React.Component{

render() {
  let currentCampaign = this.global.activeCampaign;
  const { classes } = this.props;
    return (
      <GridItem xs={4} sm={4} md={4}>
        <Card className={classes.textCenter} style={{maxHeight: "85vh"}}>
          <CardHeader color={this.global.color}>
            <h6 className={classes.cardTitleWhite}>Progress</h6>
          </CardHeader>
          <CardBody scroll>
            <GridContainer>
              {currentCampaign.campaign_path.map((path, index) => (
                <GridItem key={index} xs={12} sm={12} md={12}>
                  <Button color={path.section_color} fullWidth disabled>
                    {path.section_type === "setup" &&
                      <span title={path.section_key} style={{fontSize: "18px", margin: "auto"}} className={Campaigns[currentCampaign.campaignRef].icon}></span>}
                    {path.section_type === "finish" &&
                      <span title={path.section_key} style={{fontSize: "18px", margin: "auto"}} className="icon-faq"></span>}
                    {path.section_type === "scenario" &&
                      <span title={path.section_key}>{path.section_key}</span>}
                  </Button>
                </GridItem>
              ))}
            </GridContainer>
          </CardBody>
        </Card>
      </GridItem>
    )
  }
}

export default withStyles(styles)(CampaignProgressBar);
