import * as React from 'react'
import {
  StyledCandidatesList,
  StyledCandidatesListItem,
} from './CandidatesList.css'
import { Candidate as ICandidate } from '../../redux/schema/candidates'
import Candidate from '../candidate/Candidate'

interface CandidatesListProps {
  items: ICandidate[]
}

const CandidatesList: React.FC<CandidatesListProps> = ({ items }) => {
  return (
    <StyledCandidatesList>
      {items.map((item) => (
        <StyledCandidatesListItem key={item.id}>
          <Candidate item={item} />
        </StyledCandidatesListItem>
      ))}
    </StyledCandidatesList>
  )
}

export default CandidatesList
