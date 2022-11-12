import styled from "styled-components";
import colors from "./colors";

export const HeaderStyle = styled.div`
    h1 {
        padding: 6px 0;
        font-size: 48px;
        text-align: center;
        text-transform: uppercase;

        color: ${colors.primaryColor};
        background: ${colors.darkGreyBackground};
    }
`