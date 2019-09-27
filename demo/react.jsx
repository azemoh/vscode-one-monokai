import React, { Component } from 'react';
import { connect } from 'redux';

const Header = () => {
  <header></header>
}

class Home extends Component {
  state = {
    showNav: true
  };

  render() {
    const { menus, ...opts } = this.props;

    return (
      <div>
        <Header {...opts} menus={menus} />
      </div>
    )
  }
}

const mapStateToProps = ({ menus, current_user }) => ({
  menus,
  currentUser: current_user,
})

export default connect(mapStateToProps)(Home)
