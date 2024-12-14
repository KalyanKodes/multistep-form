import React, { useState } from 'react'

export default function Step2({ goNextCallBack, goBackCallBack, updateForm, details }) {
    const [planType, setPlanType] = useState(details.planType)

    const [serviceType, setServiceType] = useState(details.selected);
    const changePlanType = () => {
        setPlanType(prevPlanType => prevPlanType === "monthly" ? "yearly" : prevPlanType === 'yearly' ? 'monthly' : 'yearly')
    }
    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault()
                updateForm('step2', {
                    planType: planType,
                    selected: serviceType,
                    Arcade: {
                        monthly: 9,
                        yearly: 90
                    },
                    Advanced: {
                        monthly: 12,
                        yearly: 120
                    },
                    Pro: {
                        monthly: 15,
                        yearly: 150
                    }
                })
                goNextCallBack()
            }}>
                <div className="input-fields">
                    <h1>Select your plan</h1>
                    <p>You have the option of monthly or yearly billing.</p>
                    <div className='plans-outer-wrapper'>

                        <div className="arcade-wrapper plans-wrapper" style={serviceType === "Arcade" ? { border: "1px solid #9393e7", backgroundColor: "#dbdbe7" } : {}} onClick={() => setServiceType("Arcade")}>
                            <img src="./images/icon-arcade.png" alt="arceda" />
                            <div className="plan-details">
                                <b>Arcade</b>
                                <p>{planType === "monthly" ? `$${details.Arcade.monthly}/month` : `$${details.Arcade.yearly}/yr`}</p>
                                {planType === 'yearly' && <p>2 months free</p>}
                            </div>
                        </div>
                        <div className="advanced-wrapper plans-wrapper" style={serviceType === "Advanced" ? { border: "1px solid #9393e7", backgroundColor: "#dbdbe7" } : {}} onClick={() => setServiceType("Advanced")}>
                            <img src="./images/icon-advanced.png" alt="advanced" />
                            <div className="plan-details">
                                <b>Advanced</b>
                                <p>{planType === "monthly" ? `$${details.Advanced.monthly}/month` : `$${details.Advanced.yearly}/yearly`}</p>
                                {planType === 'yearly' && <p>2 months free</p>}
                            </div>
                        </div>
                        <div className="pro-wrapper plans-wrapper" style={serviceType === "Pro" ? { border: "1px solid #9393e7", backgroundColor: "#dbdbe7" } : {}} onClick={() => setServiceType("Pro")}>
                            <img src="./images/icon-pro.png" alt="pro" />
                            <div className="plan-details">
                                <b>Pro</b>
                                <p>{planType === "monthly" ? `$${details.Pro.monthly}/month` : `$${details.Pro.yearly}/yearly`}</p>
                                {planType === 'yearly' && <p>2 months free</p>}
                            </div>
                        </div>
                    </div>
                    <div className="plan-type-wrapper">
                        <b id='monthly-plan' style={{ color: planType === "monthly" ? "black" : 'gray' }}>Monthly</b>
                        <div className="toggle-button" onClick={changePlanType}>
                            <div className="toggle-inner-circle" style={planType === "monthly" ? { left: "2px" } : { right: '2px' }}></div>
                        </div>
                        <b id='yearly-plan' style={{ color: planType === "yearly" ? "black" : 'gray' }}>Yearly</b>
                    </div>
                </div>
                <div className='button-wrapper'>
                    <p id='go-back' onClick={goBackCallBack}>Go Back</p>
                    <button type='submit' id='go-next'>Next Step</button>
                </div>
            </form>
        </>
    )
}
