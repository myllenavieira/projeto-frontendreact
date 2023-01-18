import { useEffect, useState } from "react";
import { Cart } from "../components/Cart/Cart";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Products } from "../components/Products/Products";
import products from "../components/Products/products.json";
import { NavBar } from "../components/NavBar/NavBar";


export default function MainPage() {
    const [cart, setCart] = useState([])
    const [buscaNome, setBuscaNome] = useState("");
    const [minPrice, setMinPrice] = useState(-Infinity)
    const [maxPrice, setMaxPrice] = useState(Infinity)
    const [order, setOrder] = useState("asc")
    const [showCart, setShowCart] = useState(false);

    const showingCart = () => {
        setShowCart(!showCart);
    };

    const getCart = () => {
        const cartItems = JSON.parse(localStorage.getItem("cart"));
        if (cartItems.length > 0) {
            setShowCart(true);
            return setCart(cartItems);
        }
    };
    useEffect(() => {
        getCart();
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addProduct = (product) => {
        const findProduct = cart.find((item) => item.id === product.id);
        if (findProduct) {
            changeQty(findProduct, "sum");
        } else {
            const productsAdded = [...cart, { ...product, quantity: 1 }];
            setCart(productsAdded);
        }
        setShowCart(true);
    };
    const changeQty = (findProduct, operation) => {
        const newShoppingCart = cart.map((item) => {
            if ((item === findProduct) & (operation === "sum")) {
                return { ...item, quantity: item.quantity + 1 };
            }
            if (
                (item === findProduct) &
                (operation === "dec") &
                (item.quantity > 1)
            ) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCart(newShoppingCart);
    };
    return (
        <>
            <Header
                showingCart={showingCart}
            />
            <NavBar
                addProduct={addProduct}
                buscaNome={buscaNome}
                setBuscaNome={setBuscaNome}
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                order={order}
                setOrder={setOrder}
            />
            <Products products={products}
                addProduct={addProduct}
                buscaNome={buscaNome}
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                order={order}
                setOrder={setOrder}
            />
            {showCart && <Cart
                cart={cart}
                setCart={setCart}
                changeQty={changeQty}
                showingCart={showingCart}
            />}
            <Footer />

        </>
    );
}
