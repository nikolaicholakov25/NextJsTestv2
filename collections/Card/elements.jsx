import styled from "styled-components";
import { Button, SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";

export const FlexTextBox = styled.div`
    display: flex;
    background-color: rgba(182, 180, 180, 0.266);
    border-radius: 1em;
    border: 3px solid transparent;
    width: ${props => props.width}%;
    max-height: 20vh;
    // padding: 0.5rem;
    
    &:hover {
        cursor: pointer;
        border: 3px solid rgb(60, 60, 255);
    }
    `
    
    export const TextBoxWrapper = styled.div`
    // border: 1px solid black;
    max-height: 95%;
    width: 60%;
    display:flex;
    flex-direction: column;
    gap:1em;
    margin: auto 0;

    @media (max-width: 1024px){
        width:100%;
      }

`

export const TextImgBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
`

export const FontAwesomeIcon = styled.i`
    font-size: 2.5rem;
    padding: 1rem
`

export const TextArea = styled.div`
    text-align: left;
    width: 80%;
    padding-right: 1rem;
`

export const H2Link = styled.h2`
    margin: 0em;
    margin-top: 0.8rem;
    display:inline-block;
    font-size: 1.3rem;

    &:hover {
        cursor: pointer;
        color:rgb(60, 60, 255);
        text-decoration: underline;
    }
`
export const Paragraph = styled.p`
    font-size: 1.2rem;
    font-weight: 100;
    max-height: 50%;
    margin: 0em;
    margin-top: 0.4em;
    padding-bottom: 1.2em;
    `

export const BlackA = styled.a`
    color:black;
    text-decoration: none;
    &:hover {
        color: rgb(60, 60, 255);
        text-decoration: underline;
    }
`