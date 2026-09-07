type Product = {
  name: string
  price: number
  category: string
  inStock: boolean
}
export default function ProductCard(props: Product) {
  return (
    <div>
      <p>Name : {props.name}</p>
      <p>Price : {props.price}</p>
      <p>Category : {props.category}</p>
      <p>InStock : {props.inStock ? "Stock Available" : "Out of Stock"}</p>
    </div>
  )
}
