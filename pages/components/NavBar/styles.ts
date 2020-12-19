import styled, { keyframes } from "styled-components";

const OpenAnimation = keyframes`
  to {display: inline-block; min-width: fit-content;}
`;

const CloseAnimation = keyframes`
  to {display: none; opacity: 1 ; min-width: 0%;}
`;

export const NavBarStyles = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  background: white;
  color: #000;
  font-size: 1.7rem;
  font-weight: 400;
  padding: 1rem 3.5rem;
  #list {
    @media (max-width: 744px) {
      position: fixed;
      right: 0;
      padding-right: 1.3rem;
      padding-top: 2.9rem;
      z-index: 100;
      height: 100%;
      background: white;
      border-left: 2px solid black;
    }
  }
  .menuOpen {
    @media (max-width: 744px) {
      animation-name: ${OpenAnimation};
      animation-duration: 3s;
      animation-iteration-count: forwards;
    }
  }
  .menuClose {
    @media (max-width: 744px) {
      display: none;
      opacity: 0;
      animation-name: ${CloseAnimation};
      animation-duration: 3s;
      animation-iteration-count: forwards;
    }
  }
  .hamburguer {
    display: none;
    position: fixed;
    right: 0;
    z-index: 200;
    padding-right: 1.3rem;
    @media (max-width: 744px) {
      display: block;
    }
  }
`;

export const Navs = styled.div`
  height: 100%;
  position: relative;
  @media (max-width: 744px) {
    align-self: flex-start;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.2rem;
  @media (max-width: 744px) {
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
  }
`;

export const DataList = styled.li`
  list-style: none;
  &:hover {
    font-weight: 700;
    cursor: pointer;
  }
  #lang {
    border-radius: 50%;
    background: url("/assets/brazil_flag.jpg");
    background-size: cover;
    background-position: center;
    padding: 0.2rem 0.2rem;
    width: 2.4rem;
    height: 2.4rem;
  }
`;
