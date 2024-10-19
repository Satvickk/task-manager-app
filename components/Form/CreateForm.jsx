"use client"

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema"
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/taskSlice";

export default function CreateForm({closeModal}) {

  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {},
  });

  const onSubmit = (data) => {
    try {
        dispatch(addTask({...data, isCompleted: false, id: Date.now()}))
        reset(); 
        closeModal();
    } catch (error) {
        console.log("Error ::", error)
    }
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
          {errors.title && (
            <span className="text-red-500 text-sm">{errors.title.message}</span>
          )}
        </div>


        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            className={`textarea bg-inherit textarea-bordered ${
              errors.description ? "textarea-error" : ""
            }`}
            placeholder="Enter task description"
            {...register("description")}
          ></textarea>
          {errors.description && (
            <span className="text-red-500 text-sm">{errors.description.message}</span>
          )}
        </div>


        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Priority</span>
          </label>
          <select
            className={`select bg-inherit select-bordered ${errors.priority ? "select-error" : ""}`}
            {...register("priority")}
          >
            <option value="">Select Priority</option>
            <option value={1}>High</option>
            <option value={2}>Medium</option>
            <option value={3}>Low</option>
          </select>
          {errors.priority && (
            <span className="text-red-500 text-sm">{errors.priority.message}</span>
          )}
        </div>

        <div className="form-control gap-2">
          <button type="submit" className="btn btn-primary w-full text-white">
            Add Task
          </button>
          <button className="btn btn-outline w-full" onClick={closeModal}>
            Close
          </button>
        </div>
      </form>
    </div>
  );
}
