import React from 'react'
import PropTypes from 'prop-types'
import Spinner from "../svg/spinner";
import {useStatus} from "../../lib/status";
import {LOADER_HTTP} from "../../lib/status/constants";

const PageHeader = ({title, subtitle}) => {

    const {code} = useStatus()

    return <div className="relative w-full px-4 py-2 bg-primary rounded-lg text-ink-inverted mb-4">
        <div className=" text-3xl font-bold">{title.toUpperCase()}</div>
        <div>{subtitle}</div>
        {code === LOADER_HTTP && <Spinner size="lg" className="absolute top-0 right-0 mr-4 mt-4"/>}
    </div>
}

PageHeader.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default PageHeader