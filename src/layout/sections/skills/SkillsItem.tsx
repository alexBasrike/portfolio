import React from 'react';
import {SvgSprite} from "../../../components/icon/Icon";
import styled from "styled-components";
import {Rating} from "../../../components/rating/Rating";

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
                <SvgSprite iconId={props.iconId} iconWidth={props.iconWidth || "89"} iconHeight={props.iconHeight || "89"} iconViewBox={props.iconViewBox || "0 0 89 89"}/>
                <figcaption>{props.iconText}</figcaption>
            </figure>
            <Rating value={props.ratingValue}/>
        </StyledSkillsItem>
    );
};

const StyledSkillsItem = styled.div `
  display: flex;
  flex-direction: column;
`;