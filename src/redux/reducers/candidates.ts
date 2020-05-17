export interface Candidate {
  id: string
  firstName: string
  lastName: string
  phone: string
  state: string
  avatar: string
  appliedAt: string
}

export interface CandidatesState {
  items: Candidate[]
}

const initialState: CandidatesState = {
  items: [],
}

export const CREATE = 'CREATE'

interface CandidateActionTypes {
  type: typeof CREATE
  payload: Candidate
}

export default function candidatesReducer(
  state = initialState,
  action: CandidateActionTypes
) {
  switch (action.type) {
    default:
      return state
  }
}
