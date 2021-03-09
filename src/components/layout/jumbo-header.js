import * as PropTypes from 'prop-types'
import React from 'react'

const JumboHeader = ({title, subtitle}) =>
    <div>
        <h1 className="text-4xl md:text-5xl font-black">
            {title}
        </h1>
        <h1 className="font-bold">
            {subtitle}
        </h1>
    </div>

JumboHeader.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default JumboHeader