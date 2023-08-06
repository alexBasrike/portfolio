import styled from "styled-components";
import {Container} from "../../components/container/Container";
import {Navigation} from "../../components/navigation/Navigation";
import {Theme} from "../../styles/Theme";

type HeaderPropsType = {
    ClassName?: string
}

export const Header = (props: HeaderPropsType) => {
    return (
        <StyledHeader className={props.ClassName}>
            <Container>

                <Burger/>
                <Navigation/>

            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: #ffffff;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 38px 0 38px 0;
  z-index: 99;

  @media ${Theme.media.tablet} {
    padding: 15px 0;
  }

  &:before {
    background-color: #828282;
    display: block;
    height: 1px;
    overflow: hidden;
    position: absolute;
    right: 50%;
    bottom: 0;
    left: 50%;
    margin: 0 -472px;
    transition: right 0.4s, left 0.4s, margin 0.4s;
    content: '';
    
    @media ${Theme.media.tablet} {
      right: 0;
      left: 0;
      margin: 0;
    }
  }
  
  ${Container} {
    
    @media ${Theme.media.tablet} {
      display: flex;
      justify-content: flex-end;
    }
  }
`;

const Burger = styled.button`
  display: none;
  background-color: transparent;
  background-image: linear-gradient(${Theme.colors.primary}, ${Theme.colors.primary});
  background-position: 0% 50%;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  transition: background-size .3s;
  width: 30px;
  height: 20px;
  position: relative;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 0;
  cursor: pointer;

  @media ${Theme.media.tablet} {
    display: inline-flex;
  }
  
  &:before,
  &:after {
    background: ${Theme.colors.primary};
    display: block;
    width: 30px;
    height: 2px;
    overflow: hidden;
    position: absolute;
    right: 0;
    content: '';
  }

  &:before {
    top: 0;
  }

  &:after {
    width: 20px;
    bottom: 0;
  }
`;