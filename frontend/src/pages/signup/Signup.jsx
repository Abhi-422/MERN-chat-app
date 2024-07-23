import GenderCheckbox from "./genderCheckbox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">SignUp
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form action="">
          <div>
            <label className="label p-2" htmlFor="fullname">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input type="text" name="fullname" placeholder="Enter Fulname" id="" className="w-full input input-bordered h-10" />
          </div>

          <div>
            <label className="label p-2" htmlFor="username">
              <span className="text-base label-text">Username</span>
            </label>
            <input type="text" name="username" placeholder="Enter Username" id="" className="w-full input input-bordered h-10" />
          </div>

          <div>
            <label className="label p-2" htmlFor="password">
              <span className="text-base label-text">Passowrd</span>
            </label>
            <input type="text" name="password" placeholder="Enter Password" id="" className="w-full input input-bordered h-10" />
          </div>

          <div>
            <label className="label p-2" htmlFor="confirmPassword">
              <span className="text-base label-text">Confirm Passowrd</span>
            </label>
            <input type="text" name="confirmPassword" placeholder="Enter Confirm Password" id="" className="w-full input input-bordered h-10" />
          </div>

          <GenderCheckbox></GenderCheckbox>
          {/* gender checkbox goes here */}

          <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">{"Already"} have an Account?</a>
          <button className="btn btn-block btn-sm mt-2">Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp;