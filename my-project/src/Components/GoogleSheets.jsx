import axios from 'axios';
import React from 'react';

const GoogleSheets = () => {
    const handelSubmit =(e)=>{
        e.preventDefault()
        const from = e.target
        const firstName = from.fName.value
        const lastName = from.lName.value
        const email = from.email.value
        const number = from.number.value
        const data = {
            FirstName:firstName,
            LastName:lastName,
            Email:email,
            Number:number
        }
        console.log(data);
        axios.post('https://sheet.best/api/sheets/207f59cc-aabd-4a44-a56d-42c9f2ef1c50',data)
        .then((res)=>{
            console.log(res);
        })
    }
    return (
        <div>
            <form onSubmit={handelSubmit}>

                <div className="md:flex justify-between md:gap-4">
                    {/*------- Full name Name---------*/}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text  py-3 text-pink-500 text-[20px] font-bold ">First Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="First Name"
                            name="fName"
                            className="input input-bordered border-[#F3AD3C]  "
                            required
                        />
                    </div>
                    {/* --------Phone Number ------------- */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text py-3 text-pink-500 text-[20px] font-bold">Last Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lName"
                            className="input input-bordered  border-[#F3AD3C]"
                            required
                        />
                    </div>
                </div>
                {/* ------------email and Phone----------------- */}
                <div className="md:flex justify-between md:gap-4">

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text  py-3 text-pink-500 text-[20px] font-bold">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            name="email"
                            className="input input-bordered border-[#F3AD3C]  "
                            required
                        />
                    </div>
                    {/* --------Phone Number ------------- */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text  py-3 text-pink-500 text-[20px] font-bold">Phone</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Phone Number"
                            name="number"
                            className="input input-bordered  border-[#F3AD3C]"
                            required
                        />
                    </div>
                </div>
                <button className='btn '>submit</button>
            </form>
        </div>
    );
};

export default GoogleSheets;