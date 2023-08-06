import React from 'react';
import styled from "styled-components";
import {SocialIconsItem} from "./SocialIconsItem";
import {Theme} from "../../styles/Theme";

export const SocialIcons = () => {
    return (
        <StyledSocialIcons>
            <SocialIconsItem link={"###"} icon={"iconSocialLinkedin"} iconWidth={"41"} iconHeight={"41"} iconViewBox={"0 0 41 41"}/>
            <SocialIconsItem link={"###"} icon={"iconSocialInstagram"} iconWidth={"41"} iconHeight={"41"} iconViewBox={"0 0 41 41"}/>
            <SocialIconsItem link={"###"} icon={"iconSocialBehance"} iconWidth={"41"} iconHeight={"41"} iconViewBox={"0 0 41 41"}/>
            <SocialIconsItem link={"###"} icon={"iconSocialDribble"} iconWidth={"41"} iconHeight={"41"} iconViewBox={"0 0 41 41"}/>
        </StyledSocialIcons>
    );
};

const StyledSocialIcons = styled.div `
  display: flex;
  justify-content: center;
  margin: 86px 0 0 0;
  
  @media ${Theme.media.tablet} {
    margin: 70px 0 0 0;
  }
`;