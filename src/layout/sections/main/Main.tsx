import React from 'react';
import styled from "styled-components";
import {Author} from "../author/Author";
import {About} from "../about/About";
import {Skills} from "../skills/Skills";
import {Portfolio} from "../portfolio/Portfolio";
import {Theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Author/>
            <About/>
            <Skills/>
            <Portfolio/>
        </StyledMain>
    );
};

const StyledMain = styled.main`
  padding: 98px 0 0 0;
  
  @media ${Theme.media.tablet} {
    padding: 50px 0 0 0;
  }
`;