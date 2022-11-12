import styled from 'styled-components';
import colors from '../colors';

export const MainStyle = styled.div`
    width: 600px;
    min-height: 490px;
    text-align: center;

    h2 {
        margin-top: 20px;
        font-size: 32px;
        text-transform: uppercase;
        color: ${colors.primaryColor};
    }

    .btn-sair {
        width: 80px;
    }
`

export const Block = styled.div`
    width: 100%;
    min-height: 100px;
    margin: 16px auto;
    border: 1px solid white;
    border-radius: 20px;

    p {
        margin-top: 4px;
        font-size: 16px;
    }

    h3 {
        margin-top: 10px;
        text-transform: uppercase;
        color: ${colors.primaryColor}
    }

    .btn-lg {
        width: 175px;
    }
`