import Image from "next/image";
import bgImg from '../../resources/background.png'

import {
  StyledTextContainer,
  StyledContainer,
  StyledGetStartedBtn,
  StyledTitle,
  StyledDescription,
  StyledCTAContainer,
  StyledImageContainer,
  StyledCard,
  StyledImg
} from "./elements";

export const Hero = ({ image, title, description, ctaText, ...props }) => {
  return (
    <StyledContainer style={{backgroundImage: bgImg}} {...props}>

      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>

      <StyledImageContainer>

      <StyledImg>
      <Image
        src={image.src}
        alt="Landscape picture"
        width='330'
        height='450'
        // layout="responsive"
        />
        </StyledImg>
      <StyledCard text={props.text}/>

      </StyledImageContainer>

    </StyledContainer>
  );
};
