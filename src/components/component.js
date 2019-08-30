import React from 'react';
import styled from 'styled-components';

const SpaceHolder = styled.div`
    text-align: center;
    background-color: black;
    margin-top: none;
    margin-bottom: none;
`
const SpaceHeader = styled.header`
    width: 100%;
`
const Back = styled.button`
    border= 3px solid white;
    background-color: black;
    color: white;
`

const SpaceTitle = styled.h1`
    font-family: 'Space Mono', monospace;
    font-size: 2rem;
    width: 90%;
    margin-left: 5%;
    padding-top: 2rem;
    color: white;
`

const SpaceDate = styled.h2`
    color: white;
    font-family:'Space Mono', monospace; 
`
const SpaceContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-bottom: 5rem;
    @media(max-width: 600px){
        display: flex;
        flex-direction: column;
        padding-bottom: 2rem;
    }
`
const SpaceImage = styled.img`
    width: 45%;
    @media(max-width: 600px){
        width: 80%;
    }
`

const SpaceDetails = styled.p`
    display: flex;
    width: 40%;
    text-align: center;
    margin-left: 3rem;
    color: white;
    font-family: 'Space Mono', monospace;
    font-size: 1.1rem;
    @media(max-width: 600px){
        width: 80%;
        text-align: center;
        margin-left: .3rem;
    }
`


function PhotoOfDay(props) {
    return(
        <SpaceHolder>
            <SpaceHeader>
            <Back onClick={props.dateFunc}>{props.back}</Back>
            </SpaceHeader>
            <SpaceTitle>{props.title}</SpaceTitle>
            <SpaceDate>{props.date}</SpaceDate>
            <SpaceContainer>
                <SpaceImage src={props.url}/>
                <SpaceDetails>{props.details}</SpaceDetails> 
            </SpaceContainer>
        </SpaceHolder>    
    )
}

export default PhotoOfDay;