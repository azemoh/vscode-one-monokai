import React, { Component } from 'react';
import { connect } from 'redux';

const Header = () => {
  <header className="container" />
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

const mapStateToProps = ({ menus, user }) => ({
  menus,
  user,
})

export default connect(mapStateToProps)(Home)
