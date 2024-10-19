"use client";

import { deleteTask, setTasks, updateTask } from "../redux/features/taskSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import MyUpdateModal from "./Form/UpdateModal";

export default function Tasks({ serverData }) {
  const TaskData = useSelector((state) => state.Tasks);
  const dispatch = useDispatch();
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    dispatch(setTasks(serverData));
  }, [dispatch, serverData]);

  function handleMarkAsComplete(data) {
    try {
      dispatch(updateTask({ ...data, isCompleted: true }));
    } catch (error) {
      console.log("Error ::", error);
    }
  }

  function handleDeleteTask(data) {
    try {
      dispatch(deleteTask(data));
    } catch (error) {
      console.log("Error ::", error);
    }
  }

  const handlePriorityChip = (val) => {
    const priorityClass =
      val === 1
        ? "bg-red-500"
        : val === 2
        ? "bg-yellow-500"
        : val === 3
        ? "bg-green-500"
        : "text-black";
    return (
      <p
        className={`px-4 py-2 rounded-bl-md font-semibold text-xs absolute top-0 right-0 text-white ${priorityClass}`}
      >
        {val === 1 ? "HIGH" : val === 2 ? "MEDIUM" : "LOW"}
      </p>
    );
  };

  return (
    <>
      <MyUpdateModal title={"Edit Task"} editData={editData} />
      <h2 className="text-2xl font-semibold border-b-2 my-2">Tasks</h2>
      <div className="w-full grid gap-4 sm:grid-cols-3">
        {TaskData.allTasks.toSorted((a,b) => a.isCompleted - b.isCompleted).map((data) => (
          <div
            className="w-full bg-white rounded-md px-3 py-2 grid col-span-1 gap-4 shadow-lg relative"
            key={data.id}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-md font-medium">{data.title}</h3>
              {handlePriorityChip(data.priority)}
            </div>
            <p className="text-sm">{data.description}</p>
            <div className="flex gap-3">
            <button
                    className="text-red-500 border-2 rounded-md border-red-500 px-3 py-1 hover:text-white hover:bg-red-500 duration-300 transition-all"
                    onClick={() => handleDeleteTask(data)}
                  >
                    Delete
                  </button>
              {data.isCompleted ? (
                <span className="text-sm font-bold my-auto text-blue-700">Completed</span>
              ) : (
                <>
                  <button
                    className="text-green-500 border-2 rounded-md border-green-500 px-3 py-1 hover:text-white hover:bg-green-500 duration-300 transition-all"
                    onClick={() => {
                      setEditData(data);
                      document.getElementById("my_modal_2").showModal();
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="text-blue-500 border-2 rounded-md border-blue-500 px-3 py-1 hover:text-white hover:bg-blue-500 duration-300 transition-all"
                    onClick={() => handleMarkAsComplete(data)}
                  >
                    Mark as Complete
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
