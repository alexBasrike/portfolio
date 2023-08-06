import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";
import {Rating} from "../../../components/rating/Rating";
import {Theme} from "../../../styles/Theme";

type SkillItemPropsType = {
    ratingValue: number
    iconId: string
    iconWidth?: string
    iconHeight?: string
    iconViewBox?: string
    iconText: string
}

export const SkillsItem = ( props: SkillItemPropsType ) => {
    return (
        <StyledSkillsItem>
            <figure>
                <Icon iconId={props.iconId} iconWidth={props.iconWidth || "89"} iconHeight={props.iconHeight || "89"} iconViewBox={props.iconViewBox || "0 0 89 89"}/>
                <figcaption>{props.iconText}</figcaption>
            </figure>
            <Rating value={props.ratingValue}/>
        </StyledSkillsItem>
    );
};

const StyledSkillsItem = styled.div `
  display: flex;
  flex-direction: column;
  width: 168px;
  
  @media ${Theme.media.tablet} {
    width: 50%;
    margin: 40px 0 0 0;
  }
  
  &:nth-child(1),
  &:nth-child(2) {
    
    @media ${Theme.media.tablet} {
      margin: 0;
    }
  }
  
  figure {
    margin: 0 0 38px 0;
    
    @media ${Theme.media.tablet} {
      margin: 0 0 17px 0;
    }
    
    img {
      max-width: 89px;
      max-height: 89px;
    }
    
    figcaption {
      margin: 17px 0 0 0;
      padding: 0 30px;
      line-height: 17px;
      font-size: 14px;
      font-weight: 700;
      color: ${Theme.colors.secondary};
    }
  }
  
  
`;