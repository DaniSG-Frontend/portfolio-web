import styled from "styled-components";


export const LinkName = styled.p`
  font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #9a031e;
  font-weight: bold;
`

export const Linked = styled.strong`
  font-family: Roboto , system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-decoration: none;
  font-weight: 400;
  color: #d3d3d3;
  cursor: pointer;

  &:active{
    color: #9a031e;
  }
`

export const LinkedContainer = styled.main`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;

`
