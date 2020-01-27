import React from "react";

const Sign = () => {
  return (
    <div class="main">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-lg-12">
            <div class="form card">
              <div class="text">
                <h4 class="display-4 text-center mb-3">Register</h4>
              </div>

              {/* form */}

              <form>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    placeholder="Email Address"
                  ></input>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="Password"
                    ></input>
                  </div>
                  <div class="form-group col-md-6">
                    <input
                      type="password"
                      class="form-control"
                      id="inputPassword4"
                      placeholder="Confirm Password"
                    ></input>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="First Name"
                    ></input>
                  </div>
                  <div class="form-group col-md-6">
                    <input
                      type="password"
                      class="form-control"
                      id="inputPassword4"
                      placeholder="Last Name"
                    ></input>
                  </div>
                </div>

                <div class="form-group">
                  {" "}
                  <a href="/login">Already Have an account? Sign in</a>
                </div>
                <div class="form-group text-right">
                  {" "}
                  <a class="btn btn-success btn-lg" href="/login" role="button">
                    Sign up
                  </a>
                </div>
              </form>
              {/* form */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sign;
