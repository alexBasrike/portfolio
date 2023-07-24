import React from 'react';
import styled from "styled-components";
import {H2} from "../../../components/headings/H2";
import {Container} from "../../../components/container/Container";
import {PortfolioItem} from "./PortfolioItem";

import PortfolioImage1 from "../../../assets/images/portfolio-01.jpg";
import PortfolioImage2 from "../../../assets/images/portfolio-02.jpg";
import PortfolioImage3 from "../../../assets/images/portfolio-03.jpg";

export const Portfolio = () => {
    return (
        <StyledPortfolio>
            <Container>
                <H2>Portfolio</H2>
                <PortfolioItem ImageUrl={ PortfolioImage1 } Title={"Online fashion store - Homepage"} SiteUrl={"###"}/>
                <PortfolioItem ImageUrl={ PortfolioImage2 } Title={"Reebok Store - Concept"}/>
                <PortfolioItem ImageUrl={ PortfolioImage3 } Title={"Braun Landing Page - Concept"}/>
            </Container>
        </StyledPortfolio>
    );
};

const StyledPortfolio = styled.section `
  background-color: #F6F6F6;
  padding: 112px 0 96px 0;
`;