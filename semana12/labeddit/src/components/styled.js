import Toolbar from '@material-ui/core/Toolbar';
import styled from 'styled-components';

export const StyledToolBar = styled(Toolbar)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const LogoContainer = styled.div`
    display: flex;
    gap: 10px;
`

export const Img = styled.img`
    width: 40px;
    height: auto;
    transition:  0.3s ease-in-out;
    &:hover {
        cursor: pointer;
        filter: grayscale(1)
    }
`