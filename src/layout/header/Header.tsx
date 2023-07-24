import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/container/Container";
import {Navigation} from "../../components/navigation/Navigation";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>

                <Navigation/>

            </Container>
        </StyledHeader>
    );
};

export const StyledHeader = styled.header `
  background-color: #ffffff;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 99;
  
  &:before {
    background-color: #828282;
    display: block;
    height: 1px;
    overflow: hidden;
    position: absolute;
    right: 50%;
    bottom: 0;
    left: 50%;
    margin: 0 -472px;
    transition: right 0.4s, left 0.4s, margin 0.4s;
    content: '';
  }
`;