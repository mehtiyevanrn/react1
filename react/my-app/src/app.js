import React, { useState,useEffect } from 'react'
import Input from './input'
import Sekil from './sekil'
import axios from 'axios'


const App = () => {

    const [unssekil, setSekil] = useState('https://penmadsidrap.com/uploads/blog_image/default.jpg');
    const [placdata, setplacdata] = useState("")
    useEffect( ()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(({ data }) => {
            setplacdata(data)
        })
    })

    const sekilGetir = (inpData) => {
        setSekil("https://i.gifer.com/7plQ.gif")
        axios.get(`https://source.unsplash.com/random/900×700/?${inpData}`)
            .then(({ request }) => {
                setSekil(request.responseURL)
            })
    }

    // const Getir = (inpData) => {

      
    // }



    return (
        <div>
            <div className='container'>
                <div className='row pt-5'>
                    <div className='col-6 offset-3'>
                        <Input sekil={sekilGetir}></Input>
                        <hr></hr>
                        <Sekil randomImage={unssekil}></Sekil>
                        <hr></hr>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">first</th>
                                    <th scope="col">last</th>
                                    <th scope="col">handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    placdata &&
                                    placdata.map(item => {
                                        return (
                                            <tr key={item.id}>
                                                <th scope="col">1</th>
                                                <th scope="col">{item.id}</th>
                                                <th scope="col">{item.body}</th>
                                                <th scope="col">{item.title}</th>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                            <tfoot>

                            </tfoot>
                        </table>
                        {/* <button className='btn btn-success' onClick={Getir}>getir</button> */}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default App