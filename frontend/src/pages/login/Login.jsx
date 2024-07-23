
const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form action="">
          <div>
            <label className="label p-2" htmlFor="username">
              <span className="text-base label-text">Username</span>
            </label>
            <input type="text" name="username" placeholder="Enter Username" id="" className="w-full input input-bordered h-10" />
            <label className="label p-2" htmlFor="password">
              <span className="text-base label-text">passowrd</span>
            </label>
              <input type="text" name="password" placeholder="Enter Password" id="" className="w-full input input-bordered h-10" />
          </div>
          <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">{"Don't"} have an Account?</a>
          <button className="btn btn-block btn-sm mt-2">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login;