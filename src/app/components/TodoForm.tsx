"use client";

import { useState } from "react";

interface TodoFormProps {
  addTodo: (newTodo: {
    activity: string;
    price: number;
    type: string;
    bookingRequired: boolean;
    accessibility: number;
  }) => void;
}

export default function TodoForm({ addTodo }: TodoFormProps) {
  const [activity, setActivity] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("education");
  const [bookingRequired, setBookingRequired] = useState(false);
  const [accessibility, setAccessibility] = useState(0.5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Pass the form data to the parent component through addTodo
    addTodo({
      activity,
      price,
      type,
      bookingRequired,
      accessibility,
    });
    // Reset form fields after submitting
    setActivity("");
    setPrice(0);
    setType("education");
    setBookingRequired(false);
    setAccessibility(0.5);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow-lg max-w-md mx-auto bg-white text-black">
      <h2 className="text-xl font-semibold mb-4">Add To-Do Item</h2>

      {/* Activity Input */}
      <label className="block mb-2">
        Activity:
        <input
          type="text"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          className="border p-2 w-full rounded-md text-black bg-gray-100"
        />
      </label>

      {/* Price Input */}
      <label className="block mb-2">
        Price:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="border p-2 w-full rounded-md text-black bg-gray-100"
        />
      </label>

      {/* Type Select */}
      <label className="block mb-2">
        Type:
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border p-2 w-full rounded-md text-black bg-gray-100"
        >
          {[
            "education",
            "recreational",
            "social",
            "diy",
            "charity",
            "cooking",
            "relaxation",
            "music",
            "busywork",
          ].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      {/* Booking Required Checkbox */}
      <label className="block mb-2 flex items-center">
        <input
          type="checkbox"
          checked={bookingRequired}
          onChange={(e) => setBookingRequired(e.target.checked)}
          className="mr-2"
        />
        Booking Required
      </label>

      {/* Accessibility Slider */}
      <label className="block mb-2">
        Accessibility: {accessibility}
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={accessibility}
          onChange={(e) => setAccessibility(parseFloat(e.target.value))}
          className="w-full accent-blue-500"
        />
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        className="
          mt-3 px-4 py-2 rounded-md text-white 
          bg-blue-600 hover:bg-blue-700 
          transition duration-200 ease-in-out"
      >
        Submit
      </button>
    </form>
  );
}
