import styled from "styled-components";

export const BarraLateral=styled.div`
    width: 18rem;
    height:30rem;
    background-color: RGB(0 158 255);
    display:flex;
    align-items: center;
    justify-content:top;
    flex-direction: column;
    padding: 1rem;
    color: white;


    & *{
        margin-top: 1rem;
    }

    & .ErroTrue{
        color: RGB(255 82 82);
        animation: tremer .2s;
        animation-iteration-count: 3;
    }

    @keyframes tremer {
        0% {margin-left: 0;}
        25% {margin-left: 7px;}
        50% {margin-left: 0;}
        75% {margin-left: -7px;}
        100% {margin-left: 0;}
    }
`

export const InputTarefa=styled.input`
    width: 10rem;
    height:2rem;
    outline: none;
    border: none;
    border-radius: 5px;
    margin: .5rem;
`

export const InputOpcoes=styled.select`
    width: 5rem;
    height: 1.5rem;
    margin:.5rem;
`

export const Botao=styled.button`
    width: 10rem;
    height: 2rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    margin: 1rem 1rem;
    transition:.5s;
    background-color: RGB(196 196 196);

    &:hover{
        transition:.5s;
        border: 3px solid RGB(142 255 126);
    }
`