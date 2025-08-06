
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FindInternship = () => {
    const [showCard, setShowCard] = useState(false);
    const [internship, setInternship] = useState([]);
    const [visibleCount, setVisibleCount] = useState(4);

    useEffect(() => {
        axios.get('http://localhost:3000/internship')
            .then(res => setInternship(res.data))
            .catch(err => console.error(err));
            

    }, []);

    const handleShowMore = () => {
        setVisibleCount((prev) => prev + 4);
    };

    useEffect(() => {
        // start the animation a tick after mount
        const t = setTimeout(() => setShowCard(true), 50);
        return () => clearTimeout(t);
    }, []);

    return (
        <div>
            {/* header */}
            <div className="bg-blue-700 text-center p-10">
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

            {/* animated card */}
            <div
                className={`
          max-w-full mx-auto mt-10 bg-slate-400 rounded-xl shadow-lg p-6 text-center
          transition-all duration-700 ease-out transform
          ${showCard ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
            >
                <h2 className="text-2xl font-bold text-blue-700 mb-4">Scholarship BD</h2>
                <p className="text-gray-700 mb-2">
                    Discover the best scholarship and student‑loan opportunities in
                    Bangladesh.
                </p>
                <p className="text-gray-700 mb-4">
                    Join our Facebook community to stay updated with the latest support
                    and tips.
                </p>
                <a
                    href="https://www.facebook.com/bdjobsofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                >
                    Join Now
                </a>
            </div>
            <div className="mt-10 mb-10 bg-blue-700 rounded-lg">
                <div className="p-14">
                    <p className="text-center w-3/4 mx-auto">
                        Internships provide students with valuable hands-on experience in their chosen fields. Scholarship BD helps you find the best internships to build your skills and boost your career prospects.
                    </p>
                </div>
                <div className="p-6">
                    <h1 className="text-3xl font-bold mb-6">Internship Opportunities</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                        {
                            internship.slice(0, visibleCount).map((item) => (
                                <div key={item.id}
                                    className="bg-white p-5 rounded-xl shadow-md transition hover:shadow-xl"
                                >
                                    <img src={item.image} alt={item.companyName} />

                                   <Link to={`/find-internship/${item.id}`} className="hover:underline">  <h2 className="text-xl font-bold text-blue-700 mb-1">{item.companyName}</h2></Link>
                                    <p className="text-gray-700 mb-2">{item.jobDescription}</p>
                                    <p className="text-sm text-gray-600">CEO: {item.ceoName}</p>
                                    <p className="text-sm text-gray-500">Published: {item.publishedDate}</p>

                                </div>

                            ))}

                    </div>

                    {
                        visibleCount < internship.length && (
                            <div className="flex justify-center mt-8">
                                <button
                                    onClick={handleShowMore}
                                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                                >
                                    Show More
                                </button>
                            </div>
                        )
                    }
                </div>


            </div>

        </div>
    );
};

export default FindInternship;
