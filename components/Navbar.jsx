"use client";

import { useDispatch, useSelector } from "react-redux";
import CreateForm from "./Form/CreateForm";
import MyModal from "./Form/CreateModal";
import { setTasks } from "../redux/features/taskSlice";
import { useState } from "react";

export default function Navbar() {
  const TaskData = useSelector((state) => state.Tasks);
  const dispatch = useDispatch();

  const [flag, setFlag] = useState(false);
  const [originalData, setOriginalData] = useState([]);
  function handleSorting() {
    try {
      if(!flag){
        setOriginalData(TaskData.allTasks)
        const sortedData = TaskData.allTasks.toSorted(
            (a, b) => a.priority - b.priority
          );
          dispatch(setTasks(sortedData));
          setFlag(true)
      }else{
          dispatch(setTasks(originalData));
          setFlag(false)
      }
    } catch (error) {
      console.log("Error ::", error);
    }
  }
  return (
    <nav className="bg-white text-white rounded p-3 grid sm:grid-cols-3">
      <div className="col-span-2"></div>
      <div className="col-span-1 flex justify-end sm:px-3 gap-2">
        <button
          className="px-3 py-1 rounded text-md font-semibold bg-blue-500 shadow-md text-white hover:text-white hover:bg-blue-400 duration-300 transition-all"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          + Create Task
        </button>
        <button
          onClick={handleSorting}
          className="px-3 py-1 rounded text-md font-semibold bg-blue-500 shadow-md text-white hover:text-white hover:bg-blue-400 duration-300 transition-all"
        >
          {flag ? "Remove Sort" : "Sort by Priority"}
        </button>
      </div>
      <MyModal title={"Add Task"} editData={null} />
    </nav>
  );
}
