import React from 'react';
import styled from "styled-components";
import personPhoto from '../../../assets/images/person.jpg';
import {Container} from "../../../components/container/Container";
import {Theme} from "../../../styles/Theme";

export const Author = () => {
    return (
        <SectionPerson>
            <Container>

                <PersonName>Denis <br/>Novik</PersonName>

                <PersonText>UX | UI designer <br/>24 years old, Minsk</PersonText>

                <SiteLanguage>
                    <ul>
                        <li><a href="#!">Ru</a></li>
                        <li className={"active"}><a href="#!">Eng</a></li>
                    </ul>
                </SiteLanguage>

                <PersonImage>
                    <img src={personPhoto} alt={""}/>
                </PersonImage>

            </Container>
        </SectionPerson>
    );
};

const SectionPerson = styled.section`
  margin: 0 0 104px 0;
  padding: 31px 0 0 0;
  
  @media ${Theme.media.tablet} {
    margin: 0 0 70px 0;
    padding: 50px 0 0 0;
  }

    > div {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      flex-wrap: wrap;
    }
`;

const PersonName = styled.h1`
  line-height: 58px;
  font-size: 47px;
  font-weight: 700;
`;

const PersonText = styled.h2 `
  width: 222px;
  padding: 0 0 12px 0;

  @media ${Theme.media.mobile} {
    width: auto;
    padding: 0 20px 9px 0;
  }
`;

const SiteLanguage = styled.nav `
  
    ul {
      display: flex;
      transform: rotate(-90deg);
      transform-origin: left bottom;
      width: 1px;
      
      li {
        position: relative;
        line-height: 20px;
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
        color: ${Theme.colors.secondary};

        &:first-child {
          padding: 0 0 0 13px;

          &:before {
            display: none;
          }
        }
        
        &:before {
          padding: 0 4px;
          vertical-align: top;
          color: ${Theme.colors.primary};
          content: '|';
        }
        
        &.active {
          color: ${Theme.colors.primary};
        }
        
        a {
          
          &:hover {
            color: ${Theme.colors.primary};
          }
        }
      }
    }
`;

const PersonImage = styled.figure`
  width: 100%;
  height: 387px;
  overflow: hidden;
  margin: 40px 0 0 0;

  @media ${Theme.media.tablet} {
    height: 300px;
  }

  @media ${Theme.media.mobile} {
    height: 200px;
  }
  
  img {
      width: 100%;
      max-width: none;
      height: 100%;
      max-height: none;
      object-fit: cover;
  }
`;