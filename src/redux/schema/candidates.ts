export enum CandidateStatus {
  SUBMITTED = 'submitted',
  IN_REVIEW = 'in review',
  NO_FIT = 'not a fit',
}
export interface Candidate {
  id: string
  firstName: string
  lastName: string
  phone: string
  status:
    | CandidateStatus.SUBMITTED
    | CandidateStatus.IN_REVIEW
    | CandidateStatus.NO_FIT
  avatar: string
  appliedAt: string
  email: string
}
