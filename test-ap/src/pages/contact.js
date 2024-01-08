import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (form) => {
    console.log(form);
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Contact Page</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("fullName", { required: true, minLength: 3 })}
          placeholder="Full name"
          className="w-full p-2 border rounded-md"
        />
        {errors.fullName && (
          <p className="text-sm text-red-500">
            This field is required and must be at least 3 characters long.
          </p>
        )}

        <input
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          placeholder="Email"
          className="w-full p-2 border rounded-md"
        />
        {errors.email && (
          <p className="text-sm text-red-500">
            Please enter a valid email address.
          </p>
        )}

        <input
          {...register("subject", { required: true, minLength: 3 })}
          placeholder="Subject"
          className="w-full p-2 border rounded-md"
        />
        {errors.subject && (
          <p className="text-sm text-red-500">
            This field is required and must be at least 3 characters long.
          </p>
        )}

        <textarea
          {...register("body", { required: true, minLength: 3 })}
          placeholder="Body"
          className="w-full p-2 border rounded-md"
        />
        {errors.body && (
          <p className="text-sm text-red-500">
            This field is required and must be at least 3 characters long.
          </p>
        )}

        <input
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-md cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Contact;
