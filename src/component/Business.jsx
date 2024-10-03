import { useState } from "react";

const Business = ({ formData, handleChange }) => {
  const [files, setFiles] = useState({
    doc1: false,
    doc2: false,
    doc3: false,
  });

  const handleFileChange = (e, doc) => {
    const file = e.target.files[0];
    setFiles({ ...files, doc: true });
    handleChange({ target: { name: doc, value: file } });
  };
  return (
    <div className="w-[80%] flex flex-col justify-center items-center gap-1 pt-6 min-h-[500px] pb-6">
      <p className="text-gray-400 text-[16px]">Step 2</p>
      <h1 className="text-3xl text-gray-500 font-normal">
        Business Information
      </h1>
      <div className="flex w-full md:w-[80%] items-center justify-center px-6">
        <p className="text-gray-500 font-normal text-[16px]">
          Pleaase enter information about your company.
        </p>
      </div>

      <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-3 mt-8  text-gray-500 font-normal">
        <div className="flex flex-col gap-2 ">
          <span className="text-[14px] text-blue-400">GENERAL INFORMATION</span>
          <label htmlFor="brandName">Brand Name*</label>
          <input
            className="w-full h-9 border ring-1 p-3 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-200 rounded-md"
            type="text"
            name="brandName"
            required
            placeholder="Enter Your Brand Name"
            id="brandName"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="brandType">Brand Type*</label>
          <select
            className="w-full h-full border ring-1 p-2 ring-gray-300 focus:outline-none focus:ring-1  focus:ring-blue-300 rounded-md"
            id="brandType"
            name="brandType"
            // value={formData.client}
            onChange={handleChange}
          >
            <option className="w-full  border ring-1 p-3 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-300 rounded-md">
              select Brand Type
            </option>
            <option
              className="w-full  border ring-1 p-3 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-300 rounded-md"
              value="Local"
            >
              Local
            </option>
            <option
              className="w-full  border ring-1 p-3 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-300 rounded-md"
              value="National"
            >
              National
            </option>
          </select>
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="address">Street Address*</label>
          <input
            className="w-full h-9 border ring-1 p-3 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-200 rounded-md"
            type="text"
            name="address"
            id="address"
            placeholder="Input Your Street Address"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="city">City*</label>
          <input
            className="w-full h-9 border ring-1 p-3 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-200 rounded-md"
            type="text"
            name="city"
            id="city"
            placeholder="Input City"
            required
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="zipcode">Zip Code*</label>
          <input
            className="w-full h-9 border ring-1 p-3 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-200 rounded-md"
            type="number"
            name="zipcode"
            id="zipcode"
            placeholder="Input Zip Code"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="taxID">Tax ID Number*</label>
          <input
            className="w-full h-9 border ring-1 p-3 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-200 rounded-md"
            type="number"
            name="taxID"
            id="taxID"
            placeholder="Input Tax ID Number"
            required
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="">
        <span className="text-[14px] text-blue-400">DOCCUMENTS</span>
        <div className="">
          <p>
            Once the following doccuments are signed, you'll be ready to get
            started
          </p>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Business;
