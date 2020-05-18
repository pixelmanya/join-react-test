import * as React from 'react'
import { useForm } from 'react-hook-form'
import {
  StyledApplyForm,
  StyledApplyTitle,
  StyledApplyFormRow,
  StyledApplyFormLabel,
  StyledApplyFormField,
  StyledApplyFormSubmit,
} from './Apply.css'
import { useFirestore } from 'react-redux-firebase'
import { Candidate, CandidateStatus } from '../../redux/schema/candidates'

const fieldsSchema = [
  {
    name: 'email',
    type: 'email',
    label: 'Your email',
    placeholder: 'john.doe@join.com',
  },
  {
    name: 'password',
    label: 'Set a password',
    type: 'password',
  },
  {
    name: 'firstName',
    label: 'First name',
    placeholder: 'John',
  },
  {
    name: 'lastName',
    label: 'Last name',
    placeholder: 'Doe',
  },
  {
    name: 'phone',
    label: 'Phone',
    type: 'tel',
  },
]

const Apply: React.FC = () => {
  const firestore = useFirestore()
  const { register, handleSubmit, reset } = useForm()

  const handleApply = (candidate: Partial<Candidate>) => {
    firestore.collection('candidates').add({
      ...candidate,
      appliedAt: new Date().toDateString(),
      status: CandidateStatus.SUBMITTED,
      avatar: 'https://picsum.photos/60',
    })
    reset()
  }

  return (
    <StyledApplyForm onSubmit={handleSubmit(handleApply)}>
      <StyledApplyTitle>Interested in this job?</StyledApplyTitle>
      {fieldsSchema.map((field) => (
        <StyledApplyFormRow key={field.name}>
          <StyledApplyFormLabel htmlFor={field.name}>
            {field.label}
          </StyledApplyFormLabel>
          <StyledApplyFormField
            ref={register}
            type={field.type ?? 'text'}
            name={field.name}
            id={field.name}
            placeholder={field.placeholder ?? undefined}
          />
        </StyledApplyFormRow>
      ))}
      <StyledApplyFormSubmit>Apply now for this job</StyledApplyFormSubmit>
    </StyledApplyForm>
  )
}

export default Apply
