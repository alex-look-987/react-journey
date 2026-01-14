export interface ProductItem {
  category: string
  price: string
  stocked: boolean
  name: string
}

export interface ProductTableProps {
  products: ProductItem[]
  filterText: string
  inStockOnly: boolean
}

export interface FilterableProductTableProps {
  products: ProductItem[]
}

export interface SearchBarProps {
  filterText: string
  inStockOnly: boolean
  onFilterTextChange: (value: string) => void
  onInStockOnlyChange: (value: boolean) => void
}


export const LIST: ProductItem[] = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

