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
                {/*<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90" fill="none">*/}
                {/*    <path d="M3.93411 4.42578H85.5995V85.2804H3.93411V4.42578Z" fill="url(#paint0_radial_6_7747)"/>*/}
                {/*    <path d="M3.93406 4.42575H85.5994V85.2803H3.93406V4.42575ZM0.221191 89.0596H89.2944V0.646484H0.221191V89.0596ZM60.2876 36.9311C57.3602 36.9311 56.3605 38.4392 56.3605 39.6929C56.3605 41.0556 57.021 42.0004 60.9659 44.0717C66.7852 46.9425 68.6059 49.7043 68.6059 53.7379C68.6059 59.7884 64.0719 63.0408 57.9492 63.0408C54.7183 63.0408 51.9337 62.3685 50.345 61.4237C50.0772 61.3146 50.0415 61.1148 50.0415 60.8241V55.246C50.0415 54.8645 50.22 54.7554 50.4878 54.9371C52.8262 56.4815 55.5037 57.172 57.9492 57.172C60.8767 57.172 62.1084 55.9183 62.1084 54.2285C62.1084 52.8658 61.2515 51.6666 57.503 49.6861C52.2371 47.1242 50.0415 44.526 50.0415 40.1653C50.0415 35.2958 53.7901 31.244 60.2876 31.244C63.4828 31.244 65.7141 31.7346 66.928 32.2979C67.2314 32.4796 67.3028 32.7884 67.3028 33.061V38.2393C67.3028 38.5482 67.1243 38.7299 66.7495 38.6209C65.1072 37.567 62.6974 36.9311 60.2876 36.9311ZM28.3712 41.419C29.228 41.4917 29.8885 41.4917 31.3701 41.4917C35.7077 41.4917 39.7954 39.9472 39.7954 33.9331C39.7954 29.1364 36.868 26.7198 31.9234 26.7198C30.4418 26.7198 29.0317 26.7925 28.3533 26.8288L28.3712 41.419ZM21.7487 21.3598C21.7487 21.0872 22.2664 20.9055 22.5698 20.9055C24.9439 20.7965 28.4783 20.7239 32.1376 20.7239C42.4194 20.7239 46.4358 26.4654 46.4358 33.7878C46.4358 43.3813 39.5991 47.5058 31.2094 47.5058C29.7992 47.5058 29.3173 47.4331 28.3176 47.4331V61.9324C28.3176 62.2413 28.2105 62.3867 27.8714 62.3867H22.195C21.8915 62.3867 21.7487 62.2776 21.7487 61.9324V21.3598Z" fill="#31C5F0"/>*/}
                {/*    <defs>*/}
                {/*        <radialGradient id="paint0_radial_6_7747" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(30.8385 22.5656) scale(62.0565 61.1565)">*/}
                {/*            <stop stop-color="#34364E" stop-opacity="0.98"/>*/}
                {/*            <stop offset="1" stop-color="#0C0824"/>*/}
                {/*        </radialGradient>*/}
                {/*    </defs>*/}
                {/*</svg>*/}
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
  
  figure {
    margin: 0 0 38px 0;
    
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