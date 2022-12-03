import React from "react";
import {
  CardContainer,
  StyledCardSection,
} from "../Styled_Components/Container.styles";
import { desktopImg } from "../assets/images/image-product-desktop.jpg";

const CardSection = () => {
  return (
    <StyledCardSection>
      <CardContainer>
        <CardImage>
          <Image src={desktopImg} />
        </CardImage>
      </CardContainer>
    </StyledCardSection>
  );
};

export default CardSection;
