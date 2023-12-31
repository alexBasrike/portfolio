import {createGlobalStyle} from "styled-components";
import {Theme} from "./Theme";

export const GlobalStyled = createGlobalStyle `
  
    /* --- Reset CSS start --- */
    
    * {
      box-sizing: border-box;
    }

    body,
    div,
    dl,
    dt,
    dd,
    ul,
    li,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    pre,
    code,
    form,
    fieldset,
    input,
    textarea,
    p,
    blockquote,
    th,
    td {
      margin: 0;
      padding: 0;
    }

    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    fieldset,
    img,
    abbr {
      border: 0;
    }

    address,
    caption,
    cite,
    code,
    dfn,
    em,
    strong,
    th,
    var {
      font-style: normal;
      font-weight: normal;
    }

    ul li {
      list-style: none;
    }

    caption,
    th {
      text-align: left;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: 100%;
      font-weight: normal;
    }

    sup {
      vertical-align: text-top;
    }

    sub {
      vertical-align: text-bottom;
    }

    input,
    textarea,
    select {
      font-family: inherit;
      font-size: inherit;
      font-weight: inherit;
    }

    legend {
      color: #000;
    }

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section,
    main {
      display: block;
    }

    /* --- Reset CSS end --- */



    /* --- Responsive CSS start --- */

    @function vw($px) {
      @return calc(($px / 1440) * 100) * 1vw;
    }

    @function vwm($px) {
      @return calc(($px / 375) * 100) * 1vw;
    }
    
    /* --- Responsive CSS end --- */



    /* --- Common CSS start --- */
    
    body {
      background: ${Theme.colors.light};
      min-width: 375px;
      line-height: 22px;
      font-family: ${Theme.font.primary};
      font-size: 18px;
      font-weight: 500;
      color: ${Theme.colors.primary};
    }
    
    p {
      margin: 0 0 22px 0;
    }
    
    a {
      transition: 0.4s;
      text-decoration: none;
      color: inherit;
    }
    
    img {
      max-width: 100%;
      vertical-align: top;
    }

    /* --- Common CSS end --- */
    
`;