import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { apiBaseUrl } from "../constants";
import { Patient } from "../types";

import { Typography } from "@material-ui/core";
import MaleIcon from '@mui/icons-material/Male';

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
      <Typography >
        {patient?.name} 
        <MaleIcon />
      </Typography>
    </div>
  );
};

export default PatientFullInfo;