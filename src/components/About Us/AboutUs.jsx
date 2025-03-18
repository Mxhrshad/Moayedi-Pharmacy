export default function AboutUs() {
    return (
      <div className="w-full h-full flex justify-center items-center flex-col bg-gray-50 py-16">
        <div className="pb-14 text-center">
          <h2 className="font-bold text-4xl text-teal-600">About Us</h2>
          <p className="text-gray-700 mt-4">Discover who we are and what we offer.</p>
        </div>
  
        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
          <div className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12 text-teal-500 mb-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Affordable Pricing</h3>
            <p className="text-gray-600">Cheaper than your local pharmacy.</p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Convenience</h3>
            <p className="text-gray-600">Easily accessible services at your fingertips.</p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Quality Products</h3>
            <p className="text-gray-600">We offer only the best for your health.</p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Expert Support</h3>
            <p className="text-gray-600">Our team is here to help you every step of the way.</p>
          </div>
        </div>
      </div>
    );
  }