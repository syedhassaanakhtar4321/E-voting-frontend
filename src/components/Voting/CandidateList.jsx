import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CandidateList = ({ house }) => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const res = await axios.get(${import.meta.env.VITE_API_URL}/candidates?house=${house});
        setCandidates(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCandidates();
  }, [house]);

  return (
    <div>
      <h2>Candidates</h2>
      <ul>
        {candidates.map(candidate => (
          <li key={candidate._id}>{candidate.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CandidateList;