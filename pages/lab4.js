import React,{useState} from 'react'
import Header from './header';

function Lab4() {
    const [searchTerm, setSearchTerm] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Kết quả:",searchTerm);
    };
  
    return (
      <div>
        <Header />
        <h1 className="text-4xl font-medium text-center my-5">Lab 4</h1>
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center my-8"
        >
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-[40px] px-4 py-2 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="absolute top-0 right-0 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
  

export default Lab4