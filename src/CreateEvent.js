import React from "react";
import BirthdayCake from "./Birthdaycake.png";
import { Flex } from "./components/Flex.styled";
import { RightContainer } from "./components/RightContainer.styled";
import { LeftContainer } from "./components/LeftContainer.styled";
import { HeaderColor } from "./components/HeaderColor.styled";

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
