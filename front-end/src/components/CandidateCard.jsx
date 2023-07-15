import React from 'react';

const CandidateCard = ({ fullName, professionalSummary, location, phoneNumber, linkedinProfile, githubProfile, profileImage }) => {
  return (
    <div className="flex flex-row bg-white rounded-lg shadow-md p-6 mb-4 gap-4">
      <div className="flex items-center">
        <img src={profileImage} alt={fullName} className="w-24 h-24 rounded-full border-2 border-gray-200 mr-2 object-cover" />
      </div>
      <div className="flex flex-col w-full gap-2">
        <h3 className="text-xl font-bold text-gray-800">{fullName}</h3>
        <p className="text-gray-600 text-sm mb-4">{professionalSummary}</p>
        <div className="flex items-center justify-between">
          <p className="text-blue-500 text-xs">{location}</p>
          <p className="text-gray-600 text-xs">Phone: {phoneNumber}</p>
        </div>
        <div className="flex items-center justify-between ">
          <p className="text-gray-600 text-xs">LinkedIn: <a href={linkedinProfile} className="text-blue-500">{linkedinProfile}</a></p>
          <p className="text-gray-600 text-xs">GitHub: <a href={githubProfile} className="text-blue-500">{githubProfile}</a></p>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;
