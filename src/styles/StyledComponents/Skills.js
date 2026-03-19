import styled from "styled-components";
const IfProp = (propName, trueValue, falseValue) => (props) => props[propName] ? trueValue : falseValue

export const SContainerSkills = styled.main`
  display: flex;
  width: fit-content;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: ${IfProp('gap', '0px', '10px')};
  height: fit-content;
`

export const SkillItem = styled.div`
  padding-inline: 5px;
  padding-block: 2px;
  font-weight: 600;
  border-radius: 999px;
  text-align: center;
  font-family: Roboto;
  color: ${props => props.colorItem};
  border:1px solid ;
  border-color: ${props => props.colorItem};
  cursor: default;
  scale:${IfProp('scale', '0.8', '1')} ;
`
