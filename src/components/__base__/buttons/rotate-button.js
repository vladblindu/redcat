import React from 'react'
import PropTypes from 'prop-types'
import Rotate from '../../svg/rotate'

const RotateButton = ({action, left}) =>
    <button
        onClick={action}
        className="bg-primary text-ink-inverted p-2 rounded"
        type="button">
        <Rotate size="md" left={left}/>
    </button>

RotateButton.propTypes = {
    action: PropTypes.func.isRequired,
    left: PropTypes.bool
}
export default RotateButton