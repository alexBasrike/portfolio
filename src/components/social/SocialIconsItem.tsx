import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {Theme} from "../../styles/Theme";

type SocialIconsItemPropsType = {
    link: string
    icon: string
    iconWidth: string
    iconHeight: string
    iconViewBox: string
}

export const SocialIconsItem = ( props: SocialIconsItemPropsType ) => {
    return (
        <StyledSocialIconsItem>
            <a href={props.link}>
                <Icon iconId={props.icon} iconWidth={props.iconWidth || "89"} iconHeight={props.iconHeight || "89"} iconViewBox={props.iconViewBox || "0 0 89 89"}/>
            </a>
        </StyledSocialIconsItem>
    );
};

const StyledSocialIconsItem = styled.div `
  padding: 0 30px;
  
  @media ${Theme.media.mobile} {
    padding: 0 15px;
  }

    a {
      
      &:hover {
        
        svg {
          transform: scale(1.1);
        }
      }
      
      svg {
        transition: transform 0.4s;
      }
    }
`;