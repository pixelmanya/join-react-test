export enum CandidateStatus {
  SUBMITTED = 'submitted',
  IN_REVIEW = 'in review',
  NO_FIT = 'not a fit',
  HIRED = 'hired',
}
export interface Candidate {
  id: string
  firstName: string
  lastName: string
  phone: string
  password: string
  status:
    | CandidateStatus.SUBMITTED
    | CandidateStatus.IN_REVIEW
    | CandidateStatus.NO_FIT
  avatar: string
  appliedAt: string
  email: string
}
