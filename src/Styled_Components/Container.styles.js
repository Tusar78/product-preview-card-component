import styled from "styled-components";

const StyledCardSection = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: var(--cream);
`;

const CardContainer = styled.div`
  width: 600px;
  height: 400px;
  display: flex;
  border-radius: 6px;
  overflow: hidden;
  background-color: var(--white);
`

const CardImage = styled.div`
  flex: 1 1 0%;
`

export { StyledCardSection, CardContainer, CardImage };
