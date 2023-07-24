import React from 'react';
import svgSpriteImage from '../../assets/images/svg-sprite.svg';

type SvgSpritePropsType = {
    iconId: string
    iconWidth?: string
    iconHeight?: string
    iconViewBox?: string
}

export const SvgSprite = (props: SvgSpritePropsType) => {
    return (
        <svg width={props.iconWidth || "50"} height={props.iconHeight || "41"} viewBox={props.iconViewBox || "0 0 40 41"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={ `${svgSpriteImage}#${props.iconId}` } />
        </svg>
    );
};