import React from 'react'

import Search from './../svg/search'
import {DebounceInput} from "react-debounce-input";
import Spinner from "../svg/spinner";

const SearchInput = ({isLoading, inputProps}) => {
    return(
    <div>
        <DebounceInput type='text' {...inputProps} debounceTimeout={500}/>
        {isLoading ? <Spinner className=' icon'/> : <Search className='icon'/>}
    </div>
    )
}
export default SearchInput