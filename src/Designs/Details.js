import styled from "styled-components"
import { Colors } from "./DesignVariables"


export const DetailsContainer = styled.div`
    width:40vw;
    height: fit-content;
    padding: 2rem 3rem;
    background-color: ${Colors.white};
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    @media only screen and (max-width: 800px) {
        width:80vw;
    }
`
export const DetailsLabel = styled.h3`
    @media only screen and (max-width: 800px) {
        font-size: 16px;
    }
`
export const DetailsInput = styled.textarea`
    border:none;
    resize: none;
    overflow: auto;
    margin: 1rem 0;
    padding: 1rem 1rem;
    height: fit-content;
    max-height:35vh ;
    width: 100%;
    color: ${Colors.black};
    background-color: ${Colors.grey};
    font-size: 20px;
    @media only screen and (max-width: 800px) {
        font-size: 12px;
        margin: 0.5rem 0;
        padding: 0.5rem 0.5rem;
    }
`
export const DetailsWrapper = styled.div`
    width: 100%;
    padding: 1rem 0;
    margin: 0;
    display: flex;
    justify-content:space-between;
    align-items: center;
    @media only screen and (max-width: 800px) {
        padding: 0.5rem 0;
    }
`
export const DetailsStatus = styled.select`
    width: 70%;
    margin: 1rem 0;
    padding: 0.5rem 0.5rem;
    font-size: 18px;
    @media only screen and (max-width: 800px) {
        font-size: 12px;
    }
`
export const Actions = styled.div`
    width: 100%;
    display: flex;
    @media only screen and (max-width: 800px) {
        padding-top: 1rem;
        justify-content: center;
        align-items: center;
    }
    
`