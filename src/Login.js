import React from "react";

const Login = () => {
  return (
    <div class="main">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-lg-12">
            <div class="form card">
              <div class="text">
                <h4 class="display-4 text-center mb-3">Login</h4>
              </div>

              {/* form */}

              <form>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    placeholder="Email"
                  ></input>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress2"
                    placeholder="password"
                  ></input>
                </div>
                <a href="/forgot">Forgot Password</a>
                <br></br>
                <a href="/signup">New here? Sign up</a>
                <a class="btn btn-success btn-block" href="/home" role="button">
                  Login
                </a>
              </form>
              {/* form */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
