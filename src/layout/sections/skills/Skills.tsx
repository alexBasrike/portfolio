import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/container/Container";
import {H2} from "../../../components/headings/H2";
import {SkillsItem} from "./SkillsItem";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>

                <H2>Skills</H2>
                <p>I work in such programs as</p>

                <StyledSkillsList>
                    <SkillsItem ratingValue={4} iconId={"skillsPhotoshop"} iconWidth={"89"} iconHeight={"89"} iconViewBox={"0 0 89 89"} iconText={"Adobe Photoshop"} />
                    <SkillsItem ratingValue={3} iconId={"skillsIllustrator"} iconWidth={"89"} iconHeight={"89"} iconViewBox={"0 0 89 89"} iconText={"Adobe Illustrator"} />
                    <SkillsItem ratingValue={4} iconId={"skillsAfterEffects"} iconWidth={"89"} iconHeight={"89"} iconViewBox={"0 0 89 89"} iconText={"Adobe After Effects"} />
                    <SkillsItem ratingValue={4} iconId={"skillsFigma"} iconWidth={"59"} iconHeight={"89"} iconViewBox={"0 0 59 89"} iconText={"Figma"} />
                </StyledSkillsList>

            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section `
  padding: 91px 0 91px 0;
  text-align: center;
`;

const StyledSkillsList = styled.div `
  display: flex;
  flex-wrap: wrap;
  margin: 83px 0 0 0;
  
  > div {
    width: 25%;
    padding: 0 20px;
    box-sizing: border-box;
  }
`;