import { useState } from "react";
import { FaGreaterThan } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
const Business = ({ formData, handleChange }) => {
  const [doc1, setDoc1] = useState(false);
  const [doc2, setDoc2] = useState(false);
  const [doc3, setDoc3] = useState(false);

  return (
    <div className="w-[80%] flex flex-col justify-center items-center gap-1 pt-6 min-h-[500px] pb-10 ">
      <p className="text-gray-400 text-[16px]">Step 2</p>
      <h1 className="text-3xl text-gray-500 font-normal">
        Business Information
      </h1>
      <div className="flex w-full  items-center justify-center px-6">
        <p className="text-gray-500 font-normal text-[16px]">
          Pleaase enter information about your company.
        </p>
      </div>

      <div className="w-full mt-4 mb-6">
        <span className="text-[14px] text-blue-400 self-start ">
          GENERAL INFORMATION
        </span>
        <div className="grid mt-2 w-full grid-cols-1 md:grid-cols-2 gap-5   text-gray-500 font-normal">
          <div className="flex flex-col gap-2 ">
            <label htmlFor="brandName">Brand Name*</label>
            <input
              className="w-full h-9 border ring-1 p-3 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-200 rounded-md"
              type="text"
              name="brandName"
              required
              placeholder="Enter Your Brand Name"
              id="brandName"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label htmlFor="brandType">Brand Type*</label>
            <select
              className="w-full h-9 border ring-1 p-2 ring-gray-300 focus:outline-none focus:ring-1  focus:ring-blue-300 rounded-md"
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
      </div>

      <div className="w-full flex flex-col gap-4">
        <span className="text-[14px] text-blue-400">DOCCUMENTS</span>
        <div className="w-full flex flex-col gap-2">
          <p className="text-gray-500 font-normal text-[14px]">
            Once the following doccuments are signed, you'll be ready to get
            started
          </p>
          <div className="w-full flex justify-between">
            <div className=" w-[90%] flex justify-between text-gray-500 font-normal text-[14px] border ring-1 p-2 ring-gray-300 rounded-md px-2 items-center">
              Electronically sign the agreement(s)
              <FaCheck className="text-green-700 " />
              {/* <ImCross className="text-red-700 " /> */}
            </div>
            <button className="bg-blue-600 h-8 w-8 text-center flex items-center justify-center rounded-md">
              <FaGreaterThan className="h-3 font-bold text-white " />
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="w-full flex justify-between">
            <div className=" w-[90%] flex justify-between text-gray-500 font-normal text-[14px] border ring-1 p-2 ring-gray-300 rounded-md px-2 items-center">
              Non adult beverage Knoger market supplier walver and release
              <FaCheck className="text-green-700 " />
              {/* <ImCross className="text-red-700 " /> */}
            </div>
            <button className="bg-blue-600 h-8 w-8 text-center flex items-center justify-center rounded-md">
              <FaGreaterThan className="h-3 font-bold text-white " />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full mt-3">
        <span className="text-[14px] text-blue-400">COI PDF UPLOAD</span>
        <div className="w-full flex flex-col gap-2">
          <p className="text-gray-500 font-normal text-[14px]">
            Once the following doccuments are signed, you'll be ready to get
            started
          </p>
          <div className="w-full flex justify-between">
            <div className=" w-[90%] flex justify-between text-gray-500 font-normal text-[14px] border ring-1 p-2 ring-gray-300 rounded-md px-2 items-center">
              Electronically sign the agreement(s)
              <FaCheck className="text-green-700 " />
              {/* <ImCross className="text-red-700 " /> */}
            </div>
            <button className="bg-blue-600 h-8 w-8 text-center flex items-center justify-center rounded-md">
              <FaGreaterThan className="h-3 font-bold text-white " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
