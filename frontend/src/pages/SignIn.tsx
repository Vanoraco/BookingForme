import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import { useLocation, useNavigate } from "react-router-dom";

export type SignInFormData = {
 
  email: string;
  password: string;
};

const SignIn = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { showToast } = useAppContext();

  const location = useLocation();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormData>();

  const mutation = useMutation(apiClient.signIn, {
    onSuccess: async () => {
      showToast({ message: "Sign in Successful!", type: "SUCCESS" });
      await queryClient.invalidateQueries("validateToken");
      navigate(location.state?.from?.pathname || "/");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen overflow-hidden text-sm" style={{ backgroundImage: 'url("https://i.postimg.cc/RF7y2JSR/bg-overlay.png")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      <div className="flex justify-center mb-6 ml-9 mt-9">
            <img
              src="https://i.postimg.cc/SKNqhp18/BOOKFORME-02-03-1.png" // Replace with your actual logo URL
              alt="BookForme Logo"
              className="w-auto h-36" // Adjust dimensions as needed
            />
          </div>
      {/* Left Section */}
      <div className="w-full md:w-1/2 relative bg-cover bg-center text-sm">
        <div className="absolute inset-0  bg-opacity-30"></div>
        <div className="relative z-10 text-white flex flex-col justify-center h-full px-10">
          <h1 className="text-4xl font-bold">Building the Future...</h1>
          <p className="mt-4 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      {/* Right Section */}
       <div className="w-full md:w-1/2 flex items-center justify-center mt-24 p-4 mr-10">

        <form
          className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
          onSubmit={onSubmit}
        >
          <h2 className="text-sm">WELCOME BACK</h2>
          <h2 className="text-lg font-bold mb-6">Log in to your an Account</h2>
          <div className="space-y-4">
            

            <div>
              <label htmlFor="email" className="block text-xs font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: "Email is required" })}
                className="mt-1 block w-full border rounded px-3 py-2"
              />
              {errors.email && (
                <span className="text-sm text-red-500">{errors.email.message}</span>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-xs font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="mt-1 block w-full border rounded px-3 py-2"
              />
              {errors.password && (
                <span className="text-sm text-red-500">{errors.password.message}</span>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-black text-white py-2 rounded-lg font-medium"
          >
            CONTINUE
          </button>

          <div className="mt-4 flex items-center justify-between">
            <span className="block border-b w-1/3"></span>
            <span className="text-gray-500">Or</span>
            <span className="block border-b w-1/3"></span>
          </div>

          <div className="mt-4 space-y-3">
            <button className="w-full flex items-center justify-center border py-2 rounded-lg text-sm">
              <img
                src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Log in with Google
            </button>
            <button className="w-full flex items-center justify-center border py-2 rounded-lg">
              <img
                src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000"
                alt="Facebook"
                className="w-5 h-5 mr-2"
              />
              Log in with Facebook
            </button>
            <button className="w-full flex items-center justify-center border py-2 rounded-lg">
              <img
                src="https://img.icons8.com/?size=100&id=30840&format=png&color=000000"
                alt="Apple"
                className="w-5 h-5 mr-2"
              />
              Log in with Apple
            </button>
          </div>

          <p className="mb-9 text-sm text-center">
            New User?{" "}
            <a href="/register" className="text-blue-600 font-medium">
              Sign Up Here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;