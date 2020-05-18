import * as React from 'react'
import {
  StyledCandidatesList,
  StyledCandidatesListItem,
  StyledCandidatesCount,
} from './CandidatesList.css'
import { Candidate as ICandidate } from '../../redux/schema/candidates'
import Candidate from '../candidate/Candidate'

interface CandidatesListProps {
  items: ICandidate[]
}

const calculateScore = (candidate: ICandidate) => {
  interface Points {
    [key: string]: number
  }
  const factor = !candidate.avatar ? 2 : 1
  const points = {
    firstName: 5,
    lastName: 5,
    email: 10,
    password: 10,
    phone: 20,
    avatar: candidate.avatar ? 50 : 0,
  } as Points

  let score = 0

  Object.keys(candidate).map(
    (property) => (score += points[property] || 0) * factor
  )

  return score
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
