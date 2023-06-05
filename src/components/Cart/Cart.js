import React from "react";
import { ItemCart } from "../ItemCart/ItemCart";
import { CartContainer, TotalTxt, CloseCart, CartHeader, CartHeaderContainer, ShoppingCartButton} from "./style";


export function Cart({cart, setCart, changeQty, showingCart}) {

    const alertFinalCart = () => {
        alert("Faça login ou se cadastre antes de finalizar sua compra!")
    }
    const remove = (product) => {
        const cartFiltered = cart.filter((item) => item !== product);
        setCart(cartFiltered);
    };

    const totalCart = cart.reduce((total, current) => {
        return total + current.price * current.quantity;
    }, 0);

    return (
        <CartContainer>
        <CartHeaderContainer><CartHeader>Carrinho</CartHeader>
            <CloseCart onClick={showingCart}>Fechar</CloseCart></CartHeaderContainer>
            
            {cart.map((item) => {
                return (
                    <ItemCart
                        key={item.id}
                        item={item}
                        changeQty={changeQty}
                        remove={remove}
                        total={item.price * item.quantity}
                    />
                );
            })}
            {cart.length > 0 ? (
                <TotalTxt>Total do carrinho: R${totalCart.toFixed(3)}</TotalTxt>
            ) : (
                <CartHeader>Não há items no carrinho!</CartHeader>
            )}
            <ShoppingCartButton
                onClick={() => {
                    setCart([]);
                }}
            >
                Limpar
            </ShoppingCartButton>
            <ShoppingCartButton onClick={()=>alertFinalCart()}>Finalizar Compra</ShoppingCartButton>
        </CartContainer>
    );
}