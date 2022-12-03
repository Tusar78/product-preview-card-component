import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    object-fit: unset;
  }
`;

const CardSubtitle = styled.span`
  letter-spacing: 4px;
  font-size: 12px;
  text-transform: uppercase;
  color: var(--dark-grayish-blue);
`;

const CardTitle = styled.h2`
  font-size: 30px;
  margin: 25px 0 30px;
  font-family: var(--heading-font);
  font-weight: var(--font-700);
  color: var(--very-dark-blue);
  line-height: 32px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

const CardText = styled.p`
  line-height: 20px;
  color: var(--dark-grayish-blue);
`;

const CardPrice = styled.h3`
  font-family: var(--heading-font);
  font-size: 32px;
  color: var(--dark-cyan);
`;

const CardDiscount = styled.span`
  color: var(--dark-grayish-blue);
  text-decoration: line-through;
  font-size: var(--normal-size);
`;

const CartIcon = styled.img``;

export {
  Image,
  CardSubtitle,
  CardTitle,
  CardText,
  CardPrice,
  CardDiscount,
  CartIcon,
};
