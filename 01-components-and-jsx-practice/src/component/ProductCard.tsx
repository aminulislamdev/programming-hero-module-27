export function Product() {
  const name = "One plus"
  const price = 23000
  const category = "Phone"
  const stockStatus = true
  return (
    <>
      <h3>Task 4</h3>
      <p>{`Product Name : ${name}
      Price : ${price}
      Category : ${category}
      Stock Status: ${stockStatus ? `In Stock` : `Out of Stock`}`}</p>
    </>
  )
}