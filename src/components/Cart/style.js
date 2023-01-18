import styled from "styled-components";


export const CartContainer = styled.div`
background-color: rgba(246, 247, 252, .7);
width: fit-content;
position:fixed;
top: 2%;
right:0;
margin: 2px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 10px;
border: solid 1px;
`
export const CartHeaderContainer = styled.div`
display: flex;
flex-direction: row;
`

export const CartHeader = styled.h4`
text-align: justify;
color: #242c38;
margin-right: 5px;
`

export const CloseCart = styled.button`
right: 0;
width: fit-content;
border-radius: 2px;
border: solid 1px;
:hover{
    cursor: pointer;
    color: white;
    background-color: #463f57;
}
`

export const TotalTxt = styled.h4`
text-align: center;
margin: 4%;
/* color: #242c38; */
justify-self: end;
`

export const ShoppingCartButton = styled.button`
text-align: center;
margin:4%;
width: fit-content;
border-radius: 3px;
padding: 5px;
color: #242c38;
:hover{
    cursor: pointer;
    color: white;
    background-color: #463f57;
}
`