import styled from 'styled-components'

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size:1.4rem;
    background: transparent;
    border: 0.2rem solid var(--lightBlue);
    border-color: ${props => props.fav? "var(--mainYellow)":"var(--lightBlue)"};
    color:${prop => prop.fav?"var(--mainYellow)":"var(--lightBlue)"};
    border-radius: 0.5rem;
    paddibg: 0.2rem 0.5rem;
    courson:pointer;
    margin:0.2rem 0.5rem 0.2rem 0;
    transition:all 0.5s ease-in-out;
    &:hover{
        background:${prop=>prop.fav? "var(--mainYellow)":"var(--lightBlue)"};
        color:var(--mainBlue);
    }
    &:focus{
        outline:none;
    }
`;