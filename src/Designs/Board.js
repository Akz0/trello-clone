import styled from "styled-components";
import { Colors } from "./DesignVariables";

export const BoardContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 1rem;
    height: 90vh;
    width: 100%;
    overflow-x: scroll;
    @media only screen and (max-width: 800px) {
        padding: 0.5rem;
        align-items: center;
        height:auto;
        flex-direction: column;
        overflow-x: hidden;
        width: 100%;
        border: 1px solid;
    }
    
`
export const AddNewListContainer = styled.form`
    width: 350px;
    display: flex;
    padding-left: 1rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: fit-content;
    background: ${props => props.bgColor};

    @media only screen and (max-width: 800px) {
        width: 100%;
        padding-left:0rem;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

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

    @media only screen and (max-width: 800px) {
        font-size: 12px;
        padding: 0.7em;
        margin:  0.5em ;
    }
`;