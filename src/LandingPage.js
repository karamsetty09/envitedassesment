import React from "react";

import { LeftContainer } from "./components/LeftContainer.styled";
import { RightContainer } from "./components/RightContainer.styled";
import { Flex } from "./components/Flex.styled";
import { Button } from "./components/Button.styled";
import { ColoredHeader } from "./components/ColoredHeader.styled";
import LandingPageImage from "./LandingPageImage.svg";
import { RightTopContainer } from "./components/RightTopContainer.styled";
import { RightBottomContainer } from "./components/RightBottomContainer.styled";
import { HeaderColor } from "./components/HeaderColor.styled";
import { Outlet, Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <Flex>
        <LeftContainer>
          <img src={LandingPageImage} alt='Landing Page' />
        </LeftContainer>
        <RightContainer>
          <RightTopContainer>
            <HeaderColor>Imagine if</HeaderColor>
            <ColoredHeader>SnapChat</ColoredHeader>
            <HeaderColor>had events</HeaderColor>
            <div>
              Easily host and share events with your friends across any social
              media
            </div>
          </RightTopContainer>
          <RightBottomContainer>
            <Link to='/create'>
              <Button
                bg='linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)'
                color='#fff'
              >
                🎉 Create my event
              </Button>
            </Link>
          </RightBottomContainer>
        </RightContainer>
      </Flex>
    </>
  );
};

export default LandingPage;
