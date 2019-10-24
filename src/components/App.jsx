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
import Home from "./Home";

class App extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div className="App">
        <SideNav onSelect={selected => {}}>
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
        <div className="Page"></div>
        <Home></Home>
      </div>
    );
  }
}

export default App;
