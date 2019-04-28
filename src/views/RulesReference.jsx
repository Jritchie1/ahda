/* eslint-disable */
import React from "reactn";
import withStyles from "@material-ui/core/styles/withStyles";
import GridItem from "components/common/GridItem.jsx";
import GridContainer from "components/common/GridContainer.jsx";
import Card from "components/card/Card.jsx";
import CardHeader from "components/card/CardHeader.jsx";
import CardBody from "components/card/CardBody.jsx";
import RulesContents from "variables/RulesContents.jsx";
import RulesDescriptions from "variables/RulesDescriptions.jsx";
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

class RulesReference extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0
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

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    //eslint-disable-next-line
    let theCampaigns = this.global.campaigns;
    const { classes } = this.props;
    return (
      <GridContainer>
        <GridItem xs={4} sm={4} md={4}>
          <Card style={{maxHeight: "85vh"}}>
            <CardHeader color={this.global.color} className={classes.textCenter}>
              <h6 className={classes.cardTitleWhite}>Contents</h6>
            </CardHeader>
            <CardBody scroll>
              <RulesContents />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={8} sm={8} md={8}>
        <Card style={{maxHeight: "85vh"}}>
          <CardHeader color={this.global.color} className={classes.textCenter}>
            <h6 className={classes.cardTitleWhite}>Details</h6>
          </CardHeader>
          <CardBody scroll>
            <RulesDescriptions />
          </CardBody>
        </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(styles)(RulesReference);
