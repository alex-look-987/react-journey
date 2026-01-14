import { JSX } from 'react';
import { ProductItems, ProductItemsProps } from './Data';

function ProductCategoryRow ({category}: {category: string}) {
    return (
        <tr>
            <th colSpan={2}>{category}</th>
        </tr>
    )
}

function ProductRow({product}: {product: ProductItems}) {
    const name = product.stocked ? product.name :

    <span style={{color: 'red'}}>{product.name}</span>

    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    )
}

function ProductTable({products}: ProductItemsProps) {
    const rows: JSX.Element[] = []
    let lastCategory: string | null = null
    
    products.forEach((product: ProductItems) => {
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow 
                category={product.category}
                key={product.category}/>
            )}
        rows.push(
            <ProductRow 
            product={product}
            key={product.name}/>
        )
        lastCategory = product.category
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )
}

function SearchBar() {
    return (
        <form>
            <input type="text" placeholder="Search..."/>
            <label>
                <input type="checkbox"/> Only show products in stock
            </label>
        </form>
    )
}

function FilterableProductTable({products}: ProductItemsProps) {
    return (
        <div>
            <SearchBar/>
            <ProductTable products={products} />
        </div>
    )
}

export default FilterableProductTable