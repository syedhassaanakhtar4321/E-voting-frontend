import React from 'react';
import CandidateList from '../components/Voting/CandidateList';
import Vote from '../components/Voting/Vote';

const VotingPage = () => {
  // Replace with actual house and candidateId from context or API
  const house = 'Gryffindor';
  const candidateId = '123';

  return (
    <div>
      <CandidateList house={house} />
      <Vote candidateId={candidateId} />
    </div>
  );
};

export default VotingPage;