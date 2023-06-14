import Facebook from "./icons/facebook";
import Google from "./icons/google";

function App() {
  return (
    <div className="min-h-screen flex">
      <FormSignUp />
      <Banner />
    </div>
  );
}

function FormSignUp() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center gap-8">
      {/* Header */}
      <div className="flex flex-col gap-4 w-full px-8 md:px-24 lg:px-32">
        <h1 className="text-4xl">Sign Up</h1>
        <p className="text-[#8888a8]">
          Create account and start using OnlyFams
        </p>
      </div>
      {/* Form */}
      <form className="flex flex-col gap-6 w-full px-8 md:px-24 lg:px-32">
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-400 font-light">Email</label>
          <input
            className="outline-none border border-gray-300 rounded px-4 py-2 font-light"
            type="email"
            placeholder="Add your email"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-400 font-light">Password</label>
          <input
            className="outline-none border border-gray-300 rounded px-4 py-2 font-light"
            type="password"
            placeholder="Add your password"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-400 font-light">
            Repeat password
          </label>
          <input
            className="outline-none border border-gray-300 rounded px-4 py-2 font-light"
            type="password"
            placeholder="Add your password"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 rounded text-white px-8 py-3 text-sm tracking-wide"
        >
          Signup
        </button>
      </form>
      {/* Divider */}
      <span>or</span>
      {/* SSO */}
      <div className="flex gap-4 w-full px-8 md:px-24 lg:px-32">
        <button className="flex-1 flex justify-center items-center gap-4 border border-blue-300 rounded bg-blue-50 text-sm font-medium px-12 py-2">
          <Facebook />
          Login with Facebook
        </button>
        <button className="flex-1 flex justify-center items-center gap-4 border border-blue-300 rounded bg-blue-50 text-sm font-medium px-12 py-2">
          <Google />
          Login with Google
        </button>
      </div>
    </div>
  );
}

function Banner() {
  return (
    <div className="flex-1 hidden md:block">
      <img
        className="object-cover object-bottom h-screen w-full"
        src="https://images.unsplash.com/photo-1686686200559-3b58bd444f86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
      />
    </div>
  );
}

export default App;
