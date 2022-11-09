import styled from 'styled-components';
import colors from '../colors';

export const NovoStyle = styled.div`
    width: 600px;
    min-height: 490px;
    text-align: center;

    h2 {
        margin-top: 20px;
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

            input {
                margin-left: 6px;
            }
        }

        .btn-adicionar {
            width: 110px;
        }
    }
`