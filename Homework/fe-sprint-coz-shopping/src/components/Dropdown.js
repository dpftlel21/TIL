import React from "react";
import styled from "styled-components";

export const DropdownContainer = styled.div`
  width: 200px;
  height: 172px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  #box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12rem;
    height: 3rem;
    flex: none;
    order: 1;
    flex-grow: 0;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

function Dropdown() {
  return (
    <DropdownContainer>
      <div id="box">OOO님, 안녕하세요!</div>
      <div id="box">🎁 상품리스트 페이지</div>
      <div id="box">⭐️ 북마크 페이지</div>
    </DropdownContainer>
  );
}

export default Dropdown;
