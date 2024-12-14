import React, { useState } from 'react'

export default function Step3({ goNextCallBack, goBackCallBack, updateForm, details, type }) {
    const [selectedAddons, setSelectedAddon] = useState({
        onlineService: details.onlineService.selected,
        largerStorage: details.largerStorage.selected,
        profitableServices: details.profitableServices.selected
    });

    const handleChange = (addOn) => {
        setSelectedAddon(prevAddons => {
            return {
                ...prevAddons,
                [addOn]: !prevAddons[addOn] // Use dynamic key with square brackets
            };
        });
    };

    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    updateForm('step3', {
                        onlineService: {
                            selected: selectedAddons.onlineService,
                            monthlyPrice: 1,
                            yearPrice: 10,
                            name: "Online Services"
                        },
                        largerStorage: {
                            selected: selectedAddons.largerStorage,
                            monthlyPrice: 2,
                            yearPrice: 20,
                            name: "Larger Storage"
                        },
                        profitableServices: {
                            selected: selectedAddons.profitableServices,
                            monthlyPrice: 2,
                            yearPrice: 20,
                            name: "Profitable Services"
                        },
                    })
                    goNextCallBack();
                }}
            >
                <div className="input-fields">
                    <h1>Pick add-ons</h1>
                    <p>Add-ons help enhance your gaming experience</p>

                    {/* Online Service */}
                    <div
                        className="services-inner-wrapper"
                        style={selectedAddons.onlineService ? { backgroundColor: "rgb(233 231 235)" } : {}}
                        onClick={() => handleChange('onlineService')}
                    >
                        <input
                            type="checkbox"
                            id="online-services"
                            checked={selectedAddons.onlineService}
                            readOnly // Prevent checkbox from triggering default change behavior
                        />
                        <label htmlFor="online-services" className="services-wrapper">
                            <div className="service-details">
                                <p id="service-name">Online Service</p>
                                <p id="service">Access to multiple games</p>
                            </div>
                        </label>
                        <p id="service-price">+${type === "monthly" ? `${details.onlineService.monthlyPrice}/mon` : `${details.onlineService.yearPrice}/yr`}</p>
                    </div>

                    {/* Larger Storage */}
                    <div
                        className="services-inner-wrapper"
                        style={selectedAddons.largerStorage ? { backgroundColor: "rgb(233 231 235)" } : {}}
                        onClick={() => handleChange('largerStorage')}
                    >
                        <input
                            type="checkbox"
                            id="larger-storage-services"
                            checked={selectedAddons.largerStorage}
                            readOnly
                        />
                        <label htmlFor="larger-storage-services" className="services-wrapper">
                            <div className="service-details">
                                <p id="service-name">Larger Storage</p>
                                <p id="service">Extra 1TB of cloud storage</p>
                            </div>
                        </label>
                        <p id="service-price">+${type === "monthly" ? `${details.largerStorage.monthlyPrice}/mon` : `${details.largerStorage.yearPrice}/yr`}</p>
                    </div>

                    {/* Profitable Service */}
                    <div
                        className="services-inner-wrapper"
                        style={selectedAddons.profitableServices ? { backgroundColor: "rgb(233 231 235)" } : {}}
                        onClick={() => handleChange('profitableServices')}
                    >
                        <input
                            type="checkbox"
                            id="profitable-services"
                            checked={selectedAddons.profitableServices}
                            readOnly
                        />
                        <label htmlFor="profitable-services" className="services-wrapper">
                            <div className="service-details">
                                <p id="service-name">Customizable profit</p>
                                <p id="service">Custom theme on your profile</p>
                            </div>
                        </label>
                        <p id="service-price">+${type === "monthly" ? `${details.profitableServices.monthlyPrice}/mon` : `${details.profitableServices.yearPrice}/yr`}</p>
                    </div>
                </div>

                <div className="button-wrapper">
                    <p id="go-back" onClick={goBackCallBack}>Go Back</p>
                    <button type="submit" id="go-next">Next Step</button>
                </div>
            </form>
        </>
    );
}
