import './ProductCard.css'

export default function Product() {
  return (
    <div className='productCard'>
      <p className='productImage'>Image</p>

      <div className='product'>
        <h2 className='productName'>Nike Air</h2>
        <div className='priceAndRate'>
          <p className='price'>$499</p>
          <p className='rateIngStar'>★★★★★ <span className='rate'>5.0</span> </p>
        </div>
        <button className='button'>Buy Now</button>
      </div>
    </div>
  )
}