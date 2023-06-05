import React from "react"
import { ProductContainer, Image, ProductTitle, Price, ButtonAddCart } from "./style"

export function Item({addProduct, product}){


    return(
        <ProductContainer key={product.key}>
        <Image src={product.image} alt={product.name}/>
        <ProductTitle>{product.name}</ProductTitle>
        <Price>R$ {product.price.toFixed(3)}</Price>
        <ButtonAddCart onClick={() => addProduct(product)}>Adquirir</ButtonAddCart>
        </ProductContainer>
    )
}