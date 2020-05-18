import styled from 'styled-components'

export const StyledApplyForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem 0;
  max-width: 600px;
  margin: 0 auto;
`

export const StyledApplyFormRow = styled.div``

export const StyledApplyFormLabel = styled.label`
  display: block;
  color: #80838f;
  font-size: 0.875rem;
`

export const StyledApplyFormField = styled.input`
  display: block;
  width: 100%;
  border: 1px solid #c2c7d4;
  border-radius: 3px;
  padding: 0 12px;
  height: 40px;
  line-height: 40px;
`

export const StyledApplyFormSubmit = styled.button`
  appearance: none;
  border-radius: 3px;
  height: 50px;
  padding: 0 12px;
  margin-top: 1rem;
  line-height: 50px;
  background: #1f71ff;
  color: white;
  border: 1px solid #3468b5;
  cursor: pointer;
`
