import React, { useContext } from "react";
import { AuthCT } from "../../context/auth";
import { AppCT } from "../../context/appContext";
import { AuthForm } from "../../types/auth";
import { useForm } from "react-hook-form";

type Props = {};

const Login = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthForm>();
  const { dispatch } = useContext(AppCT);
  const { onLogin } = useContext(AuthCT);
  const onSubmit = (data: AuthForm) => {
    onLogin(data);
  };
  return (
    <div className="flex justify-center items-center">
      <div className="bg fixed top-[10%] w-3/4 bg-[#f8f4f0] z-50 shadow-lg rounded-2xl">
        <div className="mx-auto max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login to your account
          </h2>
        </div>

        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              className="space-y-6"
              action="#"
              method="POST"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    autoComplete="email"
                    {...register("email", {
                      required: "Khong duoc de trong",
                      pattern: {
                        value: /\S+@\S+\.\S/,
                        message: "Khong dung dinh dang",
                      },
                    })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.email && (
                    <div className="text-red-600">{errors.email.message}</div>
                  )}
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-[#4E7C32] hover:text-[#33591c]"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    {...register("password", {
                      required: "Khong duoc de trong",
                      minLength: {
                        value: 6,
                        message: "Phai hon 6 ki tu",
                      },
                    })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.password && (
                    <div className="text-red-600">
                      {errors.password.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#4E7C32] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#365c1f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                >
                  Sign in
                </button>
                <button
                  onClick={() => dispatch({ type: "login", value: false })}
                  type="button"
                  className="flex w-full justify-center rounded-md bg-[#4E7C32] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#365c1f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
