import { combineReducers } from 'redux'
import { firebaseReducer, FirebaseReducer } from 'react-redux-firebase'
import { Candidate } from './schema/candidates'
import { firestoreReducer } from 'redux-firestore'

export interface Schema {
  candidates: Candidate[]
}

export interface RootState {
  firebase: FirebaseReducer.Reducer<Schema>
  firestore: any
}

const rootReducer = combineReducers<RootState>({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
})

export default rootReducer
