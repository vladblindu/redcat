import * as PropTypes from 'prop-types'
import React from 'react'

const ErrorBody = ({message,solve})=>
    <div>
        {message && <p>{message}</p>}
        <p>{solve}</p>
    </div>


ErrorBody.propTypes = {
    message: PropTypes.string,
    solve: PropTypes.string
}

export default ErrorBody