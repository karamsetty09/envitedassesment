import React from "react";
import BirthdayCake from "../Birthdaycake.png";
import { Flex } from "../LandingPage/components/Flex.styled";
import { RightContainer } from "../LandingPage/components/RightContainer.styled";
import { LeftContainer } from "../LandingPage/components/LeftContainer.styled";
import { HeaderColor } from "../LandingPage/components/HeaderColor.styled";

const CreateEvent = () => {
  return (
    <Flex>
      <LeftContainer>
        <HeaderColor>Birthday Bash</HeaderColor>
        <div>Hosted by Elysia</div>
      </LeftContainer>
      <RightContainer>
        <img src={BirthdayCake} alt='cake' />
      </RightContainer>
    </Flex>
  );
};

export default CreateEvent;
