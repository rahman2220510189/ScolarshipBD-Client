import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FeaturedScholarship = () => {
  const [scholarship, setScholarship] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() =>{
    fetch('/dami.json')
    .then(res => res.json())
    .then(data => setScholarship(data))

  }, []);
      const handleApply = (item) =>{
        navigate(`/apply/${encodeURIComponent(item.companyName)}`, {
            state: {scholarshipData: item},

        })
      }
    return (
          <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Available Scholarships</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {scholarship.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md border">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">{item.companyName}</h2>
              <img src={item.logo} alt="logo" className="h-10" />
            </div>
            <p className="text-gray-700 mb-3">{item.description}</p>
            <p className="font-medium text-blue-600">Award: ${item.awardAmount}</p>
            <p className="text-sm text-gray-500 mb-3">Deadline: {item.deadline}</p>
          <button onClick={() =>handleApply(item)}
           className="inline-block mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Apply
          </button>
          </div>
        ))}
      </div>
    </div>
    );
};

export default FeaturedScholarship;