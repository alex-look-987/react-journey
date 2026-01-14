import { JSX, useState } from 'react';
import { ProductItem, ProductTableProps, SearchBarProps, FilterableProductTableProps } from './Data';

function ProductCategoryRow ({category}: {category: string}) {
    return (
        <tr>
            <th colSpan={2}>{category}</th>
        </tr>
    )
}

function ProductRow({product}: {product: ProductItem}) {
  const name = product.stocked
    ? product.name
    : <span style={{ color: 'red' }}>{product.name}</span>

    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    )
}

function ProductTable({products, filterText, inStockOnly}: ProductTableProps) {
    const rows: JSX.Element[] = []
    let lastCategory: string | null = null

    products.forEach(product => {

        if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
            return
        }
        if (inStockOnly && !product.stocked) {
            return
        }

        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                category={product.category}
                key={product.category}
                />
        )
        }

        rows.push(
        <ProductRow
            product={product}
            key={`${product.category}-${product.name}`}
        />
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


function SearchBar({
    filterText, 
    inStockOnly, 
    onFilterTextChange,
    onInStockOnlyChange   
}: SearchBarProps) {
    return (
        <form>
            <input type="text" value={filterText} placeholder="Search..."
            onChange={(e) => onFilterTextChange(e.target.value)} />
            <label>
                <input type="checkbox" checked={inStockOnly}
                onChange={(e)=> onInStockOnlyChange(e.target.checked)} /> Only show products in stock
            </label>
        </form>
    )
}

function FilterableProductTable({products}: FilterableProductTableProps) {
    const [filterText, setFilterText] = useState('')
    const [inStockOnly, setInStockOnly] = useState(false)

    return (
        <div>
            <SearchBar
            filterText={filterText}
            inStockOnly={inStockOnly}
            onFilterTextChange={setFilterText}
            onInStockOnlyChange={setInStockOnly}
            />
            <ProductTable 
            products={products}
            filterText={filterText}
            inStockOnly={inStockOnly}
             />
        </div>
    )
}

export default FilterableProductTable