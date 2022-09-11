import styled from "styled-components";
import { Button, SectionContainer, SectionBigHeading, SectionSubheading} from "~/components";
import { Card } from '../../collections/index'
import { BackgroundImage } from "../../components/Containers/BackgroundImageContainer/index";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  align-items: center;
  margin-top: 2.4em;
  // background-image: url("../../resources/background.png");

  @media (max-width: 1024px){
    margin: 0;
  }
`;

export const StyledGetStartedBtn = styled((props) => <Button {...props} variant="contained" color="main" />)`
  margin-top: 4.375rem;
  padding-top: 0;
  padding-bottom: 0;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  font-size: 2.5rem;
  color: black;
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
  margin: 0.1em 0;
  font-size: 1.3rem;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 100%;
  text-align: center;
  font-family: sans-serif;
  z-index:100;
`;

export const StyledCTAContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  max-width: 70vw;
  margin-top: 2em;
  display:flex;
  justify-content: space-around;
  height: 30vw;
  gap:2rem;
  z-index:120;

  @media (max-width: 1024px){
    flex-direction: column;
    height: 140vh;
    margin-bottom: 2rem;
  }

`;

export const StyledCard = styled(({...props}) => <Card {...props}/>)`

`

export const StyledImg = styled.div`
  @media (max-width: 1024px){
    margin:auto;
  }
`

export const StyledBackgroundImage = styled(({...props}) => <BackgroundImage {...props}/>)``