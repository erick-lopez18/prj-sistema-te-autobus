import React from 'react';

const Student = ({ fullName, instituteName, studentNumber, activeSemester, instituteAddress, credentialPhoto }) => {
  return (
    <div className="student-card">
      <div className="student-photo">
        <img src="${require('{credentialPhoto}')" alt="Credencial del estudiante" />
      </div>
      <div className="student-details">
        <h2>{fullName}</h2>
        <p><strong>Instituto:</strong> {instituteName}</p>
        <p><strong>Número de control:</strong> {studentNumber}</p>
        <p><strong>Período de semestre activo:</strong> {activeSemester}</p>
        <p><strong>Dirección del instituto:</strong> {instituteAddress}</p>
      </div>
    </div>
  );
};

export default Student;