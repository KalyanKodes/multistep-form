import React, { useState } from 'react'

export default function Step1({ goNextCallBack, goBackCallBack, updateForm, details }) {
    // console.log(formDetails)
    const [formData, setFormData] = useState(details)


    const handleChange = (e, key) => {
        setFormData((prevData) => {
            return {
                ...prevData,
                [key]: e.target.value
            }
        })
    }

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault()
                updateForm("step1", formData)
                goNextCallBack()
            }}>
                <div className="input-fields">
                    <h1>Personal info</h1>
                    <p>Please provide your name, email address, phone number</p>
                    <div className="name-wrapper">
                        <label htmlFor="name">Name</label><br />
                        <input type="text" id='name' placeholder='eg. Stephen King' required value={formData.name} onChange={(e) => handleChange(e, 'name')} />
                    </div>
                    <div className="email-wrapper">
                        <label htmlFor="email">Email Address</label><br />
                        <input type="email" placeholder='eg. StephenKing@gmail.com' required value={formData.email} onChange={(e) => handleChange(e, 'email')} />
                    </div>
                    <div className="phonenumber-wrapper">
                        <label htmlFor="mobile-number">Phone number</label><br />
                        <input type="number" placeholder='eg. +91 9876543210' required value={formData.phoneNumber} onChange={(e) => handleChange(e, 'phoneNumber')} />
                    </div>
                </div>
                <div className='button-wrapper'>
                    <button type='submit' id='go-next'>Next Step</button>
                </div>
            </form>
        </>
    )
}
