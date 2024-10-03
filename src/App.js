import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Link
        to="/createaccount"
        className="bg-slate-600 text-white hover:bg-slate-900 px-4 py-2 font-bold rounded-md"
      >
        Create Account
      </Link>
    </div>
  );
};

export default App;
