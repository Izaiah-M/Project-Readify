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
import "./SideNav.css";

export const MySideNav = () => {
  const navigate = useNavigate();

  return (
    <SideNav
      onSelect={(selected) => {
        // console.log(selected);
        navigate(`/${selected}`);
      }}
      className="side-nav"
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="Dashboard">
        <NavItem eventKey="">
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

