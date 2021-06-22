import styled from "styled-components";
import { Colors } from "./DesignVariables";

export const TodoItemContainer=styled.div`
    border-radius: 5px;
    font-size: 16px;
    width: 100%;
    padding: 0.5em;
    margin:  0.5em 0 0.5em 0;
    background: ${Colors.white};
    opacity: ${props=>props.status==='complete'?'0.5':'1'};
    border:${props=>props.status==='working'?`5px solid ${Colors.darkGrey}`:'none'};
    text-decoration: ${props=>props.status==='complete'?'line-through':'none'};
    display: flex;
    justify-content: space-between;
    align-items: center;    
    :hover{
        cursor: move;
    }
`;

export const TodoEdit=styled.span`
    width: fit-content;
    height: fit-content;
    position: relative;
    cursor: pointer;
    top: 0;
    right: 0;
    opacity: 0.5;
    transform: scale(0.8);
    transition: 0.2s all ease;
    :hover{
        opacity: 1;
        transform: scale(1.0);
    }
`