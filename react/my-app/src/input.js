import React, { useState } from 'react';


const Input = ({sekil}) => {


    const [data, setData] = useState("");

    const gonder = (e) => {
        e.preventDefault()
        sekil(data)
        
    }
    return (
        <div>
            <form onSubmit={gonder} className='d-flex' action="">
                <input type="text" onInput={(e) => { setData(e.target.value) }} className='form-control'></input>
                <button className='btn btn-success'>add</button>
            </form>
        </div>
    )
}
export default Input