import styled from "styled-components";

export const ProductContainer = styled.div`
width: 25vw;
height: 25vw;
margin: 2vw;
display: flex; 
flex-direction: column;
align-items: center;
`

export const Image = styled.img`
width: 20vw;
height: 20vw;
margin: auto;
`

export const ProductTitle = styled.h3`
color: #463f57;
`
export const Price = styled.p`
color: #463f57;
`

export const ButtonAddCart = styled.button`
background-color: #463f57;
border-radius: 8px;
padding: 16px;
width: fit-content;
border: none;
color: white;
cursor: pointer;
justify-self: end;
:hover {
    background-color: #463f57;
}
`