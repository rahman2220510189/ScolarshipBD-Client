import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PartTimeJob = () => {
    const [jobs, setJobs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 6;
    useEffect(() => {
            axios.get('https://scolarshipbd-server-production.up.railway.app/jobs')

            .then(res => setJobs(res.data))
            .catch(err => console.error(err));
    }, []);
    const indexOfListJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfListJob - jobsPerPage;
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfListJob);
    const totalPage = Math.ceil(jobs.length / jobsPerPage);

    return (
        <div className='px-4 py-10 bg-gray-100 min-h-screen'>
            <div className='max-w-6xl mx-auto'>
                <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
                    Available Job Openings
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 hover:scale-105">
                    {
                        currentJobs.map((job) => (
                            <div key={job.id} className='bg-white rounded-xl shadow-md hover:shadow-xl transition p-5'>
                                <img
                                    src={job.image}
                                    alt={job.companyName}
                                    className="w-full h-48 object-cover rounded mb-4"
                                />
                                <h3 className="text-xl font-bold text-blue-800">{job.jobTitle}</h3>
                                <p className="text-gray-600">{job.companyName}</p>
                                <p className="text-sm mt-2 text-gray-700">{job.jobDescription}</p>
                                <div className="mt-4 text-sm text-gray-500">
                                    <p>CEO: {job.ceoName}</p>
                                    <p>Published: {job.publishedDate}</p>
                                </div>
                                <Link to={`/job/${job.id}`}>
                                    <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                                        Apply Now
                                    </button>
                                </Link>
                            </div>
                        ))
                    }
                </div>
                <div className='flex justify-center mt-10 space-x-2'>
                    {Array.from({ length: totalPage }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`px-4 py-2 rounded ${currentPage === i + 1
                                ? "bg-blue-700 text-white"
                                : "bg-white text-blue-700 border border-blue-700"
                                } transition hover:bg-blue-800 hover:text-white`}
                        >
                            {i + 1}
                        </button>

                    ))}

                </div>
            </div>

        </div>
    );
};

export default PartTimeJob;