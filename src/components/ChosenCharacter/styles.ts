import styled from 'styled-components';

export const Container = styled.div `
   width: 100%;

   h2{
       margin: 2rem;
   }

`;

export const Content = styled.div ` 
    background: var(--black);
    color: #fff;
    display:flex;
    align-items:center;
    justify-content: space-evenly;
    padding: 2.5rem 5rem;

    h2 {
        font-size: 4rem;
        font-weight:700;
    }

    img {
        width: 15rem;
        border-radius: 2px;
    }  
`;

export const About = styled.div `
    width: 90%;
    margin: 3.5rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ComicsDiv = styled.div `
    max-width: 90%;
    margin: 0 auto;
    padding: 2.5rem 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(10rem, 100%), 1fr));
    grid-gap: 4rem;
    
    img {
        width: 200px;
        box-shadow: 8px 10px 20px 3px rgba(100, 100, 100, 1);
    }

    p{
        margin: 1rem 0;
        font-weight: 500;
    }
`;