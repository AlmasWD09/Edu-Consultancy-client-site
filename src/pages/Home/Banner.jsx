import { BiSolidLocationPlus } from "react-icons/bi"
import { FaSearch } from "react-icons/fa"
import { MdPayments } from "react-icons/md"
import { TbExchange, TbTruckDelivery } from "react-icons/tb"

const Banner = () => {
  return (
    <>
 <div className="bg-gradient-to-r from-green-100 to-green-300 flex flex-col">
      {/* Header Section */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 p-10">
        <div className="w-full lg:w-[60%] order-2 lg:order-1">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Find Your Best Consultant <br /> For Plan Your{" "}
            <span className="text-primary">Higher Study.</span>
          </h1>
          <p className="mt-4 text-gray-700">
            Choose your dream destination and talk with our consultants about
            your confusion and take the right decision.
          </p>
          {/* Search Section */}
          <div className="rounded-lg pt-6 flex flex-col md:flex-row  md:items-center md:space-x-2 space-y-6 md:space-y-0">
            
        {/* Location Input */}
        <div className="flex items-center border rounded-md px-4 py-3 bg-gray-50">
          <span className="material-icons text-gray-600"><BiSolidLocationPlus className="text-2xl" /></span>
          <input
            type="text"
            placeholder="London"
            className="ml-2 bg-transparent outline-none text-gray-700"
          />
        </div>


        {/* University Input */}
        <div className="flex items-center border rounded-md px-4 py-3 bg-gray-50">
          <input
            type="text"
            placeholder="Oxford University"
            className="bg-transparent outline-none text-gray-700 w-full"
          />
        </div>


        {/* Search Button */}
        <button className="bg-primary text-white px-5 py-4 rounded-md hover:bg-purple-700">
          <span className="material-icons"><FaSearch /></span>
        </button>
      </div>



      {/* Info Text Section */}
      <div className="mt-2 flex md:space-x-28 text-gray-500 text-sm">
        <p>Based on your Location</p>
        <p>Ex: university, Department, program name</p>
      </div>
        </div>
        {/* Image Section */}
          <div className="w-full lg:w-[40%] order-1 lg:order-2">
            <img
              src="/images/banner/banner01.png"
              alt="Consultant"
              className="w-full object-cover bg-center "
            />
        </div>
      </div>


      {/* Statistics Section */}
      <div className="mt-auto bg-primary text-white p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <h2 className="text-2xl font-bold">21</h2>
            <p>Total Registrations</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">21</h2>
            <p>Total Bookings</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">2K</h2>
            <p>Total Users</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">2K</h2>
            <p>Total Consultants</p>
          </div>
        </div>
      </div>
    </div>
</>
  )
}

export default Banner