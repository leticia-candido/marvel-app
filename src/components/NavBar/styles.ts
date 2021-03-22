import styled from 'styled-components';

export const Nav = styled.div ` 
    background: var(--black);
    color: #fff;
    width: 100%;
`;

export const TopNav = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 4rem;
    border-bottom: 1px solid rgba(100, 100, 100, 0.5);

    @media (max-width: 425px) {
        padding: 1rem;
    }

    a{
        & :hover {
        filter: brightness(0.7);
        }
    }

    button {
        background: rgba(100, 100, 100, 0.5);
        border: none;
        color: #fff;
        width: 80px;
        height: 35px;
        font-size: 1rem;
        font-weight: 500;
        outline: transparent;
    } 
`;
