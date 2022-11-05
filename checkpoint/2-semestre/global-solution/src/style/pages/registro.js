import styled from 'styled-components';
import colors from '../colors';

export const RegistroStyle = styled.div`
    width: 600px;
    min-height: 435px;
    text-align: center;
    
    p {
        font-size: 22px;
    }

    h2 {
        margin-top: 16px;
        font-size: 32px;
        text-transform: uppercase;
        color: ${colors.primaryColor};
    }

    form {
        margin-top: 26px;
        display: flex;
        flex-direction: column;
    }

    label {
        margin: 12px;
    }

    .login {
        margin-top: 16px;
        text-decoration: underline;
        color: ${colors.primaryColor}
    }

    .btn-registrar {
        width: 175px;
    }
`