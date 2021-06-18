import styled from "styled-components"
import { Colors } from "./DesignVariables"


export const SuccessButton = styled.button`
    display: ${props=>props.hiddenDisplay?'none':'flex'};
    border: ${props=>props.border?'1px solid grey':'none'};
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem;
    margin-right:1em;
    font-size: 14px;
    color: ${props=>props.dark?Colors.white:Colors.black};
    background: ${props=>props.dark?Colors.black:Colors.white};
    border-radius: 3px;
    opacity: 0.7;
    :hover{
        opacity: 1;
        cursor:pointer;
    }
`
export const DangerButton = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem;
    margin-right:1em;
    font-size: 14px;
    border: none;
    color: ${Colors.white};
    background: ${Colors.nonGreyScale.red};
    border-radius: 3px;
    opacity: 0.7;
    :hover{
        opacity: 1;
        cursor:pointer;
    }
`

export const TopNavBarButtons = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 1rem;
    padding: 1rem 1rem;
    font-size: 14px;
    border: none;
    color: ${Colors.black};
    background: ${Colors.white};
    border-radius: 3px;
    opacity: 0.7;
    :hover{
        opacity: 1;
        cursor:pointer;
    }
`