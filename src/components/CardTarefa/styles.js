import styled from "styled-components";

export const Card=styled.div`
    background-color: RGB(239 239 239);
    border: 1px solid rgb(0,158,255);
    max-width:15rem;
    max-height: 18rem;
    padding: .5rem;
    transition:.5s ease-in;
    margin: 1rem 1rem;
    box-shadow: 0px 0px 7px 3px RGB(101 118 129);

    & *{
        margin:1rem 1rem;
    }

    & input{
        width: 2rem;
        height: 1rem;
    }

    & button{
        border: none;
        background-color: RGB(255 154 154);
        height: 2rem;
        cursor: pointer;
        transition:.5s ease;
    }

    & button:hover{
        background-color:RGB(255 72 72);
    }
`