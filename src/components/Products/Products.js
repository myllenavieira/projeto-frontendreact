import { Item } from "../Item/Item";
import { ProductContainer } from "./style";

export function Products(props) {
    const {minPrice, maxPrice, order, buscaNome, products, addProduct} = props
    return (
        <ProductContainer>
            {products
                .filter((product) => {
                    return product.name.toLowerCase().includes(buscaNome.toLowerCase());
                })
                .filter((item) => {
                    return item.price >= minPrice || minPrice === ""
                })
                .filter((item) => {
                    return item.price <= maxPrice || maxPrice === ""
                })
                .sort((a, b) => {
                    return a.price - b.price
                })
                .sort(() => {
                    if (order === "asc") {
                        return 0
                    } else {
                        return -1
                    }
                })
                .map((product) => {
                    return (
                        <Item
                            key={product.id}
                            product={product}
                            addProduct={addProduct}
                        />
                    );
                })}
        </ProductContainer>
    )
}