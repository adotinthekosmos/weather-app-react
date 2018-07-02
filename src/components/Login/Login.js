import React, { Component } from "react";
import "./Login.css";
class Login extends Component {
  render() {
    return (
      <section className="login-container">
        <div className="login-form-container h-100">
          <form className="login-form">
            <p className="login-title">
              Login to <br />
              <span>Weather Awesome</span>
            </p>

            <div className="login-field">
              <p className="field-label">
                <i class="icon ion-ios-person" /> Username:
              </p>
              <input type="text" placeholder="user@email.com" />
            </div>
            <div className="login-field">
              <p className="field-label">
                <i class="icon ion-ios-key" /> Password:
              </p>
              <input type="password" placeholder="Enter password" />
            </div>

            <a className="login-btn">
              <span>login</span>
            </a>

            <i class="icon ion-ios-sunny sun-login" />
          </form>
        </div>
      </section>
    );
  }
}

export default Login;
