import NoPizza from '../../img/nopizza.png'
const CartEmpty: React.FC = () => {
  return (
        <div className="content__wrapper">
          <div className="cart">
        <div className="cart__empty">
           <h2>Cart is empty<span>😕</span></h2>
            <p>
              Apparently,you dont ordered yet<br />
            </p>
            <img src={NoPizza} alt="Empty cart" />
            <a href="/" className="button button--black">
              <span>Go back</span>
            </a>
           </div>
          </div>
        </div>
)
}
export default CartEmpty;