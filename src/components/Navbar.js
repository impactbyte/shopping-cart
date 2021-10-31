import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className="nav-wrapper light-green accent-4">
      <div className="container">
        <Link to="/" className="brand-logo">Shopping</Link>

        <ul className="right">
          <li><Link to="/">Shop</Link></li>
          <li><Link to="/cart">My cart</Link></li>
          <li><Link to="/cart"><i class="material-icons left" style={{ marginRight: '0px', }}>shopping_cart</i><span>{props.items.length}</span></Link></li>
        </ul>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
  }
}

export default connect(mapStateToProps, null)(Navbar)