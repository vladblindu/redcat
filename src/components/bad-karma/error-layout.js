
import LegacyPage from '../layout/legacy-page'
import JumboHeader from '../layout/jumbo-header'
import ErrorBody from './error-body'
import * as PropTypes from 'prop-types'
import React from 'react'

const ErrorLayout = ({eno, oops}) => {
    return <LegacyPage>
        <JumboHeader title={(`e${eno}`)} subtitle={(`e${eno}`+'subtitle')}/>
        <ErrorBody message={oops && 'oops'} solve={(`e${eno}`+'solve')}/>
    </LegacyPage>
}

ErrorLayout.propTypes = {
    eno: PropTypes.string,
    oops: PropTypes.bool
}

export default ErrorLayout
