import React from "react";

import { BsHouseDoorFill, BsBookHalf, BsFillAlarmFill } from "react-icons/bs";
import SideNav, {
  Toggle,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";

import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useNavigate } from "react-router";

export const MySideNav = () => {
  const navigate = useNavigate();

  return (
    <SideNav
      onSelect={(selected) => {
        // console.log(selected);
        navigate(`/${selected}`);
      }}
      style={{ backgroundColor: "#0f0f2e", height: "100vh" }}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="Dashboard">
        <NavItem eventKey="dashboard">
          <NavIcon>
            <BsHouseDoorFill style={{ fontSize: "1.5em" }} />
          </NavIcon>
          <NavText>Dashboard</NavText>
        </NavItem>

        <NavItem eventKey="book-search">
          <NavIcon>
            <BsBookHalf style={{ fontSize: "1.5em" }} />
          </NavIcon>
          <NavText>Book Search</NavText>
        </NavItem>

        <NavItem eventKey="upcoming">
          <NavIcon>
            <BsFillAlarmFill style={{ fontSize: "1.5em" }} />
          </NavIcon>
          <NavText>Upcoming</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};
