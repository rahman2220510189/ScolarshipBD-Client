import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const InternshipDetails = () => {
    const {id} = useParams();
    const [company , setCompany] = useState(null);
    useEffect(()=>{
      fetch("/internship.json")
      .then((res) => res.json())
      .then(data =>{
        const found = data.find((item) => item.id.toString() === id);
        setCompany(found)
      })

    },[id])
     if (!company) return <p>Loading...</p>
    return (
     <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow my-10">
      <Link
        to="/find-internship"
        className="text-blue-600 hover:underline mb-4 inline-block"
      >
        &larr; Back to internships
      </Link>
      <h1 className="text-3xl font-bold mb-4">{company.companyName}</h1>
      <img
        src={company.image}
        alt={company.companyName}
        className="w-full h-48 object-contain mb-4"
      />
      <p className="mb-2">{company.jobDescription}</p>
      <p className="mb-2">
        <strong>CEO:</strong> {company.ceoName}
      </p>
      <p className="mb-2">
        <strong>Published:</strong> {company.publishedDate}
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">How to Apply</h2>
      <p>
        To apply for this internship, visit the company’s official website or
        contact their HR department. Prepare a professional resume and follow
        application instructions carefully.
      </p>

      
      <p>
      {company.companyName} 
     
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Article: {company.article}</h2>

      <a
        href={company.website}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Apply Now
      </a>
    </div>
    );
};

export default InternshipDetails;