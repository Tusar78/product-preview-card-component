import React from "react";
import {
  CardButton,
  CardContainer,
  CardDescription,
  CardImage,
  CardRate,
  StyledCardSection,
} from "../Styled_Components/Container.styles";
import desktopImg from "../assets/images/image-product-desktop.jpg";
import cartIcon from "../assets/images/icon-cart.svg";
import { CardDiscount, CardPrice, CardSubtitle, CardText, CardTitle, CartIcon, Image } from "../Styled_Components/Element.styles";

const CardSection = () => {
  return (
    <StyledCardSection>
      <CardContainer>
        <CardImage>
          <Image src={desktopImg} alt="Card Image" />
        </CardImage>
        <CardDescription>
          <CardSubtitle>Perfume</CardSubtitle>
          <CardTitle>Gabrielle Essence Eau De Parfum</CardTitle>
          <CardText>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</CardText>
          <CardRate>
            <CardPrice>$149.99</CardPrice>
            <CardDiscount>$169.99</CardDiscount>
          </CardRate>
          <CardButton type="button">
            <CartIcon src={cartIcon} alt="Cart Icon" />
            Add to Cart
          </CardButton>
        </CardDescription>
      </CardContainer>
    </StyledCardSection>
  );
};

export default CardSection;
