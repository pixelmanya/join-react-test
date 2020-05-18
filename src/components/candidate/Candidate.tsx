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
} from './Candidate.css'

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
  if (score < 30) {
    return ReadableScore.INCOMPLETE
  }

  if (score < 60) {
    return ReadableScore.OKAY
  }

  return ReadableScore.GOOD
}

const Candidate: React.FC<CandidateProps> = ({
  item: { status, firstName, lastName, email, appliedAt, avatar },
  score,
}) => {
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
    </StyledCandidate>
  )
}

export default Candidate
