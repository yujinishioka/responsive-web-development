import styled from 'styled-components';
import colors from '../colors';

export const RegistroStyle = styled.div`
    width: 600px;
    min-height: 490px;
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

        label {
            margin: 12px;
            width: 100%;
            display: block;

            span {
                display: block;
                width: 170px;
                text-transform: uppercase;
                color: ${colors.white};
                font-size: 14px;
                font-weight: bold;
                text-align: right;
                float: left;
                padding-top: 13px;
            }

            .input_text{
                padding: 10px 20px;
                font-size: 15px;
                background-color: ${colors.darkGrey};
                color: ${colors.white};
                width: 300px;
            }
        }
    }

    .login {
        margin-top: 16px;
        text-decoration: underline;
        color: ${colors.primaryColor}
    }
`