"use client";

import { useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";

export default function () {
    const TaskData = useSelector((state) => state.Tasks);

    const [high, setHigh] = useState(0);
    const [medium, setMedium] = useState(0);
    const [low, setLow] = useState(0);
    const [totalTask, setTotalTask] = useState(0);

    const CountHighPriorityTask = useCallback(() => {
        const resp = TaskData.allTasks.filter((item) => item.priority === 1);
         setHigh(resp.length);
    }, [TaskData]);

    const CountMediumPriorityTask = useCallback(() => {
        const resp = TaskData.allTasks.filter((item) => item.priority === 2);
        setMedium(resp.length);
    }, [TaskData]);

    const CountLowPriorityTask = useCallback(() => {
        const resp = TaskData.allTasks.filter((item) => item.priority === 3);
        setLow(resp.length);
    }, [TaskData]);

    const CountTotalTask = useCallback(() => {
        const val = TaskData.allTasks.length
        setTotalTask(val);
    }, [TaskData]);

    useEffect(() => {
        CountHighPriorityTask();
        CountMediumPriorityTask();
        CountLowPriorityTask();
        CountTotalTask();
    })

    return [
        {
            id: 1,
            title: "Total Tasks",
            value: totalTask,
            color: 'blue',
        },
        {
            id: 2,
            title: "High Priority Task",
            value: high,
            color: 'red',
        },
        {
            id: 3,
            title: "Medium Priority Task",
            value: medium,
            color: 'orange',
        },
        {
            id: 4,
            title: "Low Priority Task",
            value: low,
            color: 'green',
        },
    ];
}
