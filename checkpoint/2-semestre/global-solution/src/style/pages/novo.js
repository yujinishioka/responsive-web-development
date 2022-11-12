import styled from 'styled-components';
import colors from '../colors';

export const NovoStyle = styled.div`
    width: 600px;
    min-height: 435px;
    text-align: center;

    h2 {
        margin-top: 20px;
        font-size: 32px;
        font-weight: 500;
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
                width: 130px;
                text-transform: uppercase;
                color: ${colors.white};
                font-size: 14px;
                font-weight: bold;
                text-align: right;
                float: left;
                padding-top: 13px;
                margin-left: 20px;
            }

            .input_text{
                padding: 10px 20px;
                font-size: 15px;
                background-color: ${colors.darkGrey};
                color: ${colors.white};
                width: 300px;
                margin-right: 10px;
            }
        }

        .btn-adicionar {
            width: 110px;
        }
    }
`