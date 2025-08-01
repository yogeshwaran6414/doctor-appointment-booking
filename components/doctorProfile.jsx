import React from "react";
import { useParams } from "react-router-dom";
import doctors from "./doctorData"
import BookingForm from "./bookingForm";

const DoctorProfile = () => {
  const { id } = useParams();
  const doctor = doctors.find((d) => d.id === parseInt(id));

  if (!doctor) return <div>Doctor not found.</div>;

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="flex flex-col items-center text-center">
        <img src={doctor.image} alt={doctor.name} className="w-32 h-32 rounded-full mb-4" />
        <h2 className="text-xl font-bold">{doctor.name}</h2>
        <p className="italic">{doctor.specialization}</p>
        <p className="my-2">{doctor.bio}</p>
        <BookingForm doctor={doctor} />
      </div>
    </div>
  );
};

export default DoctorProfile;