import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme";

export const Navigation = () => {
    return (
        <StyledMenu>
            <ul>
                <li className={"active"}>
                    <a href="#!">Home</a>
                </li>
                <li>
                    <a href="#!">About me</a>
                </li>
                <li>
                    <a href="#!">Skills</a>
                </li>
                <li>
                    <a href="#!">Portfolio</a>
                </li>
                <li>
                    <a href="#!">Contacts</a>
                </li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav `
  
    ul {
      display: flex;
      justify-content: space-between;
      
      li {
        
        &.active {
          
          a {
            color: ${Theme.colors.primary};
          }
        }
        
        a {
          font-weight: bold;
          color: ${Theme.colors.secondary};
          
          &:hover {
            color: ${Theme.colors.primary};
          }
        }
      }
    }
`;