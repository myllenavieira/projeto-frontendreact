import styled from "styled-components";

export const CartContainer= styled.div`
display: flex;
flex-direction: column;
align-items:center;
justify-content: space-evenly;
width: 15vw;
`

export const CartImg = styled.img`
padding-top: 8px;
height: 30px;
`

export const ProductInCart = styled.ul`
display: flex;
flex-direction: column;
width:max-content;
height: max-content;
display: flex;
flex-direction: column;
align-items: center;
justify-items: space-between;
`

export const Txt = styled.li`
text-align: center;
list-style: none;
font-size: small;
`
export const DivButton = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`

export const ButtonInProduct = styled.button`
width: 20px;

border-radius: 2px;
cursor: pointer;
:hover{
    color: white;
    background-color: #463f57;
}
`