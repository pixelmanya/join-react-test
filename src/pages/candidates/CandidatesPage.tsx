import * as React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/rootReducer'
import { useFirestoreConnect } from 'react-redux-firebase'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Candidate as ICandidate } from '../../redux/schema/candidates'
import CandidatesList from '../../components/candidates-list/CandidatesList'
import { StyledProgressContainer } from './CandidatesPage.css'

const PageCandidates: React.FC = () => {
  useFirestoreConnect('candidates')
  const candidates = useSelector<RootState, ICandidate[]>(
    (state: RootState) => state.firestore.ordered.candidates
  )
  const isRequested = useSelector<RootState, boolean>(
    (state: RootState) => state.firestore.status.requested.candidates
  )

  if (isRequested) {
    return <CandidatesList items={candidates} />
  }

  return (
    <StyledProgressContainer>
      <CircularProgress />
    </StyledProgressContainer>
  )
}

export default PageCandidates
