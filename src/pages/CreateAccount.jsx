import React, { useState } from "react";
import Header from "../component/Header";
import Profile from "../component/Profile";
import Business from "../component/Business";

import { FaLessThan, FaGreaterThan } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    brandName: "",
    brandType: "",
    address: "",
    city: "",
    zipcode: "",
    taxID: "",
  });
  const pages = ["Your Profile", "Business Information"];

  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const cureentWindow = () => {
    switch (currentStep) {
      case 1:
        return <Profile formData={formData} handleChange={handleChange} />;
      case 2:
        return <Business formData={formData} handleChange={handleChange} />;

      default:
        return <Profile formData={formData} handleChange={handleChange} />;
    }
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    alert("form data saved");
  };
  return (
    <div className="w-screen h-full flex  items-center overflow-y-auto justify-center bg-[url('data:image/jpeg;base64,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')] bg-cover bg-center">
      <div className="w-[70%]  relative h-screen flex flex-col py-3  ">
        <Header />
        <div className="w-full relative bg-white rounded-md shadow-xl  flex-col flex ">
          <div className="flex  h-12  w-full justify- items-center bg-slate-100 rounded-md">
            {pages.map((page, index) => (
              <span
                key={index}
                className={`w-1/2 h-full flex rounded-md items-center justify-center gap-3   cursor-pointer text-white text-[16px] ${
                  currentStep === index + 1
                    ? "bg-sky-300 rounded-r-3xl "
                    : " text-gray-600"
                }`}
                onClick={() => setCurrentStep(index + 1)}
              >
                <span
                  className={`px-2   rounded-full  ${
                    currentStep === index + 1
                      ? "bg-white text-gray-500 "
                      : " text-white bg-gray-500"
                  }`}
                >
                  {index + 1}
                </span>
                {page}
              </span>
            ))}
          </div>
          <div className="w-full flex items-center justify-center">
            {cureentWindow()}
          </div>
        </div>
        <div className="w-full  bottom-0 left-0 flex flex-col py-10 items-center justify-between">
          <span className="text-blue-500">
            <Link to="/" className="absolute left-0">
              <FaLessThan className=" inline  h-3 w-3" />
              <span className=" ml-1">Back to Login</span>
            </Link>
          </span>
          <div className="self-end">
            {currentStep === 1 && currentStep && (
              <button
                onClick={nextStep}
                className="px-4 bg-blue-600 py-1 rounded-md text-white font-normal"
              >
                Next Step
                <FaGreaterThan className="ml-1 inline  h-3 w-3" />
              </button>
            )}
            {currentStep === 2 && (
              <>
                <button
                  onClick={prevStep}
                  className="px-2 mr-2 text-blue-600 py-1 rounded-md border border-blue-600 ng-white font-normal"
                >
                  <FaLessThan className="mr-1 inline  h-3 w-3" />
                  Previous Step
                </button>
                <button
                  className="px-8 bg-blue-700  py-1 rounded-md text-white font-normal"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
