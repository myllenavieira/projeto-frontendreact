import React from "react";
import { Txt, CartImg, DivButton, ProductInCart, ButtonInProduct, CartContainer } from "./style";

export function ItemCart ({ item, changeQty, remove, total }){
    return(
        <CartContainer>
            <CartImg src={item.image} alt={item.name} />
            <ProductInCart key={item.id}>
                <Txt>{item.name}</Txt>
                <Txt>R$ {item.price.toFixed(3)}</Txt>
                <Txt>Quantidade: {item.quantity}</Txt>
                <Txt>Total: R${total.toFixed(3)}</Txt>
                <DivButton>
                    <ButtonInProduct onClick={() => changeQty(item, "sum")}> + </ButtonInProduct>
                    <ButtonInProduct onClick={() => changeQty(item, "dec")}> - </ButtonInProduct>
                    <ButtonInProduct onClick={() => remove(item)}>x</ButtonInProduct>
                </DivButton>
            </ProductInCart>
            
        </CartContainer>
    );
}