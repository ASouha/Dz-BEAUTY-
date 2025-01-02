import React from "react";

const PaymentPage = () => {
  return (
    <div className="min-h-screen bg-[#ffffff] w-full flex items-center justify-center p-4">
      {/* Main Container */}
      <div className="bg-white rounded-[50px] shadow-lg w-full max-w-4xl p-8 flex flex-col md:flex-row">
        {/* Left Section: Payment Details */}
        <div className="flex-1 p-4 md:border-r border-gray-200">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">Payment</h2>
          <div className="space-y-6">
            {/* Price */}
            <div className="flex justify-between">
              <span className="text-gray-600 text-lg">Price:</span>
              <span className="text-blue-600 text-lg font-semibold">5000 Dzd</span>
            </div>

            {/* Discount */}
            <div className="flex justify-between">
              <span className="text-gray-600 text-lg">Discount:</span>
              <span className="text-blue-600 text-lg font-semibold">-10%</span>
            </div>

            {/* Amount to Pay */}
            <div className="flex justify-between">
              <span className="text-gray-600 text-lg">Amount to pay:</span>
              <span className="text-blue-600 text-lg font-semibold">4500 Dzd</span>
            </div>

            {/* Remember Bank Card */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="remember" className="text-gray-600 text-sm">
                Remember bank card
              </label>
            </div>
          </div>
        </div>

        {/* Right Section: Card Details */}
        <div className="flex-1 p-4 bg-[#BDA5A5] rounded-lg md:rounded-none md:rounded-r-[50px]">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Card Details</h2>
          <form className="space-y-6">
            {/* Cardholder's Name */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Cardholder's name
              </label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
                placeholder=""
              />
            </div>

            {/* Card Number */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Card number</label>
              <input
                type="text"
                placeholder="XXXX  XXXX  XXXX  XXXX"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
            </div>

            {/* Expiration Date and CVC */}
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm text-gray-700 mb-1">
                  Expiration Date
                </label>
                <input
                  type="text"
                  placeholder="XX/XX"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm text-gray-700 mb-1">CVC</label>
                <input
                  type="password"
                  placeholder="****"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
              </div>
            </div>

            {/* Pay Now Button */}
            <button
              type="submit"
              className="w-full p-3 text-white font-semibold bg-[#614545] rounded-lg hover:bg-[#4f3636] transition"
            >
              Pay Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
