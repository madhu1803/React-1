import React from "react";
const Login = () => {
  return (
    <div class="main">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-lg-12">
            <div class="form card">
              <div class="text">
                <h5 class="display-4 text-center mb-3">Login</h5>
                <p class="lead text-center mb-4">
                  Create your account.Its free and takes only a minute.
                </p>
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

                <button type="submit" class="btn btn-success btn-block">
                  Login
                </button>
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
