import styled from "styled-components";

export const NavBarContainer = styled.nav`
display: flex;
flex-wrap: wrap;
width: 100vw;
justify-content: space-evenly;
background: #F5F5F5;
label{
    margin-right: 10px;
}
`
export const Button = styled.button`
margin-left: 30px;
`
export const LabelFilter = styled.label`
margin: 10px;
`
export const Filter = styled.div`
display: flex;
flex-direction: row;
p{
    margin: 10px;
}
input{
    margin: 10px;
    text-align: center;
}
`