"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema"; // Import your validation schema
import { useDispatch } from "react-redux";
import { updateTask } from "../../redux/features/taskSlice";
import { useEffect } from "react";

export default function UpdateForm({ closeModal, data }) {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (data) {
      reset({
        title: data.title,
        description: data.description,
        priority: data.priority,
      });
    }
  }, [data, reset]);

  const onSubmit = (formData) => {
    dispatch(updateTask({ ...formData, id: data.id, isCompleted: data.isCompleted }));
    reset();
    closeModal();
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-white shadow rounded">
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            className={`input bg-inherit input-bordered ${errors.title ? "input-error" : ""}`}
            placeholder="Enter task title"
            {...register("title")}
          />
          {errors.title && <span className="text-red-500 text-sm">{errors.title.message}</span>}
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            className={`textarea bg-inherit textarea-bordered ${errors.description ? "textarea-error" : ""}`}
            placeholder="Enter task description"
            {...register("description")}
          ></textarea>
          {errors.description && <span className="text-red-500 text-sm">{errors.description.message}</span>}
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Priority</span>
          </label>
          <select
            className={`select bg-inherit select-bordered ${errors.priority ? "select-error" : ""}`}
            {...register("priority")}
          >
            <option value={1}>HIGH</option>
            <option value={2}>MEDIUM</option>
            <option value={3}>LOW</option>
          </select>
          {errors.priority && <span className="text-red-500 text-sm">{errors.priority.message}</span>}
        </div>

        <button type="submit" className="btn btn-primary w-full text-white">
          Update
        </button>
        <button onClick={closeModal} className="mt-2 btn btn-outline w-full">
          Cancel
        </button>
      </form>
    </div>
  );
}
