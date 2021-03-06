import React from "react";
import { GithubLoginButton } from "react-social-login-buttons";

export default function HomePage() {
  return (
    <div className="loginContainer">
      <h1>Login With GitHub</h1>
      <div className="loginInnerContainer">
        <a href="/auth/github">
          <GithubLoginButton className="loginButton" />
        </a>
      </div>
    </div>
  );
}
