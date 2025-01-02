// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalAmt = 0
      cartList.forEach(eachItem => {
        totalAmt += eachItem.price * eachItem.quantity
      })
      return (
        <div className="summary-container">
          <div>
            <h1>
              Order Total: <span> Rs{totalAmt}/-</span>
            </h1>
            <p>{cartList.length} Items in cart</p>
            <button type="button" className="for-checkout-btn">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
