import React, {useContext, useRef, useEffect} from 'react'
import TimeContext from '../../context/time/timeContext'

const TimeFilter = () => {
    const timeContext = useContext(TimeContext); 
    const text = useRef('');

    const { filterTimes, clearFilter, filtered } = timeContext

    useEffect(() => {
        if(filtered === null) {
            text.current.value = '';
        }
    })

    const onChange = e => {
        if(text.current.value !==''){
            filterTimes(e.target.value)
        }else{
            clearFilter();
        }
    }
    return (
        <div>
            <form>
                <input ref={text} type="text" placeholder="Search by Client or Employee..." onChange={onChange}/>
            </form>
        </div>
    )
}

export default TimeFilter
