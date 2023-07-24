import React from 'react';
import styled from "styled-components";
import personPhoto from '../../../assets/images/person.jpg';
import {Container} from "../../../components/container/Container";

export const Author = () => {
    return (
        <SectionPerson>
            <Container>

                <PersonName>Denis <br/>Novik</PersonName>

                <PersonText>UX | UI designer <br/>24 years old, Minsk</PersonText>

                <SiteLanguage>
                    <ul>
                        <li><a href="#!">Ru</a></li>
                        <li><a href="#!">Eng</a></li>
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

    > div {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
`;

const PersonName = styled.h1`

`;

const PersonText = styled.h2 `
  
`;

const SiteLanguage = styled.nav `
  
`;

const PersonImage = styled.figure`
  width: 100%;
  height: 387px;
  overflow: hidden;
  margin: 30px 0 0 0;
  
  img {
      width: 100%;
      max-width: none;
      height: 100%;
      max-height: none;
      object-fit: cover;
  }
`;