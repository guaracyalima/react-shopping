import React from 'react';
import { connect } from 'react-redux';
import { MdShoppingBasket } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.svg';

function Header({ cart }) {
  const cartSize = cart.length;
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="React SHopping" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>
            {cartSize}
            itens
          </span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}

export default connect(state => ({ cart: state.cart }))(Header);
