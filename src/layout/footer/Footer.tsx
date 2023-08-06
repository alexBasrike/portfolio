import React from 'react';
import {Container} from "../../components/container/Container";
import styled from "styled-components";
import {H2} from "../../components/headings/H2";
import {Button} from "../../components/button/Button";
import {SocialIcons} from "../../components/social/SocialIcons";
import {SocialShare} from "../../components/social/SocialShare";
import {Theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>

                <H2>Contacts</H2>
                <p>Want to know more or just chat? <br/>You are welcome!</p>
                <Button text={"Send message"}/>

                <SocialIcons/>
                <SocialShare/>

            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer `
  padding: 108px 0 114px 0;
  text-align: center;
  
  @media ${Theme.media.tablet} {
    padding: 70px 0 76px 0;
  }
  
  h2 {
    margin: 0 0 24px 0;
  }
  
  p {
    margin: 0 0 33px 0;
  }
`;