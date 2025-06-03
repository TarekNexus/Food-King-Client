import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";


const Register = () => {
  const { createUser, setUser, signInWithGoogle } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const name = form.name.value;
   
      if (!name || !photo || !email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }
    // Password validation
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;

    if (!hasUppercase || !hasLowercase || !isLongEnough) {
      toast.error(
        "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate(location.state ? location.state : "/");
            toast.success("Registration successful");
          })
          .catch((error) => {
            toast.error("Failed to update profile: " + error.message);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleLoginWithGoogle = () => {
    signInWithGoogle()
      .then(() => {
        toast.success(" successful login");
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  useEffect(() => {
    document.title = "Register | FOOD KING";
  }, []);
  return (
    <div className="flex justify-center min-h-screen items-center">
     <div className="p-4 w-full flex justify-center ">
       <div className="border border-green-600 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
             
              name="name"
              type="text"
              className="input"
              placeholder="Enter your name"
            />

            <label className="label">Photo URL</label>
            <input
             
              name="photo"
              type="text"
              className="input"
              placeholder="Enter your Photo URL"
            />

            <label className="label">Email</label>
            <input
              
              name="email"
              type="email"
              autoComplete="username"
              className="input"
              placeholder="Email"
            />

            <label className="label">Password</label>
            <div className="relative">
              <input
               
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                className="input w-full pr-12"
                placeholder="Password"
              />
              <span
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7s-8.268-2.943-9.542-7z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.38.28-2.695.788-3.875M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3l18 18"
                    />
                  </svg>
                )}
              </span>
            </div>

            <button type="submit" className="btn btn-neutral bg-green-600 border-none mt-4">
              Register
            </button>

            <button
              type="button"
              onClick={handleLoginWithGoogle}
              className="btn bg-white text-black border-[#e5e5e5] mt-4"
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
              </svg>
              Login with Google
            </button>

            <p className="font-semibold pt-5 text-center">
              Already Have An Account?{" "}
              <Link className="text-green-600" to="/auth/login">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
     </div>
    </div>
  );
};

export default Register;
