import styled from 'styled-components';
import colors from '../colors';

export const VisualizarStyle = styled.div`
    width: 600px;
    min-height: 490px;
    text-align: center;

    h2 {
        margin-top: 20px;
        font-size: 32px;
        text-transform: uppercase;
        color: ${colors.primaryColor};
    }
`

export const Items = styled.div`
    width: 100%;
    margin-top: 20px;
`

export const Field = styled.div`
    margin: 10px auto;
    padding: 8px 0;
    border: 1px solid ${colors.primaryColor};
    border-radius: 8px;

    p {
        color: ${colors.primaryColor}
    }
`