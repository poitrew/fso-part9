import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { apiBaseUrl } from "../constants";
import { Patient } from "../types";

import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';

const PatientFullInfo = () => {
  const [patient, setPatient] = useState<Patient>();
  const { id: patientId } = useParams();

  if (!patientId) {
    return null;
  }
  
  useEffect(() => {
    const fetchPatient = async () => {
      const { data: patientData }: { data: Patient } = await axios.get(`${apiBaseUrl}/patients/${patientId}`);
      setPatient(patientData);
    };
    void fetchPatient();
  }, []);

  return (
    <div style={{ marginTop: "1em" }}>
      <h2>{patient?.name} {patient?.gender === 'male' ? <MaleIcon /> : <FemaleIcon />}</h2>
      <p>
        ssn: {patient?.ssn}
        <br />
        occupation: {patient?.occupation}
      </p>
    </div>
  );
};

export default PatientFullInfo;