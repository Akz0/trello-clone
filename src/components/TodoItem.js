import React from 'react'
import styled from 'styled-components'
import { Colors ,returnColor} from '../DesignVariables';
const Item=styled.div`
    border-radius: 5px;
    font-size: 16px;
    width: 100%;
    padding: 0.5em;
    margin:  0.5em 0 0.5em 0;
    background: ${Colors.white};
    pointer-events: none;

`;

export default function TodoItem(props) {
    return (
        <Item id={props.id}>
            {props.todo}
        </Item>
    )
}
