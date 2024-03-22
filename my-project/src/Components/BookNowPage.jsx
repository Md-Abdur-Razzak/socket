import axios from 'axios';
import React from 'react';
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const BookNowPage = () => {
    const handelSubmit =(e)=>{
        e.preventDefault()
        const from = e.target
        const firstName = from.fName.value
        const lastName = from.lName.value
        const email = from.email.value
        const number = from.number.value
        const currentClient = from.currentClient.value
        const servicesName = from.selected_option.value
        const message = from.message.value
        const date = from.date.value
  
        const data = {
            FirstName:firstName,
            LastName:lastName,
            Email:email,
            Number:number,
            CurrentClient:currentClient,
            servicesName:servicesName,
            Message:message,
            Date:date

        }
        console.log(data);
        axios.post('https://sheet.best/api/sheets/207f59cc-aabd-4a44-a56d-42c9f2ef1c50',data)
        .then((res)=>{
            console.log(res);
        })
    }
    return (
        <div>
            <div className='w-[80%]  mx-auto translate-y-[20%]'>
                <div className='flex justify-between'>
                    {/* ------------------contact from start---------------- */}
                    <div className="bg-white  rounded-md  border-4 border-pink-500  w-[750px] p-5 ">
                        <form onSubmit={handelSubmit}>
                            <div className="form-control   w-full">
                                <label className="label">
                                    <span className="label-text py-3 text-pink-500 text-[20px] font-bold">Are you a current client of  of salon three-13,salon, spa & boutique </span>
                                </label>
                                <select
                                    className="select  select-primary w-full border border-[#F3AD3C] "
                                    name="currentClient"


                                >
                                    <option value={""}>
                                      Select......
                                    </option>
                                    <option value={"Yes"}>Yes</option>
                                    <option value={"No"}>No</option>

                                </select>

                            </div>
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
                            {/* -------------services----------- */}
                            <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text  py-3 text-pink-500 text-[20px] font-bold">Please tell us what services you are interested in? </span>
                                    </label>
                                    <Select  name='selected_option'  isMulti options={options}></Select>
                                </div>
                            {/* ------------Message----------- */}
                            <div className="form-control w-full py-4 ">
                                <label className="label">
                                    <span className="label-text  py-3 text-pink-500 text-[20px] font-bold">Please tell us what services providers you would like to see? </span>
                                </label>
                                <textarea
                                    type="message"
                                    placeholder="Enter Your  message"
                                    name="message"
                                    className="input input-bordered h-[100px] border-[#F3AD3C]  "

                                    required
                                />
                            </div>
                            {/* _______Date and Time___________ */}
                            <div className="form-control  w-full">
                                <label className="label">
                                    <span className="label-text py-3 text-pink-500 text-[20px] font-bold">Please tell us the date & time you would like to come in  </span>
                                </label>
                                
                                <input
                                        type="Date"
                                        placeholder="Date"
                                        name="date"
                                        className="input input-bordered  border-[#F3AD3C]"
                                        required
                                    />

                            </div>
                            {/* Time Of Day */}
                            <div className="form-control  w-full">
                                <label className="label">
                                    <span className="label-text py-3 text-pink-500 text-[20px] font-bold">Time of day </span>
                                </label>
                                <select
                                    className="select select-primary w-full  border-[#F3AD3C]"
                                    name="BrandName"


                                >
                                    <option value={""}>
                                    Time of day
                                    </option>
                                    <option value={"Yes"}>Yes</option>
                                    <option value={"No"}>No</option>
                                

                                </select>

                            </div>
                            {/*  ----------------special promotions--------------- */}
                            <div className="form-control  w-full">
                                <label className="label">
                                    <span className="label-textpy-3 text-pink-500 text-[20px] font-bold">Do you wish to receive special promotions & discounts via our Three - 13 club</span>
                                </label>
                                <select
                                    className="select select-primary w-full border-[#F3AD3C] "
                                    name="BrandName"


                                >
                                    <option value={""}>
                                    special promotions.............
                                    </option>
                                    <option value={"Yes"}>Yes</option>
                                    <option value={"Yes"}>Early Night</option>
                                   

                                </select>

                            </div>
                            <div className="form-control  w-full">
                                <label className="label">
                                    <span className="label-text py-3 text-pink-500 text-[20px] font-bold">By Supplying your contact information you agree to be contracted via mobile
or email</span>
                                </label>
                                <select
                                    className="select select-primary w-full border-[#F3AD3C] "
                                    name="BrandName"


                                >
                                    <option value={""}>
                                  Chouse Mobile Or Email
                                    </option>
                                    <option value={"Yes"}>Yes</option>
                                    <option value={"Yes"}>Early Night</option>
                                   

                                </select>

                            </div>
                            <button className="w-full bgColor bg-pink-500 text-white mt-5 p-3 font-bold  rounded-md">Book Now </button>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default BookNowPage;