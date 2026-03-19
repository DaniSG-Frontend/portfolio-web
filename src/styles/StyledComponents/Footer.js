import styled from "styled-components";
const IfProp = (propName, trueValue, falseValue) => (props) => props[propName] ? trueValue : falseValue

export const SFooter = styled.footer`
  width: 100%;
  height: 20vh;
  display: flex;
  padding-top: 10px;
  border-top: 2px solid #6c0012;
  @media (width <= 450px ) {
    flex-direction: column;
    gap: 30px;
  }
`
export const SectionFooterOne = styled.section`
  display: flex;
  flex-grow: 1;
  height: 100%;
  flex-direction: column;
`

export const SectionFooterTwo = styled.section`
  display: flex;
  flex-basis: 50%;
  height: 100%;
  justify-content: space-between;
  gap: 5px;
`

export const SubTitleFooter = styled.p`
  font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 13px;
  color: ${IfProp('sectionTwo', '#d3d3d3', '#6C0012')};
  text-align: ${IfProp('sectionTwo', 'center', '')} ;

`
