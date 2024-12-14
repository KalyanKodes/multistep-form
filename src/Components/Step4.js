import React from 'react'

export default function Step4({ goNextCallBack, goBackCallBack, details }) {
    let totalPrice = 0;
    let planType = details.step2.planType;
    totalPrice += planType === "monthly" ? details.step2[details.step2.selected].monthly : details.step2[details.step2.selected].yearly
    let planTotalPrice = totalPrice;
    let addOnsArr = []

    for (let item in details.step3) {
        if (details.step3[item].selected === true) {
            let price = planType === "monthly" ? details.step3[item].monthlyPrice : details.step3[item].yearPrice;
            totalPrice += price;
            addOnsArr.push(< div className="addOn" key={item}>
                <p id='final-addon-service'>{details.step3[item].name}</p>
                <p id='final-addon-price'>+${price}/{planType}</p>
            </ div>)
        }
    }
    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault()
                goNextCallBack()
            }}>
                <div className="input-fields">
                    <h1>Finishing up</h1>
                    <p>Double check everything before confirming.</p>
                    <div className="name-wrapper final-plan-wrapper">
                        <div>
                            <p id='final-plan-p'>{details.step2.selected}</p>
                        </div>
                        <p id='final-plan-price'>${planTotalPrice}/{planType}</p>
                    </div>
                    <div className="email-wrapper final-addons-wrapper">


                        {addOnsArr}
                    </div>
                    <div className="phonenumber-wrapper final-total-amount-wrapper">
                        <p id='final-total-price'>Total (per {planType})</p>
                        <p id='final-total-price-number'>+${totalPrice}/{planType}</p>
                    </div>
                </div>
                <div className='button-wrapper'>
                    <p id='go-back' onClick={goBackCallBack}>Go Back</p>
                    <button type='submit' id='go-next' style={{ background: "blue", border: 'none' }}>Confirm</button>
                </div>
            </form>
        </>
    )
}
