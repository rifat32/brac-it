import React from 'react'
import CopyRightsSection from '../components/TermsAndConditionPageComponents/CopyRightsSection'
import LegalNoticeSection from '../components/TermsAndConditionPageComponents/LegalNoticeSection'
import PrivacySection from '../components/TermsAndConditionPageComponents/PrivacySection'
import TermsAndConditionsSection from '../components/TermsAndConditionPageComponents/TermsAndConditionsSection'

const TermsConditions = () => {
    return (
        <main id="main" className="inner-page">
         <LegalNoticeSection/>   
         <TermsAndConditionsSection/>
         <CopyRightsSection/>
         <PrivacySection/>
        </main>
    )
}

export default TermsConditions
