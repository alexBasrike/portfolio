import React from 'react';
import styled from "styled-components";

export const SocialShare = () => {
    return (
        <StyledSocialShare>
            <p>Like me on</p>
            <p>
                <a href="#!" target={"_blank"}>LinkedIn</a>,&nbsp;
                <a href="#!" target={"_blank"}>Instagram</a>,&nbsp;
                <a href="#!" target={"_blank"}>Behance</a>,&nbsp;
                <a href="#!" target={"_blank"}>Dribble</a>
            </p>
        </StyledSocialShare>
    );
};

const StyledSocialShare = styled.div `
  margin: 45px 0 0 0;
  
    p {
      margin: 0 !important;
    }
`;