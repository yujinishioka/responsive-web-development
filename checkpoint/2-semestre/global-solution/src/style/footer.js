import styled from "styled-components";
import colors from "./colors";

export const FooterStyle = styled.div`
    padding: 12px 0;
    text-align: center;
    background: ${colors.darkGreyBackground};

    p {
        margin-top: 4px;
    }

    span {
        text-transform: uppercase;
        color: ${colors.primaryColor};
    }
`