import React from 'react';
import styled from "styled-components";
import {H2} from "../../../components/headings/H2";
import {Container} from "../../../components/container/Container";
import {Theme} from "../../../styles/Theme";

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <H2>About me</H2>
                <p>Hi, I'm Denis – UX/UI designer from Minsk. <br/>I'm interested in design and everything connected with it.</p>
                <p>I'm studying at courses "Web and mobile design <br/>interfaces" in IT-Academy.</p>
                <p>Ready to implement excellent projects <br/>with wonderful people.</p>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section `
  background-color: #F6F6F6;
  padding: 114px 0 87px 0;
  text-align: center;
  
  @media ${Theme.media.tablet} {
    padding: 70px 0 54px 0;
  }
  
  p {
    margin: 0 0 44px 0;
    
    &:last-of-type {
      margin: 0 0 22px 0;
    }
    
    br {
      
      @media ${Theme.media.mobile} {
        display: none;
      }
    }
  }
`;