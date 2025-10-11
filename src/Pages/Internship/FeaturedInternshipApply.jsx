import { useForm } from "react-hook-form";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

const FeaturedInternshipApply = () => {
  const { id } = useParams();
  const { state: company } = useLocation();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const applicationData = {
        ...data,
        internshipId: id,
        companyName: company.companyName,
        companyLogo: company.logo,
        appliedAt: new Date().toISOString(),
      };

      const res = await axios.post("http://localhost:5000", applicationData);

      if (res.data.success) {
        alert("Application submitted successfully!");
        reset();
      } else {
        alert("Something went wrong while submitting your application.");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Failed to submit. Please try again later.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Company Info */}
      <div className="border p-4 rounded shadow mb-6">
        <img src={company.logo} alt={company.companyName} className="w-24 h-24 mb-2" />
        <h2 className="text-2xl font-bold">{company.companyName}</h2>
        <p className="text-gray-600 mt-2">{company.description}</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-4 border p-4 rounded shadow">
        <input {...register("name")} placeholder="Full Name" className="border p-2 rounded" required />
        <input {...register("email")} type="email" placeholder="Email" className="border p-2 rounded" required />
        <input {...register("phone")} placeholder="Phone Number" className="border p-2 rounded" required />

        <select {...register("gender")} className="border p-2 rounded" required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input {...register("address")} placeholder="Address" className="border p-2 rounded" required />
        <input {...register("state")} placeholder="State" className="border p-2 rounded" />
        <input {...register("district")} placeholder="District" className="border p-2 rounded" />

        <input {...register("university")} placeholder="University Name" className="border p-2 rounded" required />
        <input {...register("department")} placeholder="Department" className="border p-2 rounded" />
        <input {...register("semester")} placeholder="Current Semester" className="border p-2 rounded" />
        <input {...register("cgpa")} placeholder="Current CGPA" className="border p-2 rounded" />
        <input {...register("sscGpa")} placeholder="SSC GPA" className="border p-2 rounded" />
        <input {...register("hscGpa")} placeholder="HSC GPA" className="border p-2 rounded" />

        <input {...register("fatherName")} placeholder="Father's Name" className="border p-2 rounded" />
        <input {...register("motherName")} placeholder="Mother's Name" className="border p-2 rounded" />
        <input {...register("fatherOccupation")} placeholder="Father's Occupation" className="border p-2 rounded" />
        <input {...register("motherOccupation")} placeholder="Mother's Occupation" className="border p-2 rounded" />
        <input {...register("annualIncome")} placeholder="Annual Family Income" className="border p-2 rounded" />

        <textarea {...register("whyApply")} placeholder="Why do you want to apply?" rows={4} className="border p-2 rounded col-span-1 sm:col-span-2" />

        <button type="submit" className="col-span-1 sm:col-span-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default FeaturedInternshipApply;
