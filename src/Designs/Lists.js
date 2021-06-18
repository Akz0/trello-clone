import styled from "styled-components";
import { Colors } from "./DesignVariables";


export const ListContainer = styled.div`
    width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 0 1rem 0 1rem;
    padding: 1rem 1rem;
    height: fit-content;
    max-height: 85vh;
    background: ${props => props.bgColor};
    //box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    //box-shadow: 0 -20px 15px -10px rgba(0,0, 0, 0.3) inset,0 20px 15px -10px rgba(0, 0, 0, 0.3) inset,0 0 10px rgba(0, 0, 0, 0.1);
    
`;

export const ListTitle = styled.div`
    font-size: 18px;
    width: 100%;
    margin: 0 0 1rem 0;
    font-weight: bold;
    color:${Colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const ListMenu = styled.span`
    padding:0 1rem 0.5rem 1rem;
    font-size: 18px;
    border: none;
    color: white;
    background: none;
    cursor:pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.5;
    :hover{
        opacity: 1;
    }
`

export const AddNewTodoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin:  0.5em 0 0.5em 0;
`
export const AddNewTodoInput = styled.input`
    width: 100%;
    border-radius: 5px;
    font-size: 16px;
    width: 100%;
    padding: 1em;
    margin:  0.5em 0 0.5em 0;
    background: ${Colors.grey};
    border: none;
    outline: none;
    :focus{
        border: none;
        outline: none;
    }
`;

export const TodosContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: fit-content;
    max-height: 60vh;
    overflow-y: auto;
`