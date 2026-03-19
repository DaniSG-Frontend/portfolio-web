import styled from "styled-components";

export const SHeader = styled.header`
  width: 100%;
  max-width: 550px;
  height: 6vh;
  margin-bottom: 4vh;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:  #00000029;
  z-index: 999;
  backdrop-filter: blur(24px);
  margin-bottom: 10px;

  @media (width <= 550px) {
    left: 0;
    top: 0;
  }
`

export const STitleHeader = styled.h1`
  color: #9a031e;
  font-family: GeneralSans;
  
  @media (width <= 550px) {
    margin-left: 10px;
  }
`

export const Menu = styled.details`
  min-height: 50px;
  margin-top: 5vh;
  background: red;
  list-style: none;
`
