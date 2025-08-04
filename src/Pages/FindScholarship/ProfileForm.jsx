// ProfileForm.jsx
import React from "react";
import { useForm } from "react-hook-form";

const ProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted Profile Data:", data);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded shadow-md w-full max-w-lg space-y-4"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Create Profile</h2>

        {/* Full Name */}
        <input
          {...register("fullName", { required: "Full name is required" })}
          placeholder="Full Name"
          className="input input-bordered w-full"
        />
        {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}

        {/* Email */}
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format",
            },
          })}
          placeholder="Email"
          className="input input-bordered w-full"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        {/* Phone */}
        <input
          {...register("phone")}
          placeholder="Phone Number"
          className="input input-bordered w-full"
        />

        {/* Date of Birth */}
        <input
          {...register("dob")}
          type="date"
          className="input input-bordered w-full"
        />

        {/* Gender */}
        <select {...register("gender")} className="select select-bordered w-full">
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        {/* Address */}
        <textarea
          {...register("address")}
          placeholder="Address"
          className="textarea textarea-bordered w-full"
        />

        {/* Profile Picture */}
        <input
          {...register("profilePicture")}
          type="file"
          className="file-input file-input-bordered w-full"
        />

        {/* Bio */}
        <textarea
          {...register("bio")}
          placeholder="Tell us about yourself"
          className="textarea textarea-bordered w-full"
        />

        {/* Skills */}
        <input
          {...register("skills")}
          placeholder="Skills (comma separated)"
          className="input input-bordered w-full"
        />

        {/* Social Links */}
        <input
          {...register("facebook")}
          placeholder="Facebook URL"
          className="input input-bordered w-full"
        />
        <input
          {...register("linkedin")}
          placeholder="LinkedIn URL"
          className="input input-bordered w-full"
        />

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-full">
          Submit Profile
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;
