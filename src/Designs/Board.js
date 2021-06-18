import styled from "styled-components";
import { Colors } from "./DesignVariables";

export const BoardContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 1rem;
    height: 90vh;
    width: 100%;
    overflow-x: scroll;
`
export const AddNewListContainer = styled.div`
    width: 350px;
    display: flex;
    padding-left: 1rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: fit-content;
    background: ${props => props.bgColor};
`
export const AddNewListInput = styled.input`
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