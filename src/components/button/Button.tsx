import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme";

type ButtonPropsType = {
    text: string
}

export const Button = ( props: ButtonPropsType ) => {
    return (
        <StyledButton>{props.text}</StyledButton>
    );
};

const StyledButton = styled.button `
  background-color: ${Theme.colors.primary};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  margin: 0;
  padding: 0 29px 0 29px;
  border: none;
  border-radius: 42px;
  transition: background 0.4s;
  vertical-align: top;
  line-height: 22px;
  font-family: ${Theme.font.primary};
  font-size: 18px;
  font-weight: 700;
  color: ${Theme.colors.light};
  cursor: pointer;
  
  &:hover {
    background-color: ${Theme.colors.secondary};
  }
`;