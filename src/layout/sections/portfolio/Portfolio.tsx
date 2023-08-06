import React from 'react';
import styled from "styled-components";
import {H2} from "../../../components/headings/H2";
import {Container} from "../../../components/container/Container";
import {PortfolioItem} from "./PortfolioItem";

import PortfolioImage1 from "../../../assets/images/portfolio-01.jpg";
import PortfolioImage2 from "../../../assets/images/portfolio-02.jpg";
import PortfolioImage3 from "../../../assets/images/portfolio-03.jpg";
import {Theme} from "../../../styles/Theme";

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
  background-color: ${Theme.colors.background};
  padding: 107px 0 100px 0;
  
  @media ${Theme.media.tablet} {
    padding: 70px 0 80px 0;
  }
  
  h2 {
    margin: 0 0 54px 0;
    
    @media ${Theme.media.tablet} {
      margin: 0 0 22px 0;
    }
  }
`;