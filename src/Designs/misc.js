import styled from "styled-components";
import { Colors } from "./DesignVariables";


export const Backdrop=styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    top: 0;
    left: 0;
    position: fixed;
    display: ${props=>props.show?'flex':'none'};
    justify-content: center;
    align-items: center;
`

export const ConfirmDelete=styled.div`
    z-index: 10;
    width: 30vw;
    height: 200px;
    background-color: ${Colors.white};
    padding: 0 1rem;
    display: ${props=>props.show?'flex':'none'};
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;

`
export const DeleteItemName=styled.span`
    color:${Colors.nonGreyScale.red}
`