import styled from 'styled-components'

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size:1.2rem;
    background: transparent;
    border: 0.2rem solid var(--lightBlue);
    border-color: ${props => props.fav? "var(--mainYellow)":"var(--lightBlue)"};
    color:${prop => prop.fav?"var(--mainYellow)":"var(--lightBlue)"};
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    coursor:pointer;
    margin:0.2rem 0.5rem 0.2rem 0;
    transition:all 0.5s ease-in-out;
    &:hover{
        background:${prop=>prop.fav? "var(--mainYellow)":"var(--lightBlue)"};
        color:var(--mainBlue);
    }
    &:focus{
        outline:none;
    }
    @media screen and (max-width: 400px){
        font-size: 0.8rem;
    }
    @media screen and (max-width: 1000px){
        font-size: 1rem;
    }
`;

export const ButtonChatContainer = styled.button`
    text-transform: none;
    font-size:1.2rem;
    background: transparent;
    border: 0.2rem solid var(--lightBlue);
    border-color: ${props => props.fav? "var(--mainYellow)":"var(--lightBlue)"};
    color:${prop => prop.fav?"var(--mainYellow)":"var(--lightBlue)"};
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    coursor:pointer;
    margin: 0.2rem 1rem 1rem 5rem;
    transition:all 0.5s ease-in-out;
    &:hover{
        background:${prop=>prop.fav? "var(--mainYellow)":"var(--lightBlue)"};
        color:var(--mainBlue);
    }
    &:focus{
        outline:none;
    }

    @media screen and (max-width: 400px){
        font-size: 0.8rem;
    }
    @media screen and (max-width: 1000px){
        font-size: 1rem;

    }
    
`;

export const ButtonComment = styled.button`
text-transform: capitalize;
font-size:1rem;
background: transparent;
border: 0.2rem solid var(--lightBlue);
border-color: ${props => props.fav? "var(--mainYellow)":"var(--lightBlue)"};
color:${prop => prop.fav?"var(--mainYellow)":"var(--lightBlue)"};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
coursor:pointer;
justify-content: center;
margin: 0.2rem 1.5rem 0.2rem 22rem;
transition:all 0.5s ease-in-out;
&:hover{
    background:${prop=>prop.fav? "var(--mainYellow)":"var(--lightBlue)"};
    color:var(--mainBlue);
}
&:focus{
    outline:none;
}

@media screen and (max-width: 480px){
    font-size:0.5rem;
    margin: 0.2rem 1.5rem 0.2rem 10rem;
}

`;