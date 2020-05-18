import styled, { css } from 'styled-components'
import { CandidateStatus } from '../../redux/schema/candidates'
import { ReadableScore } from './Candidate'

enum avatarSizes {
  SMALL = '40px',
  MEDIUM = '50px',
  LARGE = '60px',
}

export const StyledCandidate = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: ${avatarSizes.MEDIUM} 3fr 1fr;

  @media screen and (min-width: 650px) {
    grid-template-columns: ${avatarSizes.LARGE} 3fr 1fr;
  }
`

export const StyledCandidateInfo = styled.article`
  padding: 0 1rem;
`

export const StyledCandidateAvatar = styled.img`
  width: ${avatarSizes.MEDIUM};
  height: ${avatarSizes.MEDIUM};
  background: #eee;
  border-radius: 100%;

  @media screen and (min-width: 650px) {
    width: ${avatarSizes.LARGE};
    height: ${avatarSizes.LARGE};
  }
`

export const StyledCandidateName = styled.h3`
  margin: 0;
  font-size: 1rem;
  color: rgb(48, 52, 70);
`

export const StyledCandidateEmail = styled.span`
  display: block;
  font-size: 1rem;
  color: #8692ad;
  margin: 0 0 1.5rem;
  font-weight: bold;
`
interface StyledCandidateStatusProps {
  status:
    | CandidateStatus.SUBMITTED
    | CandidateStatus.IN_REVIEW
    | CandidateStatus.NO_FIT
    | CandidateStatus.HIRED
}

export const StyledCandidateStatus = styled.span(
  (props: StyledCandidateStatusProps) => css`
  display: inline-block;
  text-transform: uppercase;
  padding: 0.2rem 0.5rem;
  margin: 0 0 1rem;
  font-size: .75rem;
  font-weight: bold;
  border-radius: 3px;

  ${
    props.status === CandidateStatus.SUBMITTED &&
    css`
      background: #f0f1f5;
      color: #707b98;
    `
  }
  ${
    props.status === CandidateStatus.IN_REVIEW &&
    css`
      background: #e0efff;
      color: #2b79fe;
    `
  }
  ${
    props.status === CandidateStatus.NO_FIT &&
    css`
      background: #fde7e8;
      color: #f63c48;
    `
  }
  ${
    props.status === CandidateStatus.HIRED &&
    css`
      background: #d3facd;
      color: #2f8f1d;
    `
  }
`
)

export const StyledCandidateAppliedAt = styled.span`
  display: block;
  font-size: 0.8125rem;
  color: rgba(0, 0, 0, 0.5);

  span {
    font-size: 1rem;
    font-weight: bold;
  }
`

interface StyledProgressProps {
  score: ReadableScore
}

export const StyledProgress = styled.strong<StyledProgressProps>(
  ({ score }) => css`
    text-align: right;
    text-transform: uppercase;
    font-size: .9125rem;
    letter-spacing: 1px;

    ${
      score === ReadableScore.OKAY &&
      css`
        color: #ea8647;
      `
    }

    ${
      score === ReadableScore.GOOD &&
      css`
        color: #2172fd;
      `
    }

    ${
      score === ReadableScore.INCOMPLETE &&
      css`
        color: #f54852;
      `
    }
  `
)

export const StyledToggleStatus = styled.div`
  position: absolute;
  bottom: -0.5rem;
  right: -1rem;
`
