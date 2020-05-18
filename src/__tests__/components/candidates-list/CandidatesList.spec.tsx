import * as React from 'react'
import { render } from '../../../utils/tests'
import CandidatesList from '../../../components/candidates-list/CandidatesList'

const fixtures = [
  {
    id: 1,
    firstName: 'Marla',
    lastName: 'Jazz',
    email: '',
    status: 'submitted',
    phone: '',
    avatar: '',
    appliedAt: '2020-05-14',
  },
  {
    id: 2,
    firstName: 'Normann',
    lastName: 'Herre',
    email: 'norman.herre@email.com',
    status: 'hired',
    phone: '00491413133',
    avatar: 'https://randomuser.me/api/portraits/women/13.jpg',
    appliedAt: '2020-05-14',
  },
]

describe('<CandidatesList>', () => {
  const List = ({ items = fixtures }) => <CandidatesList items={items} />

  it('renders candidates count', () => {
    const { getByTestId } = render(<List />)

    const candidatesCount = getByTestId('candidates-count')
    expect(candidatesCount).toHaveTextContent('2 applications submitted')
  })

  it('renders first user name', () => {
    const { getByText } = render(<List />)

    const marlaJazz = getByText('Marla Jazz')
    expect(marlaJazz).toBeInTheDocument()
  })

  it('renders avatar image', () => {
    const { getAllByTestId } = render(<List />)

    expect(getAllByTestId('avatar').length).toBe(1)
  })

  it('renders score', () => {
    const { getByTestId } = render(<List items={[fixtures[0]]} />)
    expect(getByTestId('score')).toHaveTextContent('Incomplete')
  })
})
