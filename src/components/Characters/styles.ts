import styled from 'styled-components';
import { darken } from 'polished';


export const Container = styled.section `
    max-width: 90%;
    margin: 0 auto;
    padding: 2.5rem 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(11rem, 100%), 1fr));
    grid-gap: 4rem;
    text-align: center;

    a {
        text-decoration: none;
        box-shadow: 8px 6px 12px 1px #202020;
    
        & :hover {
        filter: brightness(0.9);
        }
    }  

    @media (max-width: 430px) {
        grid-template-columns: repeat(auto-fill, minmax(min(10rem, 100%), 1fr));
    }



    @media (max-width: 320px) {
        max-width: 200px;
    }
`;

export const Card = styled.div `
  
    display: flex;
    flex-direction: column;  
    border-radius: 4px;
     
    p{
        display:flex;
        align-items: center;
        justify-content: center;
        background: var(--black);
        font-size: 1rem;
        font-weight:700;
        color: #fff;
        height:5rem;
        text-decoration: none;
        border-top: 6px solid #e62429;
    }
`;

export const LoadButton = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem auto;
    
    button {
        width: 120px;
        height: 40px;
        background: #e62429;
        color: #fff; 
        border: none;
        font-weight: 500;
        outline: transparent;
        
        &:hover {
            background: ${darken(0.2, '#e62429')};
        }  
    } 
`;