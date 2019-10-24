import React from "react";
import "./App.css";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import HomePage from "./HomePage";
import HistoryPage from "./HistoryPage";
import SettingsPage from "./SettingsPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Route
            render={({ location, history }) => (
              <React.Fragment>
                <SideNav
                  onSelect={selected => {
                    var to = "";

                    if (selected === "home") {
                      to = "/";
                    } else {
                      to = "/" + selected;
                    }

                    if (location.pathname !== to) {
                      history.push(to);
                    }
                  }}
                >
                  <Toggle />
                  <Nav defaultSelected="home">
                    <NavItem eventKey="home">
                      <NavIcon>
                        <i
                          className="fa fa-fw fa-home"
                          style={{ fontSize: "1.75em" }}
                        />
                      </NavIcon>
                      <NavText>Home</NavText>
                    </NavItem>
                    <NavItem eventKey="history">
                      <NavIcon>
                        <i
                          className="fa fa-fw fa-history"
                          style={{ fontSize: "1.75em" }}
                        />
                      </NavIcon>
                      <NavText>History</NavText>
                    </NavItem>
                    <NavItem eventKey="settings">
                      <NavIcon>
                        <i
                          className="fa fa-fw fa-line-settings"
                          style={{ fontSize: "1.75em" }}
                        />
                      </NavIcon>
                      <NavText>Settings</NavText>
                    </NavItem>
                  </Nav>
                </SideNav>
                <main>
                  <Route path="/" exact component={props => <HomePage />} />
                  <Route
                    path="/history"
                    exact
                    component={props => <HistoryPage />}
                  />
                  <Route
                    path="/settings"
                    exact
                    component={props => <SettingsPage />}
                  />
                </main>
              </React.Fragment>
            )}
          />
        </Router>
      </div>
    );
  }
}

export default App;
