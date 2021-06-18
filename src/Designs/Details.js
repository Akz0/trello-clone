import styled from "styled-components"
import { Colors } from "./DesignVariables"


export const DetailsContainer=styled.div`
    width:40vw;
    height: fit-content;
    padding: 2rem 3rem;
    background-color: ${Colors.white};
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`
export const DetailsLabel=styled.h3`
    
`
export const DetailsInput=styled.textarea`
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
`
export const DetailsWrapper=styled.div`
    width: 100%;
    padding: 1rem 0;
    margin: 0;
    display: flex;
    justify-content:space-between;
    align-items: center;
`
export const DetailsStatus=styled.select`
    width: 70%;
    margin: 1rem 0;
    padding: 0.5rem 0.5rem;
    font-size: 18px;
`
export const Actions=styled.div`
    display: flex;
`