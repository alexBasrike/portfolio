import React from 'react';
import styled from "styled-components";
import {H3} from "../../../components/headings/H3";
import {Theme} from "../../../styles/Theme";

type PortfolioItemPropsType = {
    Title: string
    ImageUrl: string
    SiteUrl?: string
}

export const PortfolioItem = ( props: PortfolioItemPropsType ) => {
    return (
        <StyledPortfolioItem>

            <figure>
                <a href={ props.SiteUrl || "#" }>
                    <img src={props.ImageUrl} alt=""/>
                </a>
            </figure>

            <H3>
                <a href={ props.SiteUrl || "#" }>{ props.Title }</a>
            </H3>

        </StyledPortfolioItem>
    );
};

const StyledPortfolioItem = styled.div `
  width: 100%;
  margin: 0 0 102px 0;
  
  @media ${Theme.media.tablet} {
    margin: 0 0 50px 0;
  }
  
  &:first-of-type {
    
    figure {
      height: 510px;

      @media ${Theme.media.tablet} {
        height: 402px;
      }

      @media ${Theme.media.mobile} {
        height: 199px;
      }
    }
  }
  
  &:last-of-type {
    margin: 0;
  }
  
  figure {
    width: 100%;
    height: 522px;
    overflow: hidden;
    margin: 0 0 42px 0;

    @media ${Theme.media.tablet} {
      height: 402px;
      margin: 0 0 22px 0;
    }
    
    @media ${Theme.media.mobile} {
      height: 199px;
    }
    
    img {
      width: 100%;
      max-width: none;
      height: 100%;
      max-height: none;
      object-fit: cover;
      transition: transform 0.4s;
    }
    
    a {
      
      &:hover {
        
        img {
          transform: scale(1.05);
        }
      }
    }
  }
`;