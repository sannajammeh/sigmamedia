import styled from 'styled-components';

const Input = styled.input`
    border: transparent;
    border-bottom: 1px solid white;
    padding: 1rem;
    background: transparent;
    &.small {
        flex: 50%;
    }
    &.big {
        flex: 100%;
    }
`

export default Input;
