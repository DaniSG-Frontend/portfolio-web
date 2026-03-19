import styled from "styled-components";

const IfProp = (propName, trueValue, falseValue) => (props) => props[propName] ? trueValue : falseValue

export const Section = styled.section`
  height: fit-content;
  width: 100%;
  margin-block: 11vh;
  display: ${IfProp('flex', 'flex', 'block')};
  flex-direction: ${IfProp('flex', 'column', '')};
  /* border: 1px dashed orange; */
  align-items: ${IfProp('flex', 'center', '')};

  animation: reveal linear both;
  animation-timeline: view();
  animation-range: entry 20%  cover 30%;

  @keyframes reveal{
    0%{
      opacity: 0;
      translate: 0 50px;
    }
    100%{
      opacity: 1;
      translate: 0 0;
    }
  }
`

export const STitleSection = styled.h2`
  font-family: GeneralSans;
  width: 100%;
  font-size: ${IfProp('footer', '18px', '26px')};
  text-align: ${IfProp('footer', 'center', '')};
  color: #9a031e;
`

export const SdescriptionAbout = styled.p`
  font-family: Roboto;
  width: 95%;
  font-size: 17px;
  color: #c3c2c2;
  line-height: 1.2;
  font-weight: 400;
  margin-bottom: 10px;
`
