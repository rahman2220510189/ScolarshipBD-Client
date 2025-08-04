
import { useForm } from "react-hook-form";
const SchoolForm = () => {
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Student Profile:", data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl space-y-6"
      >
        <h2 className="text-3xl font-semibold text-center text-indigo-600">Student Profile</h2>

        {/* Full Name */}
        <div>
          <label className="block font-medium mb-1">Full Name</label>
          <input
            {...register("fullName", { required: "Name is required" })}
            placeholder="John Doe"
            className="input input-bordered w-full"
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
            placeholder="john@student.edu"
            className="input input-bordered w-full"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Institution */}
        <div>
          <label className="block font-medium mb-1">School / College</label>
          <input
            {...register("institution")}
            placeholder="XYZ High School or ABC College"
            className="input input-bordered w-full"
          />
        </div>

        {/* Grade / Year */}
        <div>
          <label className="block font-medium mb-1">Grade / Year</label>
          <select {...register("year")} className="select select-bordered w-full">
            <option value="">Select</option>
            <option value="9">Grade 9</option>
            <option value="10">Grade 10</option>
            <option value="11">College Year 1</option>
            <option value="12">College Year 2</option>
          </select>
        </div>

        {/* Interests */}
        <div>
          <label className="block font-medium mb-1">Interests</label>
          <input
            {...register("interests")}
            placeholder="e.g. Programming, Music, Sports"
            className="input input-bordered w-full"
          />
        </div>

        {/* Bio */}
        <div>
          <label className="block font-medium mb-1">Short Bio</label>
          <textarea
            {...register("bio")}
            placeholder="Tell us a bit about yourself..."
            className="textarea textarea-bordered w-full"
          />
        </div>

        {/* Social Links */}
        <div>
          <label className="block font-medium mb-1">LinkedIn / Portfolio</label>
          <input
            {...register("linkedin")}
            placeholder="https://linkedin.com/in/username"
            className="input input-bordered w-full"
          />
        </div>

        {/* Profile Picture */}
        <div>
          <label className="block font-medium mb-1">Profile Picture</label>
          <input
            {...register("profilePicture")}
            type="file"
            className="file-input file-input-bordered w-full"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-full uppercase tracking-wide">
          Submit Profile
        </button>
      </form>
    </div>
  );
};
export default SchoolForm;