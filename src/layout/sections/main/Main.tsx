import React from 'react';
import styled from "styled-components";
import {Author} from "../author/Author";
import {About} from "../about/About";
import {Skills} from "../skills/Skills";
import {Portfolio} from "../portfolio/Portfolio";

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
  padding: 89px 0 0 0;
`;