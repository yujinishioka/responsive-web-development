import styled from "styled-components";
import colors from "./colors";

export const FooterStyle = styled.div`
    margin-top: 10px;
    padding: 16px 0 32px 0;
    text-align: center;
    background: ${colors.darkGreyBackground};

    p {
        font-size: 14px;
        margin-top: 4px;
    }

    span {
        text-transform: uppercase;
        color: ${colors.primaryColor};
    }
`