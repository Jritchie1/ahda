import React from "reactn";
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from '@material-ui/core/Tooltip';
import GridItem from "components/common/GridItem.jsx";
import Button from "components/common/Button.jsx";
import GridContainer from "components/common/GridContainer.jsx";
import Card from "components/card/Card.jsx";
import CardHeader from "components/card/CardHeader.jsx";
import CardBody from "components/card/CardBody.jsx";
import { openDB } from 'idb';
import CardList from "variables/FullCardList.jsx";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';


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

const cards = CardList;

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

let activeCampaign, userCampaigns, selectedDecklist, selectedInvestigator;

function mapInvestigatorInfo(investigator) {
  selectedInvestigator = cards.find(card => (card.code === investigator));
}

function mapDecklist(deck) {
  selectedDecklist = deck.map(aCard => (cards.find(card => (card.code === aCard.code))));
  selectedDecklist.map((entry, index) => (entry.cardCount = deck[index].quantity));
}

class DeckManager extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0,
      isReversed: false,
      color: this.props.color,
      imagePop: false,
      activeImage: "",
      activeCard: ""
    }
  };

  async componentDidMount() {
    mapInvestigatorInfo(this.deck.investigatorCode);
    mapDecklist(this.deck.deckList);
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

  deck = {
    deckName: "Reduce, Reuse, Recycle",
    playerCards: "35",
    totalCards: "46",
    totalExperience: "39",
    availableExperience: "0",
    packsUsed: "11",
    requiredPacks: "Core Set (2), The Dunwich Legacy, The Essex County Express, Blood on the Altar, Undimensioned and Unseen, Lost in Time and Space, The Path to Carcosa, Echoes of the Past, A Phantom of Truth, The Pallid Mask, Dim Carcosa",
    investigatorCode: "03006",
    deckList: [
      {
        code: "02032",
        quantity: 2
      },
      {
        code: "01087",
        quantity: 2
      },
      {
        code: "01040",
        quantity: 2
      },
      {
        code: "03114",
        quantity: 2
      },
      {
        code: "03315",
        quantity: 2
      },
      {
        code: "01027",
        quantity: 2
      },
      {
        code: "02147",
        quantity: 1
      },
      {
        code: "01072",
        quantity: 2
      },
      {
        code: "03198",
        quantity: 1
      },
      {
        code: "02035",
        quantity: 2
      },
      {
        code: "02234",
        quantity: 2
      },
      {
        code: "01073",
        quantity: 2
      },
      {
        code: "02187",
        quantity: 1
      },
      {
        code: "02157",
        quantity: 1
      },
      {
        code: "02193",
        quantity: 1
      },
      {
        code: "01088",
        quantity: 2
      },
      {
        code: "03018",
        quantity: 2
      },
      {
        code: "03026",
        quantity: 2
      },
      {
        code: "02184",
        quantity: 2
      },
      {
        code: "03232",
        quantity: 1
      },
      {
        code: "02150",
        quantity: 2
      },
      {
        code: "03039",
        quantity: 2
      },
      {
        code: "02299",
        quantity: 2
      },
      {
        code: "03019",
        quantity: 2
      },
      {
        code: "03041",
        quantity: 1
      },
      {
        code: "02038",
        quantity: 1
      },
      {
        code: "01099",
        quantity: 1
      },
      {
        code: "03042",
        quantity: 1
      }
    ],
    physicalTrauma: "0",
    mentalTrauma: "0",
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  flip = () => {
    if (this.state.isReversed === false)
      this.setState({isReversed: true})
    else
      this.setState({isReversed: false})
  }

  popImage(name, image) {
    this.setState({activeImage: image});
    this.setState({activeCard: name});
    this.setState({imagePop: true});
  }

  closeImageViewer() {
    this.setState({imagePop: false});
  }

  render() {
    const { classes } = this.props;
    //eslint-disable-next-line
    let theCampaigns = this.global.campaigns;
    if (selectedDecklist && selectedInvestigator) {
      return (
        <GridContainer>
            <GridItem xs={6} sm={6} md={6}>
              <Card style={{maxHeight: "85vh"}} className={classes.textCenter}>
                <CardHeader color={this.global.color}>
                  <h6 className={classes.cardTitleWhite}>{selectedInvestigator.name}, {selectedInvestigator.subname}</h6>
                </CardHeader>
                <CardBody scroll>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <img
                      alt="Unavailable"
                      src={this.state.isReversed === false ? selectedInvestigator.imagesrc : selectedInvestigator.backimagesrc}
                      style={{ height: "auto", maxHeight: "300px", width: "100%", maxWidth: "419px", display: "inline" }}>
                      </img>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                      <Button fullWidth onClick={this.flip} color="rose">Flip Card</Button>
                    </GridItem>
                    <GridItem xs={6} sm={6} md={6}>
                      <Button fullWidth color="success">Upgrade</Button>
                    </GridItem>
                    <GridItem xs={6} sm={6} md={6}>
                      <Button fullWidth color="primary">Add weakness</Button>
                    </GridItem>
                    <GridItem xs={7} sm={7} md={7}>
                      <Tooltip title={
                        <React.Fragment>
                        Total Cards: {this.deck.totalCards}
                        </React.Fragment>}
                        placement="right">
                        <Button fullWidth color="warning">Deck Size: {this.deck.playerCards}</Button>
                      </Tooltip>
                    </GridItem>
                    <GridItem xs={7} sm={7} md={7}>
                      <Tooltip title={
                        <React.Fragment>
                        Total XP: {this.deck.totalExperience}
                        </React.Fragment>}
                        placement="right">
                        <Button fullWidth color="warning">Available XP: {this.deck.availableExperience}</Button>
                      </Tooltip>
                    </GridItem>
                    <GridItem xs={7} sm={7} md={7}>
                      <Tooltip title={this.deck.requiredPacks} placement="right">
                        <Button fullWidth color="warning">Packs Used: {this.deck.packsUsed}</Button>
                      </Tooltip>
                    </GridItem>
                    <GridItem xs={7} sm={7} md={7}>
                      <Button fullWidth color="danger" disabled>Physical Trauma: {this.deck.physicalTrauma}</Button>
                      <Button fullWidth color="info" disabled>Mental Trauma: {this.deck.mentalTrauma}</Button>
                    </GridItem>
                  </GridContainer>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={6} sm={6} md={6}>
              <Card style={{maxHeight: "85vh"}}>
                <CardHeader color={this.global.color} className={classes.textCenter}>
                  <h6 className={classes.cardTitleWhite}>{this.deck.deckName}</h6>
                </CardHeader>
                <CardBody scroll>
                  {selectedDecklist.map(card => (
                    <GridContainer key={card.code}>
                      <GridItem  xs={9} sm={9} md={9}>
                        <h6>
                          {card.cardCount}x {card.name}
                            {card.xp === 1 &&
                            <span>&nbsp;&#9679;</span>}
                            {card.xp === 2 &&
                            <span>&nbsp;&#9679;&#9679;</span>}
                            {card.xp === 3 &&
                            <span>&nbsp;&#9679;&#9679;&#9679;</span>}
                            {card.xp === 4 &&
                            <span>&nbsp;&#9679;&#9679;&#9679;&#9679;</span>}
                            {card.xp === 5 &&
                            <span>&nbsp;&#9679;&#9679;&#9679;&#9679;&#9679;</span>}
                        </h6>
                      </GridItem>
                      <GridItem xs={3} sm={3} md={3}>
                        <Button key={card.code} color={this.global.color} onClick={() => this.popImage(card.name, card.imagesrc)}>Image</Button>
                        <Dialog
                        open={this.state.imagePop}
                        onClose={() => this.closeImageViewer()}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                        >
                        <DialogContent>
                          <DialogContentText id="alert-dialog-description">
                            <img
                            alt="Unavailable"
                            src={this.state.activeImage}
                            style={{ height: "100%", width: "100%", display: "inline" }}>
                            </img>
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={() => this.closeImageViewer()} color="info" autoFocus>
                            Close
                          </Button>
                        </DialogActions>
                        </Dialog>
                      </GridItem>
                    </GridContainer>
                  ))}
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
              <CardHeader color={this.global.color}>
                <h6 className={classes.cardTitleWhite}>No Deck Selected!</h6>
              </CardHeader>
              <CardBody>
                Did you lose something?
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      )
    }
  }
}

export default withStyles(styles)(DeckManager);
