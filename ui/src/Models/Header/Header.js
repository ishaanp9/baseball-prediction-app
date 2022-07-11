import React from 'react';
import { ButtonFilled } from '../../components/Button/Button';
import { HeaderContainer, HeaderRightContainer } from './Header.jsx';

function Header() {
  return (
    //logo
    <HeaderContainer>
      <ButtonFilled type="button" backgroundColor="white">
        Logo
      </ButtonFilled>
      <HeaderRightContainer>
        <ButtonFilled type="button" backgroundColor="white">
          Login
        </ButtonFilled>
        <ButtonFilled style={{marginLeft: '25px'}} type="button" backgroundColor="white">
          Sign Up
        </ButtonFilled>
      </HeaderRightContainer>
    </HeaderContainer>

    //OR (IF LOGGED IN)

    //AND IF NOT ON HOMEPAGE SEARCH BAR SHOULD BE ALSO BE INCLUDED
  );
}

export default Header;
