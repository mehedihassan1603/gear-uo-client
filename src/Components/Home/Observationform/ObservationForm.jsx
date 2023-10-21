import React, { useState } from "react";
import Swal from "sweetalert2";

const ObservationForm = () => {
  const [observation, setObservation] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleObservationSubmit = (e) => {
    e.preventDefault();
    if (observation.trim() === "") {
      Swal.fire("Error", "Observation field cannot be empty.", "error");
    } else {
      // You can submit the observation to your backend or perform other actions here.

      // Show a success message with SweetAlert
      Swal.fire("Success", "Observation submitted successfully!", "success");

      // Reset the input field and disable the button
      setObservation("");
      setIsButtonDisabled(true);
    }
  };

  const handleObservationChange = (e) => {
    const newValue = e.target.value;
    setObservation(newValue);

    // Enable the button if there's something written in the textarea
    setIsButtonDisabled(newValue.trim() === "");
  };

  return (
    <div className="mt-10 w-5/6 mx-auto">
      <h2 className="text-3xl text-center text-white bg-slate-800 font-semibold">Share Your Observation with Us:</h2>
      <form onSubmit={handleObservationSubmit} className="">
        <div className="mb-4">
          
          <textarea
            id="observation"
            name="observation"
            rows="8"
            className="w-full px-4 py-2 border rounded-b-lg"
            value={observation}
            onChange={handleObservationChange}
            placeholder="Write Something Here..."
          ></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className={`bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 ${isButtonDisabled ? 'cursor-not-allowed opacity-50' : ''}`} disabled={isButtonDisabled}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ObservationForm;
