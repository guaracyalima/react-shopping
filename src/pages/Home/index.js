import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './style';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';
class Home extends Component {
  state = {
    products: [],
  };
  async componentDidMount() {
    const response = await api.get('products');
    const data = response.data.map(product => ({
      ...product,
      priceFormated: formatPrice(product.price),
    }));
    this.setState({ products: data });
  }

  handleAddProduct = product => {
    //const { dispatch } = this.props;
    const { addToCart } = this.props;

    //dispatch({ type: 'ADD_TO_CART', product });
    //dispatch(CartActions.addToCart(product));
    addToCart(product);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;
    return (
      <ProductList>
        {products.map(p => (
          <li key={p.id}>
            <img src={p.image} alt={p.title} />
            <strong>{p.title}</strong>
            <span>{formatPrice(p.price)}</span>

            <button
              type="button"
              onClick={() => {
                this.handleAddProduct(p);
              }}
            >
              <div>
                <MdAddShoppingCart size={16} color="#ddd" /> {amount[p.id] || 0}
              </div>

              <span>Adicionar ao carrinho</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

//permite que os dispatchs virem propriedades do compomenten
//e sejam assessadas como sendo parte do props
const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Home);
