import * as React from 'react'
import Apply from '../../components/apply/Apply'
import { StyledApplyPage, StyledApplyPageTitle } from './ApplyPage.css'

const ApplyPage: React.FC = () => (
  <StyledApplyPage>
    <StyledApplyPageTitle>Interested in this job?</StyledApplyPageTitle>
    <Apply />
  </StyledApplyPage>
)

export default ApplyPage
