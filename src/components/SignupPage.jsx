import React from "react";

export default function SignIn() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row w-full max-w-[900px] bg-white shadow-lg rounded-[30px] overflow-hidden">
        {/* Left Side */}
        <div className="bg-[#956E6F] text-white p-10 flex flex-col justify-center items-start  rounded-tr-[50px] rounded-br-[50px] md:flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Hello There</h1>
          <p className="mb-4 text-sm md:text-base">
            Sign in and be one of our Community <strong>RIGHT NOW!</strong>
          </p>
          <p className="text-sm md:text-base">
            Already have an account?{" "}
            <a href="#" className="underline">
              LOG IN
            </a>
          </p>
        </div>

        {/* Right Side */}
        <div className="p-10 flex flex-col justify-center flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            SIGN IN
          </h2>
          <form>
            <input
              type="text"
              placeholder="Username@mbi.dz"
              className="w-full mb-4 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#614545]"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-4 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#614545]"
            />
            <div className="flex justify-between items-center mb-4 text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-blue-500 hover:underline">
                Forget password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-[#614545] text-white py-3 rounded hover:bg-[#b55465] transition"
            >
              SIGN IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
