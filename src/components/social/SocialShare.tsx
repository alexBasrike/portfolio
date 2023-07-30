import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme";

export const SocialShare = () => {
    return (
        <StyledSocialShare>
            <p>Like me on</p>
            <p>
                <a href="#!" target={"_blank"}>LinkedIn</a>,&nbsp;
                <a href="#!" target={"_blank"}>Instagram</a>,&nbsp;
                <a href="#!" target={"_blank"}>Behance</a>,&nbsp;
                <a href="#!" target={"_blank"}>Dribble</a>
            </p>
        </StyledSocialShare>
    );
};

const StyledSocialShare = styled.div `
  margin: 38px 0 0 0;
  line-height: 17px;
  font-size: 14px;
  color: ${Theme.colors.secondary};
  
    p {
      margin: 0 !important;
    }
  
  a {
    position: relative;
    
    &:before {
      background-color: ${Theme.colors.secondary};
      display: block;
      width: 0%;
      height: 1px;
      overflow: hidden;
      position: absolute;
      right: 0;
      bottom: 0;
      transition: width 0.4s;
      content: '';
    }
    
    &:hover {
      
      &:before {
        width: 100%;
        right: auto;
        left: 0;
      }
    }
  }
`;