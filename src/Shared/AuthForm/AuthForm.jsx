import React, { useState } from "react";
import { useForm } from "react-hook-form";
import image from '../../assets/images/sign_up.png';
import logo from '../../assets/images/icon.png'
import { Link } from "react-router-dom";
const AuthForm = ({ isSignUp, handleFormSubmit }) => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handleFormSubmit(data);
  };

  return (
<div className="flex flex-col-reverse md:flex-row" >
      <div className="md:w-[60%]">
      <div className="max-w-md mx-auto p-8 bg-[#fafafa] shadow-lg m-12 ">
        {
            isSignUp && <div className="text-center space-y-2">
            <h4 className="text-xl font-bold">Welcome To</h4>
            <h2 className="text-5xl font-semibold">Furni<span className="text-[#72bff9]">Flex</span></h2>
            <p className="text-[#707070]">Signup for purchase your desire products</p>
        </div>
        }
        {
            !isSignUp && <div className="space-y-2">
            <h2 className="text-3xl font-semibold">Welcome Back!</h2>
            <p className="text-[#707070]">Enter your Credentials to access your account</p>
      </div>
        }
        
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          {isSignUp && (
            <div className="flex gap-4">
              <div className="mb-4 w-1/2">
                
                <input
                  type="text"
                  name="firstName"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  placeholder="Enter your first name"
                />
                {errors.firstName && (
                  <p className="text-red-500">{errors.firstName.message}</p>
                )}
              </div>
              <div className="mb-4">
                
                <input
                  type="text"
                  name="lastName"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  placeholder="Enter your last name"
                />
                {errors.lastName && (
                  <p className="text-red-500">{errors.lastName.message}</p>
                )}
              </div>
            </div>
          )}
          <div className="mb-4">
            
            <input
              type="email"
              name="email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-6">

            <input
              type="password"
              name="password"
              {...register("password", { required: "Password is required" })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-[#000000] text-white py-2 rounded"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <div className="divider">or</div>
        <div className="my-6  flex gap-2 flex-col md:flex-row">
		<button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full  space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600 p-2">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
			<p>Login with Google</p>
		</button>
		<button aria-label="Login with GitHub" role="button" className="flex items-center justify-center w-full  space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600 p-2">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
			</svg>
			<p>Login with GitHub</p>
		</button>
	</div>
    {isSignUp ?  <p className="font-semibold text-center">Have an account? <Link to="/login" className="text-[#72bff9] font-semibold">Sign In</Link></p> :
    <p className="font-semibold text-center">Have an account? <Link to="/signup" className="text-[#72bff9] font-semibold">Sign up</Link></p>
    }
      </div>
      
      </div>
      <div style={{backgroundImage: `url(${image})`}} className="md:min-h-screen h-[300px] bg-right w-full md:w-[40%]  p-4 bg-no-repeat flex items-center">
          <div className="flex flex-col items-center justify-center mx-auto w-3/4 space-y-2">
            <img src={logo} className="w-24 rounded-full"></img>
            <h2 className="text-5xl text-[#ffff] font-semibold">Furni<span className="text-[#72bff9]">Flex</span></h2>
            <p className="text-[#ffff] text-center">Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.</p>
          </div>
      </div>
      
    </div>
  );
};

export default AuthForm;
