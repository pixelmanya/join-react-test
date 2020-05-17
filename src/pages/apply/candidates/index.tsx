import * as React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/rootReducer'
import { useFirestoreConnect } from 'react-redux-firebase'

const Candidates: React.FC = () => {
  useFirestoreConnect('candidates')
  const data = useSelector<RootState>((state) => state.firestore)
  return <>{console.log(data)}</>
}

export default Candidates
