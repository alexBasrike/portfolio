import styled from "styled-components";
import {Theme} from "../../styles/Theme";

export const H3 = styled.h3 `
  margin: 0;
  line-height: 22px;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  color: ${Theme.colors.primary};
  
  a {
    text-decoration: underline;
    
    &:hover {
      text-decoration: none;
    }
  }
`;