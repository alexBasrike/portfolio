import React from "react";
import {Icon} from "../icon/Icon";
import styled from "styled-components";

type RatingPropsType = {
    value: number
}

export function Rating(props: RatingPropsType) {

    if ( props.value === 1 ) {
        return (
            <StarList>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </StarList>
        );
    }

    if ( props.value === 2 ) {
        return (
            <StarList>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </StarList>
        );
    }

    if ( props.value === 3 ) {
        return (
            <StarList>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </StarList>
        );
    }

    if ( props.value === 4 ) {
        return (
            <StarList>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
            </StarList>
        );
    }

    if ( props.value === 5 ) {
        return (
            <StarList>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
            </StarList>
        );
    }

    return (
        <StarList>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </StarList>
    );

}

type StarPropsType = {
    selected?: boolean
}

function Star(props: StarPropsType) {
    if ( props.selected === true ) {
        return (
            <Icon iconId={"iconStarFill"} iconWidth={"26"} iconHeight={"26"} iconViewBox={"0 0 26 26"}/>
        );
    } else {
        return (
            <Icon iconId={"iconStar"} iconWidth={"26"} iconHeight={"26"} iconViewBox={"0 0 26 26"}/>
        );
    }
}

const StarList = styled.div `
  display: flex;
  justify-content: center;
  margin-top: auto;
  
  svg {
    margin: 0 4px;
  }
`;