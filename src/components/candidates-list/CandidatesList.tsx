import * as React from 'react'
import {
  StyledCandidatesList,
  StyledCandidatesListItem,
  StyledCandidatesCount,
} from './CandidatesList.css'
import { Candidate as ICandidate } from '../../redux/schema/candidates'
import Candidate from '../candidate/Candidate'
import { calculateScore } from '../../utils/helper'

interface CandidatesListProps {
  items: ICandidate[]
}

const getTitle = (itemsLength: number) => {
  if (!itemsLength) {
    return 'No applications submitted.'
  }

  if (itemsLength === 1) {
    return '1 application submitted'
  }

  return `${itemsLength} applications submitted`
}

const CandidatesList: React.FC<CandidatesListProps> = ({ items }) => {
  return (
    <>
      <StyledCandidatesCount data-testid="candidates-count">
        {getTitle(items.length)}
      </StyledCandidatesCount>
      <StyledCandidatesList>
        {items.map((item) => (
          <StyledCandidatesListItem key={item.id}>
            <Candidate item={item} score={calculateScore(item)} />
          </StyledCandidatesListItem>
        ))}
      </StyledCandidatesList>
    </>
  )
}

export default CandidatesList
