import * as React from 'react'
import { Candidate as ICandidate } from '../../redux/schema/candidates'
import { StyledCandidate } from './Candidate.css'

interface CandidateProps {
  item: ICandidate
}

const Candidate: React.FC<CandidateProps> = ({
  item: { id, firstName, lastName, appliedAt },
}) => {
  return (
    <StyledCandidate>
      {firstName} {lastName}
    </StyledCandidate>
  )
}

export default Candidate
