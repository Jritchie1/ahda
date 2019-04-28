import React from "reactn";
import { Switch, Route } from "react-router-dom";
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import withStyles from "@material-ui/core/styles/withStyles";
import Navbar from "components/common/Navbar.jsx";
import Sidebar from "components/common/Sidebar.jsx";
import FixedPlugin from "components/common/FixedPlugin.jsx";

import routes from "routes.js";

import dashboardStyle from "assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx";

import image from "assets/img/sidebar-3.webp";
import logo from "assets/img/eldersignlogo.webp";
import { openDB } from 'idb';

const switchRoutes = (
  <Switch>
    {
      //eslint-disable-next-line
      routes.map((prop, index) => {
      if (prop.layout === "/ahda") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={index}
          />
        );
      }
    })}
  </Switch>
);

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

let storedTheme, activeCampaign, userCampaigns;

async function setThemeData(theme) {
  if ('indexedDB' in window) {
    db.then(function(db) {
      const tx = db.transaction('themeData', 'readwrite');
      tx.store.put(theme, 1);
      return tx.done;
    })
  }
}

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: image,
      color: "purple",
      hasImage: true,
      fixedClasses: "dropdown",
      mobileOpen: false
    };
  }

  handleImageClick = image => {
    this.setState({ image: image });
  };

  handleColorClick = (color, themeColor) => {
    this.setState({ color: color });
    this.setGlobal({ color: themeColor});
    switch (color) {
      default:
        document.body.style.backgroundColor = "lavender";
        break;
      case "purple":
        document.body.style.backgroundColor = "lavender";
        break;
      case "blue":
        document.body.style.backgroundColor = "azure";
        break;
      case "green":
        document.body.style.backgroundColor = "mintcream";
        break;
      case "orange":
        document.body.style.backgroundColor = "antiquewhite";
        break;
      case "red":
        document.body.style.backgroundColor = "oldlace";
        break;
      case "pink":
        document.body.style.backgroundColor = "seashell";
        break;
    }
  };

  handleFixedClick = () => {
    if (this.state.fixedClasses === "dropdown") {
      this.setState({ fixedClasses: "dropdown show" });
    } else {
      this.setState({ fixedClasses: "dropdown" });
    }
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  resizeFunction = () => {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false });
    }
  };

  getRoute() {
    return this.props.location.pathname;
  }

  async componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      //eslint-disable-next-line
      const ps = new PerfectScrollbar(this.refs.mainPanel);
    }
    window.addEventListener("resize", this.resizeFunction, {passive:true});

    if ('indexedDB' in window) {
      storedTheme = await(await db).get('themeData', 1);
      if (storedTheme === undefined) {
        storedTheme = {
          image: image,
          color: "purple",
          hasImage: true,
          fixedClasses: "dropdown",
          mobileOpen: false
        };
      }
      this.setState(storedTheme);
      switch (storedTheme.color) {
        default:
          this.setGlobal({color: "primary"});
          document.body.style.backgroundColor = "lavender";
          break;
        case "purple":
          this.setGlobal({color: "primary"});
          document.body.style.backgroundColor = "lavender";
          break;
        case "blue":
          this.setGlobal({color: "info"});
          document.body.style.backgroundColor = "azure";
          break;
        case "green":
          this.setGlobal({color: "success"});
          document.body.style.backgroundColor = "mintcream";
          break;
        case "orange":
          this.setGlobal({color: "warning"});
          document.body.style.backgroundColor = "antiquewhite";
          break;
        case "red":
          this.setGlobal({color: "danger"});
          document.body.style.backgroundColor = "oldlace";
          break;
        case "pink":
          this.setGlobal({color: "rose"});
          document.body.style.backgroundColor = "seashell";
          break;
      }
    }

    if ('indexedDB' in window) {
      userCampaigns = await(await db).getAll('campaignData');
      //eslint-disable-next-line
      userCampaigns.map(userCampaign => {
        if (userCampaign.active === true)
          activeCampaign = userCampaign;
      });
      this.setGlobal({activeCampaign: activeCampaign});
      this.setGlobal({campaigns: userCampaigns});
    }
  }

  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.refs.mainPanel.scrollTop = 0;
      if (this.state.mobileOpen) {
        this.setState({ mobileOpen: false });
      }
    }
    setThemeData(this.state);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeFunction);
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.wrapper}>
        <Sidebar
          routes={routes}
          logoText={"Arkham Horror"}
          logo={logo}
          image={this.state.image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          color={this.state.color}
          {...rest}
        />
        <div className={classes.mainPanel} ref="mainPanel">
        <Navbar
            routes={routes}
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest}
          />
          {this.getRoute() ? (
            <div className={classes.content}>
              <div className={classes.container}>{switchRoutes}</div>
            </div>
          ) : (
            <div className={classes.map}>{switchRoutes}</div>
          )}
          <FixedPlugin
            handleImageClick={this.handleImageClick}
            handleColorClick={this.handleColorClick}
            bgColor={this.state["color"]}
            bgImage={this.state["image"]}
            handleFixedClick={this.handleFixedClick}
            fixedClasses={this.state.fixedClasses}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(dashboardStyle)(Layout);
