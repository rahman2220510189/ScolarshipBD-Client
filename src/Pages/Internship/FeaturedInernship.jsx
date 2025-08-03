import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ITEM_PER_PAGE = 6;

const FeaturedInernship = () => {
  const [companies, setCompanies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/companies.json')
      .then(res => res.json())
      .then(data => {
        setCompanies(data);
        setLoading(false);
      });
  }, []);

  const maxPage = Math.ceil(companies.length / ITEM_PER_PAGE);
  const startIndex = (page - 1) * ITEM_PER_PAGE;
  const visibleCompanies = companies.slice(startIndex, startIndex + ITEM_PER_PAGE);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6">
              <div className="bg-blue-700 text-center p-10 mb-10">
                <h1 className="text-white text-4xl uppercase mb-5">Career Planning</h1>
                <p className="text-white w-6/12 mx-auto">
                    Career planning should be a big part of your college journey, too! An
                    internship can provide career ideas and will give you more career
                    choices after college graduation. College internships — and even
                    internships for high‑school students — provide the work experiences
                    that will set you apart. Find the best internship program and helpful
                    information on internship interview questions on Scholarship BD.
                </p>
            </div>

   

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {
          visibleCompanies.map(company => (
            <div key={company.id} className="border p-4 rounded shadow-sm">
              <img 
                src={company.logo} 
                alt={company.companyName} 
                className="w-20 h-20 object-contain mb-2 mx-auto" 
              />
              <h2 className="text-xl font-bold text-center">{company.companyName}</h2>
              <p className="mt-2 text-center">{company.description}</p>
              <div className="flex justify-center mt-4">
              <Link to={`/apply/${company.id}`}
              state={{company}} //optional pass the company data directly
              >
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Apply
                </button>
              </Link>
              </div>
            </div>
          ))
        }
      </div>

      {/* Pagination */}
      <div className="flex justify-center space-x-3 mt-6">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>

        {
          [...Array(maxPage)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 rounded ${page === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              {i + 1}
            </button>
          ))
        }

        <button
          disabled={page === maxPage}
          onClick={() => setPage(page + 1)}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FeaturedInernship;
