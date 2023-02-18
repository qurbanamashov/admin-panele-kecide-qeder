import React, { useContext, useState,  } from 'react'
import "./HomeSearch.scss"
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns"
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../../Context/SearchContext';
function HomeSearch() {

    // Serch click funcition and date start
    const [openDate, setOpenDate] = useState(false)
    const [destenition, setDestenition] = useState("")
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [option, setOption] = useState({
        adults: 1,
        children: 0,
        room: 1
    })
    const [openOption, setOpenOption] = useState(false)
    const handleOptions = (name, operation) => {
        setOption((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? option[name] + 1 : option[name] - 1,
            }
        })
    }
    // Serch click funcition and date end
    const {dispatch} = useContext(SearchContext)
    // Naviqation start
    const navigation = useNavigate()
    const hendleSearch = () => {
        dispatch({type:"NEW_SEARCH", payload:{destenition,date, option}})
        navigation("/list", { state: { destenition, date, option } })
    }
    // naviqation end 
    return (
        <section className='section_search_data'>
            <div className='search_data_width'>
                <div className='searchItem'>
                    <i className="fa-solid fa-bed"></i>
                    <input type={"text"} onChange={e=> setDestenition(e.target.value)} placeholder="Where are you going" />
                </div>

                <div className='searchItem'>
                    <i className="fa-solid fa-calendar-days"></i>
                    <span onClick={() => setOpenDate(!openDate)} className='searchItemCalendar'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`} </span>
                    {openDate && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        minDate = {new Date()}
                        className="date"
                    />}
                </div>
                <div className='searchItem'>
                    <i className="fa-solid fa-person"></i>
                    <span className='searchItemCalendar' onClick={() => setOpenOption(!openOption)}>{`${option.adults} adult • ${option.children} children • ${option.room} room`}</span>
                    {
                        openOption &&

                        <div className='options' >
                            <div className='openOption'>
                                <span className='openOption_text'>adults</span>
                                <div className='openOption_flex'>
                                    <button disabled={option.adults <= 1} className='openOption_btn' onClick={() => handleOptions("adults", "d")}>-</button>
                                    <span className='openOptionNumber'>{option.adults}</span>
                                    <button className='openOption_btn' onClick={() => handleOptions("adults", "i")}>+</button>
                                </div>
                            </div>
                            <div className='openOption'>
                                <span className='openOption_text'>children</span>
                                <div className='openOption_flex'>
                                    <button disabled={option.children <= 0} className='openOption_btn' onClick={() => handleOptions("children", "d")}>-</button>
                                    <span className='openOptionNumber'>{option.children}</span>
                                    <button className='openOption_btn' onClick={() => handleOptions("children", "i")}>+</button>
                                </div>
                            </div>
                            <div className='openOption'>
                                <span className='openOption_text'>room</span>
                                <div className='openOption_flex'>
                                    <button disabled={option.room <= 1} className='openOption_btn' onClick={() => handleOptions("room", "d")}>-</button>
                                    <span className='openOptionNumber'>{option.room}</span>
                                    <button className='openOption_btn' onClick={() => handleOptions("room", "i")}>+</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div className='searchItem'>
                    <button onClick={hendleSearch}>Search</button>
                </div>
            </div>
        </section>
    )
}

export default HomeSearch