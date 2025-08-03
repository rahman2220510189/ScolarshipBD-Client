import { useForm } from "react-hook-form";
import { useLocation, useParams } from "react-router-dom";


const ApplyPage = () => {
    const location = useLocation();
    const {companyName} = useParams();
    const{scholarshipData} = location.state || {};
      const { register, handleSubmit } = useForm();
      const onSubmit = (data) =>{
        console.log('Form Data:', data)
        alert("Application submitted successfully!");
      }
    return (
        <div className="max-w-3xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold mb-4">Apply to {companyName}</h1>
      {scholarshipData &&(
        <>
          <img src={scholarshipData.logo} alt="logo" className="h-12 mb-4" />
          <p className="text-gray-700 mb-2">{scholarshipData.description}</p>
          <p className="text-blue-600 font-semibold mb-1">Award: ${scholarshipData.awardAmount}</p>
          <p className="text-gray-500">Deadline: {scholarshipData.deadline}</p>
        </>
      )};
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-lg shadow-md">
        <input {...register("name")} placeholder="Full Name" className="input" required />
        <input {...register("age")} type="number" placeholder="Age" className="input" required />
        <input {...register("email")} type="email" placeholder="Email" className="input" required />
        <input {...register("phone")} type="tel" placeholder="Phone Number" className="input" required />
        <input {...register("address")} placeholder="Full Address" className="input" required />
        <input {...register("district")} placeholder="Home District" className="input" required />
        <input {...register("state")} placeholder="State / Division" className="input" required />
        <select {...register("gender")} className="input" required>
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <input {...register("fatherName")} placeholder="Father's Name" className="input" required />
        <input {...register("motherName")} placeholder="Mother's Name" className="input" required />
        <input {...register("fatherOccupation")} placeholder="Father's Occupation" className="input" required />
        <input {...register("motherOccupation")} placeholder="Mother's Occupation" className="input" required />
        <input {...register("fatherIncome")} placeholder="Father's Annual Income" className="input" required />
        <input {...register("motherIncome")} placeholder="Mother's Annual Income" className="input" required />
        <input {...register("sscGpa")} placeholder="SSC GPA" className="input" required />
        <input {...register("hscGpa")} placeholder="HSC GPA" className="input" required />

        <select {...register("isAdmitted")} className="input" required>
          <option value="">Are you admitted in any institution?</option>
          <option>Yes</option>
          <option>No</option>
        </select>

        <input {...register("photo")} type="file" className="input" />
        
        <textarea
          {...register("purpose")}
          placeholder="Why do you deserve this scholarship?"
          rows={4}
          className="input md:col-span-2"
          required
        />

        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition col-span-full">
          Submit Application
        </button>
      </form>
    </div>


    
    );
};

export default ApplyPage;