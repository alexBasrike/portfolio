import React from "react";
import {SvgSprite} from "../icon/Icon";

type RatingPropsType = {
    value: number
}

export function Rating(props: RatingPropsType) {

    if ( props.value === 1 ) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        );
    }

    if ( props.value === 2 ) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        );
    }

    if ( props.value === 3 ) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        );
    }

    if ( props.value === 4 ) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
            </div>
        );
    }

    if ( props.value === 5 ) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
            </div>
        );
    }

    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    );

}

type StarPropsType = {
    selected?: boolean
}

function Star(props: StarPropsType) {
    if ( props.selected === true ) {
        return (
            <SvgSprite iconId={"iconStarFill"} iconWidth={"26"} iconHeight={"26"} iconViewBox={"0 0 26 26"}/>
        );
    } else {
        return (
            <SvgSprite iconId={"iconStar"} iconWidth={"26"} iconHeight={"26"} iconViewBox={"0 0 26 26"}/>
        );
    }
}