import styled from 'styled-components'

export const StyledCandidatesCount = styled.p`
  font-size: 1rem;
  color: rgb(143, 156, 178);
  margin: 2rem 1rem 0;
`

export const StyledCandidatesList = styled.ul`
  list-style: none;
  padding: 1rem 0;
  margin: 0;
`

export const StyledCandidatesListItem = styled.li`
  display: block;
  padding: 1.2rem 1rem;
  margin: 1rem 0 0 0;
  box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  &:first-child {
    margin-top: 0;
  }
`
