import { Button, Filter, LabelFilter, NavBarContainer } from "./style";



export function NavBar(props) {
    const { setMinPrice, minPrice, setMaxPrice, maxPrice, buscaNome, setBuscaNome, setOrder } = props

    const FilterCleaner = () => {
        setBuscaNome("")
        setMaxPrice(Infinity)
        setMinPrice(-Infinity)
        setOrder("asc")
    }

    return (
        <NavBarContainer>
                <Filter>
                    <p>Local:</p>
                    <input placeholder="Buscar viagem" type="text" value={buscaNome}
                        onChange={(event) => props.setBuscaNome(event.target.value)} />
                    <p>Preço:</p>
                    <input placeholder="Valor mínimo" type="number" value={minPrice}
                        onChange={(event) => props.setMinPrice(event.target.value)} />
                    <input placeholder="Valor máximo" type="number" value={maxPrice}
                        onChange={(event) => props.setMaxPrice(event.target.value)} />
                </Filter>
                <LabelFilter>
                    <label for="sortingParameter">Ordenar:</label>
                    <select
                        value={props.order}
                        onChange={(event) => { props.setOrder(event.target.value) }}
                    >
                        <option value={"asc"}>menor preço</option>
                        <option value={"desc"}>maior preço</option>
                    </select>
                    <Button onClick={FilterCleaner}>Voltar</Button>
                </LabelFilter>
        </NavBarContainer>
    );
}