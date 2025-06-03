import { Link, NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate(); // ✅ updated here

  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const password = form.password.value;

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;

    if (!hasUppercase || !hasLowercase || !isLongEnough) {
      toast.error(
        "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
      );
      return;
    }

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location.state || "/"); // ✅ updated
        toast.success("Sign in successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleLoginWithGoogle = () => {
    signInWithGoogle()
      .then(() => {
        navigate(location.state || "/"); // ✅ updated
        toast.success("Sign in successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  useEffect(() => {
    document.title = "Login | FOOD KING";
  }, []);

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full p-4 flex mx-auto justify-center">
        <div className="border border-green-600 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h2 className="font-semibold text-2xl text-center">
            Login your account
          </h2>
          <form onSubmit={handleLogin} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="username"
                className="input"
                placeholder="Email"
              />

              <label className="label">Password</label>
              <input
                name="password"
                required
                autoComplete="current-password"
                type="password"
                className="input"
                placeholder="Password"
              />

              <div className="hover:underline mt-2">Forgot password?</div>

              <button
                type="submit"
                className="btn btn-neutral bg-green-600 border-none mt-4"
              >
                Login
              </button>
              <button
                onClick={handleLoginWithGoogle}
                type="button"
                className="btn bg-white text-black border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>{" "}
                Login with Google
              </button>

              <p className="font-semibold pt-5 text-center">
                Don't Have An Account?
                <Link className="text-green-600" to="/auth/register">
                  Register
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
