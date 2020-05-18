import * as React from 'react'
import { Candidate as ICandidate } from '../../redux/schema/candidates'
import {
  StyledCandidate,
  StyledCandidateAvatar,
  StyledCandidateInfo,
  StyledCandidateName,
  StyledCandidateEmail,
  StyledCandidateStatus,
  StyledCandidateAppliedAt,
  StyledProgress,
  StyledToggleStatus,
} from './Candidate.css'
import ToggleStatus from './CandidateToggleStatus'

interface CandidateProps {
  item: ICandidate
  score: number
}

export enum ReadableScore {
  INCOMPLETE = 'Incomplete',
  OKAY = 'Okay',
  GOOD = 'Good',
}

const getReadableScore = (score: number) => {
  if (score <= 50) {
    return ReadableScore.INCOMPLETE
  }

  if (score < 70) {
    return ReadableScore.OKAY
  }

  return ReadableScore.GOOD
}

const Candidate: React.FC<CandidateProps> = ({ item, score }) => {
  const { status, firstName, lastName, email, appliedAt, avatar } = item
  const readableScore = getReadableScore(score)

  return (
    <StyledCandidate>
      {avatar && <StyledCandidateAvatar src={avatar} />}
      <StyledCandidateInfo>
        {(firstName || lastName) && (
          <StyledCandidateName>
            {firstName.length && firstName + ' '}
            {lastName}
          </StyledCandidateName>
        )}
        {email && <StyledCandidateEmail>{email}</StyledCandidateEmail>}
        <StyledCandidateStatus status={status}>{status}</StyledCandidateStatus>
        <StyledCandidateAppliedAt>
          Applied at <span>{new Date(appliedAt).toLocaleDateString()}</span>
        </StyledCandidateAppliedAt>
      </StyledCandidateInfo>
      <StyledProgress score={readableScore}>{readableScore}</StyledProgress>
      <StyledToggleStatus>
        <ToggleStatus item={item} />
      </StyledToggleStatus>
    </StyledCandidate>
  )
}

export default Candidate
