import React from "react";
const Forgot = () => {
  return (
    <div class="main">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-lg-12">
            <div class="form card">
              <div class="text">
                <h5 class="display-4 text-center mb-3">Forgot Password</h5>
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

                <a href="/login">Already have a account?Login</a>
                <br></br>
                <a href="/Signup">New here? Sign up</a>
                <a class="btn btn-success btn-block" href="#" role="button">
                  Submit
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
export default Forgot;
