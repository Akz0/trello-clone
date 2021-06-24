import styled from "styled-components"
import { Colors } from "./DesignVariables"

export const TopNavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    background-color: rgba(0,0,0,0.05) ;
    border-bottom: 1px solid ${props=>props.color};
    
`
export const ButtonTitle = styled.span`
    margin: 0 0.4rem;
`
export const BoardTitle = styled.span`
    color:${Colors.white};
    font-weight: bold;
    font-size: 24px;
`
export const BoardSettings = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const SettingsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`