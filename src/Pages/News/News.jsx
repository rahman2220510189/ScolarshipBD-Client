import axios from "axios";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const News = () => {
    const ITEM_PER_PAGE = 5;
    const [item, setItem] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(()=>{
        axios.get('http://localhost:5000/news')
        .then(res => setItem(res.data))
        .catch(err => console.error(err));

    },[])
     const start = (page-1)*ITEM_PER_PAGE;
    //  const pagedItems = item.slice(start, start + ITEM_PER_PAGE);
    const pagedItems = Array.isArray(item)
  ? item.slice(start, start + ITEM_PER_PAGE)
  : [];

     const totalPages = Math.ceil(item.length / ITEM_PER_PAGE);
       
     
  const longText = `
    Scholarships are a wonderful opportunity to support students in their educational journey. 
    By applying for scholarships, students can reduce their financial burdens and focus on their studies. 
    Many organizations, foundations, and governments offer scholarships to deserving candidates based on merit, need, or specific criteria. 
    Applying early and preparing strong applications increases the chances of securing these funds. 
    Scholarships help foster talent and enable access to education for all. 
    Pursue your dreams and never miss a scholarship deadline! 
    Stay informed, apply confidently, and succeed in your academic goals.
  `.repeat(80);


    return (
        <div className="max-w-5xl mx-auto p-4">
            <Marquee
                gradient={false} 
        speed={50} 
        pauseOnHover={true} 
        className="bg-blue-700 text-white font-bold py-3 px-4 text-lg select-none">
              
      
           {longText}
            </Marquee>


    
       
        <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6"> Scholarship update</h1>

      <div className="grid gap-6">
        {pagedItems.map(item => (
          <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={item.image} alt={item.heading} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.heading}</h2>
              <p className="text-gray-700 text-sm">{item.paragraph}</p>
              <p className="text-xs text-gray-500 mt-2">📅 {item.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={() => setPage(p => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          ← Prev
        </button>
        <span>Page {page} of {totalPages}</span>
        <button
          onClick={() => setPage(p => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Next →
        </button>
      </div>
    </div>
        </div>
    );
};

export default News;
