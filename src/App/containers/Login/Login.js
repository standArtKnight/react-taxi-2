import React, { Component } from "react";
import { isLoginSelector } from "../../store/selectors";
import { Redirect } from "react-router-dom";
import { actions } from "../../store/duck";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    islogIn: isLoginSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: value => dispatch(actions.logIn(value))
  };
};

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const { logIn } = this.props;
    if (email && password) {
      logIn(this.state);
    }
  };

  render() {
    const { email, password } = this.state;
    const { islogIn } = this.props;
    // if (false) {
    //   return <Redirect path="/login" to="/dashboard/map"></Redirect>;
    // }
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={email}
          name="email"
          placeholder="email"
          onChange={this.handleChange}
        />
        <input
          value={password}
          name="password"
          placeholder="password"
          onChange={this.handleChange}
        />
        <button type="submit">SEND</button>
      </form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
