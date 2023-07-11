import React from "react";
import Logo from "../img/Logo.png";
import hamburger from "../img/hamburger.png";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import { useState } from "react";
import "../App.css";

export const HeaderContainer = styled.div`
  width: 100%;
  box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.1);

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav__left {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5rem;
  }

  .logo {
    width: 55px;
    height: 30px;
    flex-shrink: 0;
    margin-right: 12px;
  }

  .nav__right {
    margin-right: 5rem;
  }

  button {
    border: none;
    background-color: white;
    cursor: pointer;
  }
`;

function Header() {
  const [isDropdown, setIsDropdown] = useState(false);
  const toggleDropdown = () => {
    isDropdown ? setIsDropdown(false) : setIsDropdown(true);
  };

  return (
    <>
      <HeaderContainer>
        <header>
          <div className="nav__left">
            <img className="logo" src={Logo} alt="logo" />
            <h1 className="title">Coz Shopping</h1>
          </div>
          <div className="nav__right">
            <button onClick={toggleDropdown}>
              <img className="hamburger" src={hamburger} alt="hamburger" />
            </button>
          </div>
        </header>
      </HeaderContainer>
      <div className="dropdown__box">{isDropdown ? <Dropdown /> : null}</div>
    </>
  );
}

export default Header;
