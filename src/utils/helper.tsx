import { Candidate } from '../redux/schema/candidates'

export enum ReadableScore {
  INCOMPLETE = 'Incomplete',
  OKAY = 'Okay',
  GOOD = 'Good',
}

export const getReadableScore = (score: number) => {
  if (score <= 50) {
    return ReadableScore.INCOMPLETE
  }

  if (score < 70) {
    return ReadableScore.OKAY
  }

  return ReadableScore.GOOD
}

export const getFormattedDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString()

export const calculateScore = (candidate: Candidate) => {
  interface Points {
    [key: string]: number
  }
  const points: Points = {
    firstName: 5,
    lastName: 5,
    email: 10,
    password: 10,
    phone: 20,
    avatar: candidate.avatar ? 50 : 0,
  }
  const factor = !candidate.avatar ? 2 : 1

  let score = 0
  Object.keys(candidate).forEach((property: string) => {
    if (candidate[property as keyof Candidate]) {
      score += (points[property] || 0) * factor
    }
  })

  return score
}
