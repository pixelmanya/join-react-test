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
  status: CandidateStatus
  avatar: string
  appliedAt: string
  email: string
}
