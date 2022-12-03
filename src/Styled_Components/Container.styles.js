import styled from "styled-components";

const StyledCardSection = styled.section`
  width: 100%;
  display: grid;
  place-items: center;
  background-color: var(--cream);
  padding: 50px 20px;

  @media screen and (min-width: 768px) {
    height: 100vh;
  }
`;

const CardContainer = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--white);

  @media screen and (min-width: 768px) {
    width: 600px;
    flex-direction: row;
  }
`;

const CardImage = styled.div`
  height: 240px;

  @media screen and (min-width: 768px) {
    height: auto;
    width: 300px;
  }
`;

const CardDescription = styled.div`
  padding: 32px;

  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

const CardRate = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  margin: 30px 0 25px;
`;
const CardButton = styled.button`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
  text-align: center;
  background-color: var(--dark-cyan);
  color: var(--white);
  font-family: var(--body-font);
  font-weight: var(--font-500);
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  transition: all .25s ease;

  &:hover {
    background-color: hsl(158,36%,20%);
  }
`;

export {
  StyledCardSection,
  CardContainer,
  CardImage,
  CardDescription,
  CardRate,
  CardButton,
};
