import 'firebase/firestore'
import 'firebase/database'
import firebase from 'firebase/app'
import { createFirestoreInstance } from 'redux-firestore'
import { Store } from './store'

const rrfConfig = {
  userProfile: 'users',
}

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
})

firebase.firestore()

export default function initializeFirestore(store: Store) {
  return {
    rrfProps: {
      firebase,
      config: rrfConfig,
      dispatch: store.dispatch,
      createFirestoreInstance,
    },
  }
}
