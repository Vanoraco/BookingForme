import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";

export type RegisterFormData = {
  firstName: string,
  lastName: string,
  name: string;
  email: string;
  password: string;
};

const Register = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { showToast } = useAppContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const mutation = useMutation(apiClient.register, {
    onSuccess: async () => {
      showToast({ message: "Registration Success!", type: "SUCCESS" });
      await queryClient.invalidateQueries("validateToken");
      navigate("/");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    const [firstName, ...lastNameParts] = data.name.split(" ");
    const lastName = lastNameParts.join(" ");
  
    mutation.mutate({
      ...data,
      firstName: firstName || "Unknown", // Default if only one name is provided
      lastName: lastName || "Unknown",  // Default if no last name is provided
    });
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
          <h2 className="text-sm">LETS GET YOU STARTED</h2>
          <h2 className="text-lg font-bold mb-6">Create an Account</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
                className="mt-1 block w-full border rounded px-3 py-2"
              />
              {errors.name && (
                <span className="text-sm text-red-500">{errors.name.message}</span>
              )}
            </div>

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
            Get Started
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
              Sign up with Google
            </button>
            <button className="w-full flex items-center justify-center border py-2 rounded-lg">
              <img
                src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000"
                alt="Facebook"
                className="w-5 h-5 mr-2"
              />
              Sign up with Facebook
            </button>
            <button className="w-full flex items-center justify-center border py-2 rounded-lg">
              <img
                src="https://img.icons8.com/?size=100&id=30840&format=png&color=000000"
                alt="Apple"
                className="w-5 h-5 mr-2"
              />
              Sign up with Apple
            </button>
          </div>

          <p className="mb-9 text-sm text-center">
            Already have an account?{" "}
            <a href="/sign-in" className="text-blue-600 font-medium">
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;