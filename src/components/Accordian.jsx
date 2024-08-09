import React, { useEffect, useState } from 'react'
import Data from './data.js'

function Accordian() {
    const [selected,setselected] = useState(null)
    const [enablemultiselection,setenablemultiselection] = useState(false)
    const [multiple, setmultiple] = useState([])

    const handleSingleSelection = (id) => {
        setselected(id === selected ? null : id )
        console.log(id)
    }
    const handleMultiSelection = (id) => {
        let copymultiple = [...multiple]
        let indexofid = copymultiple.indexOf(id)
        if(indexofid == -1) copymultiple.push(id)
            else copymultiple.splice(indexofid, 1)
        setmultiple(copymultiple)
        console.log(copymultiple, multiple)
    }
    return (  
        <>
        <h1 className='text-4xl text-center font-bold underline mt-5 text-slate-50'>Accordian</h1>
        <div className='w-2/4 h-72 mt-7 text-center mx-auto'>
        <button className='text-2xl bg-blue-500 text-white rounded-xl p-2 hover:bg-blue-800' onClick={() => setenablemultiselection(!enablemultiselection)}>Enable Multi Selection</button>
            {
                Data && Data.length > 0 ? 
                Data.map(dataitem => <div className='bg-slate-300'>
                    <div className='flex justify-center mt-5 cursor-pointer'>
                    <div onClick={enablemultiselection 
                        ? () =>  handleMultiSelection(dataitem.id)
                        : () => handleSingleSelection(dataitem.id)} 
                        className='w-full text-2xl mt-3 flex justify-between mx-20'>
                        <h3 className=''>{dataitem.question}</h3>
                        <span>+</span>
                    </div>
                    </div>
                    {enablemultiselection ?
                        multiple.indexOf(dataitem.id) !== -1 && (
                        <div className='text-xl mt-3 px-8 bg-slate-700 text-wrap text-left'>{dataitem.answer}</div>)
                        : selected == dataitem.id && (
                            <div className='text-xl mt-3 px-20 bg-slate-600 text-white text-wrap text-left'>{dataitem.answer}</div>)
                    }
                    {/* {
                        selected == dataitem.id ?
                        <div className='text-xl mt-3 bg-sky-100'>{dataitem.answer}</div>
                        : null
                    } */}
                </div>)
                : <div>No Data Found</div> 
            }
        </div>
        </>
    );
}

export default Accordian;