import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const JoBDetails = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);

    useEffect(() => {
        fetch('/job.json')
            .then(res => res.json())
            .then(data => {
                const foundJob = data.find(j => j.id === parseInt(id));
                setJob(foundJob);
            });
    }, [id]);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log("Application Submitted:", data);
        alert(`Application submitted for ${job.jobTitle}`);
    };

    if (!job) {
        return (
            <div className="text-center py-20 text-gray-500">
                Loading job details...
            </div>
        );
    }

    return (
        <div className="px-4 py-10 bg-gray-50 min-h-screen">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
    
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                        <img
                            src={job.image}
                            alt={job.companyName}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                    <h2 className="text-2xl font-bold text-blue-800">{job.jobTitle}</h2>
                    <p className="text-gray-700 mt-2">{job.jobDescription}</p>
                    <div className="mt-4 text-sm text-gray-600">
                        <p><strong>Company:</strong> {job.companyName}</p>
                        <p><strong>CEO:</strong> {job.ceoName}</p>
                        <p><strong>Published:</strong> {job.publishedDate}</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-blue-700 mb-4">Apply for this job</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input
                                {...register("name", { required: true })}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Your name"
                            />
                            {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                {...register("email", {
                                    required: true,
                                    pattern: /^\S+@\S+$/i
                                })}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="you@example.com"
                            />
                            {errors.email && <span className="text-red-500 text-sm">Valid email is required</span>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone</label>
                            <input
                                {...register("phone", { required: true })}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="01XXXXXXXXX"
                            />
                            {errors.phone && <span className="text-red-500 text-sm">Phone is required</span>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Cover Letter</label>
                            <textarea
                                {...register("coverLetter")}
                                rows={4}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Write something..."
                            />
                        </div>

                        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                            Submit Application
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JoBDetails;