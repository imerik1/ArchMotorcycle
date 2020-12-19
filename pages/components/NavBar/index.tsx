import { NavBarStyles, Navs, List, DataList } from "./styles";
import { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";
export const NavBar = () => {
  const [count, setMenu] = useState(false);
  function ToggleMenu() {
    setMenu(!count);
  }
  return (
    <NavBarStyles>
      <Navs>
        <img
          src='/assets/ARCH_Motorcycle_logo.png'
          alt='Logo da Arch'
          width='90rem'
          height='auto'
        />
      </Navs>
      <div className='hamburguer' onClick={ToggleMenu}>
        <Hamburger />
      </div>
      <Navs id='list' className={count ? "menuOpen" : "menuClose"}>
        <List>
          <DataList>HOME</DataList>
          <DataList>ARCH 1s</DataList>
          <DataList>ARCH Method 143</DataList>
          <DataList>BUILD</DataList>
          <DataList>CONTACT</DataList>
          <DataList>
            <div id='lang'></div>
          </DataList>
        </List>
      </Navs>
    </NavBarStyles>
  );
};
