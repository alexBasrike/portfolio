import React from 'react';
import styled from "styled-components";

type ButtonPropsType = {
    text: string
}

export const Button = ( props: ButtonPropsType ) => {
    return (
        <StyledButton>{props.text}</StyledButton>
    );
};

const StyledButton = styled.button `
  background-color: #070707;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  margin: 0;
  padding: 0 29px 0 29px;
  border: none;
  border-radius: 42px;
  line-height: 22px;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
`;