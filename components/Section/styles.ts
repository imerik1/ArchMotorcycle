import styled from "styled-components";
export const SectionStyles = styled.section`
  max-height: 100%;
  max-width: 100vw;
  padding: 1rem 3.5rem;
`;
export const Motos = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 4rem;
  #inverso {
    flex-direction: row-reverse;
  }
`;

export const Moto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: normal;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 1.6rem;
  @media (max-width: 1052px) {
    flex-wrap: wrap;
  }
  #imagem {
    width: 375%;
    max-width: 107rem;
  }
  h1 {
    font-size: 8rem;
    font-weight: 700;
    line-height: 7.8rem;
    padding: 0;
    margin: 0;
  }
  h2 {
    font-size: 2.7rem;
    line-height: 1.8rem;
    font-weight: 400;
    margin: 1rem 0 1rem;
    padding: 0;
  }
  p {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.8rem;
    margin: 0;
    padding: 0;
  }
`;
