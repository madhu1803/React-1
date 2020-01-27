import React from "react";
const Forgot = () => {
  return (
    <div class="main">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-lg-12">
            <div class="form card">
              <div class="text">
                <p class="display-4 text-center mb-3">Forgot Password</p>
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
                </div>{" "}
                <div class="form-group">
                  <a href="/login">Already have a account?Login</a>
                </div>
                <div class="form-group">
                  <a href="/Signup">New here? Sign up</a>
                </div>
                <div class="text-right">
                  <a class="btn btn-success btn-lg " href="#" role="button">
                    Submit
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
export default Forgot;
