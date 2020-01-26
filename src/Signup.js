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
                <p class="lead text-center mb-4">
                  Create your account.Its free and takes only a minute.
                </p>
              </div>

              {/* form */}

              <form>
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
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress2"
                    placeholder="Confirm password"
                  ></input>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    ></input>
                    <label class="form-check-label" for="gridCheck">
                      I agree to the terms & conditions
                    </label>
                  </div>
                </div>
                <button type="submit" class="btn btn-success btn-block">
                  Sign up
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
export default Sign;
