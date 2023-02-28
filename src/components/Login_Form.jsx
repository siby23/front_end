import React, { useState } from 'react'
import Button from './Button'
import Input from './Input'
import { Loginvalidation } from '../validation/validation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_ADMIN_LOGIN } from '../api/Admin_Api';

function Login_Form() {

    const initialize = { email:"", password:"" }
    const [input, setInput] = useState(initialize)

    /* --------------------- handlingchange of input values --------------------- */
    let handlechange = (e) => {

        const { name, value } = e.target
        setInput({ ...input, [name]: value })

    }
    /* -------------- handlingsubmit of input values to the backend ------------- */
    let handlesubmit = async (e) => {
        e.preventDefault()
        try {
            let after_validation = Loginvalidation.validateSync(input)
           let {data}=await API_ADMIN_LOGIN(after_validation)
            console.log(data);
        } catch (error) {

            toast(error.message);
console.log(error);
        }
    }
    return (

        <>
            <div className=" flex mt-40">
                <div className="flex-col flex ml-auto mr-auto items-center w-full lg:w-2/3 md:w-3/5">

                    <form onSubmit={handlesubmit} className="mt-2 flex flex-col lg:w-1/2 w-8/12">
                        <ToastContainer />
                        <div className="flex flex-wrap  w-full  relative h-15 bg-white items-center rounded mb-6 pr-10">
                            <div className="flex -mr-px justify-center w-15 p-4">
                                <span
                                    className="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
                                >
                                    <i className="fas fa-user-circle"></i>
                                </span>
                            </div>

                            <Input
                                type="text"
                                className="flex-shrink flex-grow  leading-normal w-px flex-1  h-10 border-2 border-cyan-400 rounded  px-3 self-center relative  font-roboto text-xl outline-none"
                                placeholder="email"
                                name="email"
                                onChange={handlechange}
                            />
                        </div>
                        <div className="flex flex-wrap  w-full  relative h-15 bg-white items-center rounded mb-6 pr-10">
                            <div className="flex -mr-px justify-center w-15 p-4">
                                <span
                                    className="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
                                >
                                    <i className="fas fa-user-circle"></i>
                                </span>
                            </div>
                            <Input
                                type="number"
                                className="flex-shrink flex-grow  leading-normal w-px flex-1  h-10 border-2 border-cyan-400 rounded  px-3 self-center relative  font-roboto text-xl outline-none"
                                placeholder="password"
                                name="password"
                                onChange={handlechange}

                            />
                        </div>
                        <Button type="submit" className="bg-blue-400 py-4 text-center px-17 md:px-12 md:py-4 text-white rounded leading-tight text-xl md:text-base font-sans mt-4 mb-20" >login</Button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login_Form
