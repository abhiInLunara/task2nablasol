import React, { useState } from "react";
import Step1 from "../component/Step1";
import Step2 from "../component/Step2";
import Step3 from "../component/Step3";
import Step4 from "../component/Step4";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const CreateProject = () => {
  const [formData, setFormData] = useState({});

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
        return <Step1 formData={formData} handleChange={handleChange} />;
      case 2:
        return <Step2 formData={formData} handleChange={handleChange} />;
      case 3:
        return <Step3 formData={formData} handleChange={handleChange} />;
      case 4:
        return <Step4 formData={formData} handleChange={handleChange} />;
      default:
        return <Step1 formData={formData} handleChange={handleChange} />;
    }
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    alert("form data saved");
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-[80%] relative rounded-md pl-12 pr-12  shadow-md border border-b-2 flex-col flex pt-10">
        <span className="absolute right-2 top-3">
          <Link to="/">
            <RxCross2 size={18} />
          </Link>
        </span>
        {cureentWindow()}
        {(currentStep > 1 && currentStep) < 3 && (
          <button onClick={nextStep}>Next</button>
        )}
        {currentStep === 3 && <button onClick={handleSubmit}>Submit</button>}
      </div>
    </div>
  );
};

export default CreateProject;
