/*eslint-disable*/
import React, { Component } from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CustomInput from "components/common/CustomInput.jsx";
import classnames from "classnames";
import imagine1 from "assets/img/sidebar-1.webp";
import imagine2 from "assets/img/sidebar-2.webp";
import imagine3 from "assets/img/sidebar-3.webp";
import imagine4 from "assets/img/sidebar-4.webp";

import Button from "components/common/Button.jsx";

class FixedPlugin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: "dropdown show",
      bg_checked: true,
      bgImage: this.props.bgImage,
      loggedIn: this.props.loggedIn,
      loginBtnText: this.props.loginBtnText,
      loginBtnColor: this.props.loginBtnColor,
      loginWindowOpen: false,
      logoutWindowOpen: false,
      registerWindowOpen: false,
      copyrightWindowOpen: false
    };

    if (!this.state.loggedIn)
    {
      this.state.loggedIn = false;
    }

    if (this.state.loggedIn === false)
    {
      this.state.loginBtnText = "Log In";
      this.state.loginBtnColor = "success";
    }
    else
    {
      this.state.loginBtnText = "Log Out";
      this.state.loginBtnColor = "danger";
    }
    this.handleClick = this.handleClick.bind(this);
  }

  showLoginWindow() {
    this.setState({ loginWindowOpen: true });
  }

  closeLoginWindow() {
    this.setState({ loginWindowOpen: false });
  }

  showLogoutWindow() {
    this.setState({ logoutWindowOpen: true });
  }

  closeLogoutWindow() {
    this.setState({ logoutWindowOpen: false });
  }

  showRegisterWindow() {
    this.setState({ registerWindowOpen: true });
  }

  closeRegisterWindow() {
    this.setState({ registerWindowOpen: false });
  }

  showCopyrightWindow() {
    this.setState({ copyrightWindowOpen: true });
  }

  closeCopyrightWindow() {
    this.setState({ copyrightWindowOpen: false });
  }

  login() {
    this.loginStateChange();
    this.closeLoginWindow();
  }

  createAccount() {
    this.loginStateChange();
    this.closeLoginWindow();
  }

  logout() {
    this.loginStateChange();
    this.closeLogoutWindow();
  }

  loginStateChange() {
    if (this.state.loggedIn === false)
    {
      this.setState({loggedIn:true});
      this.setState({loginBtnText:"Log Out"});
      this.setState({loginBtnColor:"primary"});
    }
    else {
      this.setState({loggedIn:false});
      this.setState({loginBtnText:"Log In"});
      this.setState({loginBtnColor:"success"});
    }
  }

  handleClick() {
    this.props.handleFixedClick();
  }

  render() {
    return (
      <div
        className={classnames("fixed-plugin")}
      >
        <div id="fixedPluginClasses" className={this.props.fixedClasses}>
          <div onClick={this.handleClick}>
            <i className="fa fa-cog fa-2x" />
          </div>
          <ul className="dropdown-menu">
            <li className="header-title">THEME COLOUR</li>
            <li className="adjustments-line">
              <a className="switch-trigger">
                <div>
                  <span
                    className={
                      this.props.bgColor === "purple"
                        ? "badge filter badge-purple active"
                        : "badge filter badge-purple"
                    }
                    data-color="purple"
                    onClick={() => {
                      this.props.handleColorClick("purple", "primary");
                    }}
                  />
                  <span
                    className={
                      this.props.bgColor === "blue"
                        ? "badge filter badge-blue active"
                        : "badge filter badge-blue"
                    }
                    data-color="blue"
                    onClick={() => {
                      this.props.handleColorClick("blue", "info");
                    }}
                  />
                  <span
                    className={
                      this.props.bgColor === "green"
                        ? "badge filter badge-green active"
                        : "badge filter badge-green"
                    }
                    data-color="green"
                    onClick={() => {
                      this.props.handleColorClick("green", "success");
                    }}
                  />
                  <span
                    className={
                      this.props.bgColor === "orange"
                        ? "badge filter badge-orange active"
                        : "badge filter badge-orange"
                    }
                    data-color="orange"
                    onClick={() => {
                      this.props.handleColorClick("orange", "warning");
                    }}
                  />
                  <span
                    className={
                      this.props.bgColor === "pink"
                        ? "badge filter badge-pink active"
                        : "badge filter badge-pink"
                    }
                    data-color="pink"
                    onClick={() => {
                      this.props.handleColorClick("pink", "rose");
                    }}
                  />
                  <span
                    className={
                      this.props.bgColor === "red"
                        ? "badge filter badge-red active"
                        : "badge filter badge-red"
                    }
                    data-color="red"
                    onClick={() => {
                      this.props.handleColorClick("red", "danger");
                    }}
                  />
                </div>
              </a>
            </li>
            <li className="header-title">SIDEBAR IMAGE</li>
            <li className={this.state["bgImage"] === imagine1 ? "active" : ""}>
              <a
                className="img-holder switch-trigger"
                onClick={() => {
                  this.setState({ bgImage: imagine1 });
                  this.props.handleImageClick(imagine1);
                }}
              >
                <img src={imagine1} alt="..." />
              </a>
            </li>
            <li className={this.state["bgImage"] === imagine2 ? "active" : ""}>
              <a
                className="img-holder switch-trigger"
                onClick={() => {
                  this.setState({ bgImage: imagine2 });
                  this.props.handleImageClick(imagine2);
                }}
              >
                <img src={imagine2} alt="..." />
              </a>
            </li>
            <li className={this.state["bgImage"] === imagine3 ? "active" : ""}>
              <a
                className="img-holder switch-trigger"
                onClick={() => {
                  this.setState({ bgImage: imagine3 });
                  this.props.handleImageClick(imagine3);
                }}
              >
                <img src={imagine3} alt="..." />
              </a>
            </li>
            <li className={this.state["bgImage"] === imagine4 ? "active" : ""}>
              <a
                className="img-holder switch-trigger"
                onClick={() => {
                  this.setState({ bgImage: imagine4 });
                  this.props.handleImageClick(imagine4);
                }}
              >
                <img src={imagine4} alt="..." />
              </a>
            </li>

            <li className="button-container">
              <div className="button-container">
                <Button
                  color={this.state.loginBtnColor}
                  fullWidth
                  onClick={this.state.loggedIn ? () => this.showLogoutWindow() : () => this.showLoginWindow()}
                >
                  {this.state.loginBtnText}
                </Button>
                <Dialog
                open={this.state.loginWindowOpen}
                onClose={() => this.closeLoginWindow()}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
                <DialogTitle id="alert-dialog-title">{"Log In - Coming Soon!"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                  <CustomInput
                    labelText="Username"
                    id="username"
                    type="text"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  <CustomInput
                    labelText="Password"
                    id="password"
                    type="password"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => this.login()} disabled color="success">
                    Log In
                  </Button>
                  <Button onClick={() => this.closeLoginWindow()} color="danger">
                    Close Window
                  </Button>
                </DialogActions>
                </Dialog>
                <Dialog
                open={this.state.logoutWindowOpen}
                onClose={() => this.closeLogoutWindow()}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
                <DialogTitle id="alert-dialog-title">{"Log Out - Coming Soon!"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Click to confirm you wish to log out
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => this.logout()} disabled color="primary">
                    Log Out
                  </Button>
                </DialogActions>
                </Dialog>
              </div>
            </li>
            {this.state.loggedIn === false &&
            <li className="button-container">
              <div className="button-container">
                  <Button
                    color="info"
                    fullWidth
                    onClick={() => this.showRegisterWindow()}
                  >
                    Register
                  </Button>
                  <Dialog
                  open={this.state.registerWindowOpen}
                  onClose={() => this.closeRegisterWindow()}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                  >
                  <DialogTitle id="alert-dialog-title">{"Register - Coming Soon!"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    <CustomInput
                      labelText="Username"
                      id="username"
                      type="text"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                    <CustomInput
                      labelText="Full Name"
                      id="full-name"
                      type="text"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                    <CustomInput
                      labelText="Email address"
                      id="email-address"
                      type="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="password"
                      type="password"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                    <CustomInput
                      labelText="Password Confirmation"
                      id="password-confirm"
                      type="password"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => this.register()} disabled color="info">
                      Register
                    </Button>
                    <Button onClick={() => this.closeRegisterWindow()} color="danger">
                      Close Window
                    </Button>
                  </DialogActions>
                  </Dialog>
                </div>
              </li>}

            <li className="button-container">
              <Button
                color="rose"
                fullWidth
                href="https://www.fantasyflightgames.com/"
                target="_blank"
                rel="noreferrer"
              >
                Visit Fantasy Flight Games
              </Button>
            </li>
            <li className="button-container">
              <div className="button-container">
                  <Button
                    color="danger"
                    fullWidth
                    onClick={() => this.showCopyrightWindow()}
                  >
                    Copyright Notice
                  </Button>
                  <Dialog
                  open={this.state.copyrightWindowOpen}
                  onClose={() => this.closeCopyrightWindow()}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                  >
                  <DialogTitle id="alert-dialog-title">{"Copyright Notice"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      The information presented on this site about Arkham Horror: The Card Game, both literal and graphical, is copyrighted by Fantasy Flight Games. This website is not produced, endorsed, supported, or affiliated with Fantasy Flight Games.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => this.closeCopyrightWindow()} color="danger">
                      Close Window
                    </Button>
                  </DialogActions>
                  </Dialog>
                </div>
              </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FixedPlugin;
