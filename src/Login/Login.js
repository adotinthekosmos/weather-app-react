import React, { Component } from "react";
import "./Login.css";
class Login extends Component {
  render() {
    return (
      <section className="login-container container-fluid">
        <div className="row">
          <div className="col-md-6">
            <form className="login-form">
              <p>Login to Weather Awesome</p>
              <input type="text" placeholder="Please enter username" />
              <input type="password" placeholder="Please enter password" />
            </form>
          </div>
          <div className="col-md-6" />
        </div>
      </section>
    );
  }
}

export default Login;
