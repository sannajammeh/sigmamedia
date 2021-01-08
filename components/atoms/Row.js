import styled from 'styled-components';

const Row = styled.div`
    display: block;
    margin: 0 auto;
    @media screen and (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export default Row;