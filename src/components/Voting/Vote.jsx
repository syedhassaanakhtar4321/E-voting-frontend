import React, { useState } from 'react';
import axios from 'axios';

const Vote = ({ candidateId }) => {
  const [voteStatus, setVoteStatus] = useState('');

  const handleVote = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(${import.meta.env.VITE_API_URL}/vote/cast, { candidateId }, {
        headers: {
          'x-auth-token': token,
        },
      });
      setVoteStatus('Vote successfully cast!');
    } catch (err) {
      console.error(err);
      setVoteStatus('Failed to cast vote');
    }
  };

  return (
    <div>
      <button onClick={handleVote}>Vote</button>
      {voteStatus && <p>{voteStatus}</p>}
    </div>
  );
};

export default Vote;