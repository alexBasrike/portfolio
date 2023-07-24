import React from 'react';
import styled from "styled-components";
import {SvgSprite} from "../icon/Icon";

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
                <SvgSprite iconId={props.icon} iconWidth={props.iconWidth || "89"} iconHeight={props.iconHeight || "89"} iconViewBox={props.iconViewBox || "0 0 89 89"}/>
            </a>
        </StyledSocialIconsItem>
    );
};

const StyledSocialIconsItem = styled.div `

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