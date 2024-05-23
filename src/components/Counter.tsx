"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  increment,
  decrement,
  incrementByAmount,
} from "@/store/slices/counterSlice";
import React from "react";

const Counter: React.FC = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);

  return (
    <div className="text-center">
      <h1 className="text-2xl mb-4">Counter: {count}</h1>
      <div className="space-x-2">
        <button
          onClick={() => dispatch(increment())}
          className="bg-blue-500 text-white py-1 px-4 rounded"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 text-white py-1 px-4 rounded"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="bg-green-500 text-white py-1 px-4 rounded"
        >
          Increment by 5
        </button>
      </div>
    </div>
  );
};

export default Counter;
