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
import { getReadableScore, getFormattedDate } from '../../utils/helper'

const Candidate: React.FC<{ item: ICandidate; score: number }> = ({
  item,
  score,
}) => {
  const { status, firstName, lastName, email, appliedAt, avatar } = item
  const readableScore = getReadableScore(score)

  return (
    <StyledCandidate>
      {avatar && <StyledCandidateAvatar src={avatar} data-testid="avatar" />}
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
          Applied at <span>{getFormattedDate(appliedAt)}</span>
        </StyledCandidateAppliedAt>
      </StyledCandidateInfo>
      <StyledProgress score={readableScore} data-testid="score">
        {readableScore}
      </StyledProgress>
      <StyledToggleStatus>
        <ToggleStatus item={item} />
      </StyledToggleStatus>
    </StyledCandidate>
  )
}

export default Candidate
