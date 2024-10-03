const Profile = ({ formData, handleChange }) => {
  return (
    <div className="w-[80%] flex flex-col justify-center items-center gap-1 pt-6 min-h-[500px] pb-6">
      <p className="text-gray-400 text-[16px]">Step 1</p>
      <h1 className="text-3xl text-gray-500 font-normal">Your Profile</h1>
      <div className="flex w-full md:w-[80%] items-center justify-center px-6">
        <p className="text-gray-500 font-normal text-[16px]">
          Enter the Login information for your account. You will be able to
          create additional users after registering.
        </p>
      </div>

      <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-3 mt-8  text-gray-500 font-normal">
        <div className="flex flex-col gap-2 ">
          <label htmlFor="firstName">First Name*</label>
          <input
            className="w-full h-9 border ring-1 p-3 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-200 rounded-md"
            type="text"
            name="firstName"
            required
            placeholder="Enter Your First Name"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="lastName">Last Name*</label>
          <input
            className="w-full h-9 border ring-1 p-3 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-200 rounded-md"
            type="text"
            required
            placeholder="Enter Your Last Name"
            name="lasstName"
            id="lasstName"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="email">Email*</label>
          <input
            className="w-full h-9 border ring-1 p-3 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-200 rounded-md"
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="phoneNumber">Phone Number*</label>
          <input
            className="w-full h-9 border ring-1 p-3 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-200 rounded-md"
            type="number"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Input Your Phone Number"
            required
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="Password">Password*</label>
          <input
            className="w-full h-9 border ring-1 p-3 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-200 rounded-md"
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="cPassword">Confirm Password*</label>
          <input
            className="w-full h-9 border ring-1 p-3 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-200 rounded-md"
            type="text"
            name="cPassword"
            id="cPassword"
            placeholder="Confirm Password"
            required
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
