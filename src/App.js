import React, { useState } from 'react'
import "./App.css"
import Step1 from './Components/Step1'
import Step2 from './Components/Step2'
import Step3 from './Components/Step3'
import Step4 from './Components/Step4'
import Greet from './Components/Greet'


export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState({
    step1: {
      name: "",
      email: "",
      phoneNumber: ""
    },
    step2: {
      planType: 'monthly',
      selected: "Arcade",
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
    },
    step3: {
      onlineService: {
        selected: true,
        monthlyPrice: 1,
        yearPrice: 10,
        name: "Online Services"
      },
      largerStorage: {
        selected: false,
        monthlyPrice: 2,
        yearPrice: 20,
        name: "Larger Storage"
      },
      profitableServices: {
        selected: false,
        monthlyPrice: 2,
        yearPrice: 20,
        name: "Profitable Services"
      },
    }
  })
  const goToNextForm = () => {
    if (currentStep !== stepsArr.length - 1)
      setCurrentStep(currentStep + 1)
  }

  const goToPrevForm = () => {
    if (currentStep !== 0)
      setCurrentStep(currentStep - 1)
  }

  const localUpdateForm = (formKey, data) => {
    setData((prevFormData) => {
      return {
        ...prevFormData,
        [formKey]: data
      }
    });
  }
  const stepsArr = [
    <Step1 goBackCallBack={goToPrevForm} goNextCallBack={goToNextForm} updateForm={localUpdateForm} details={data.step1} />,
    <Step2 goBackCallBack={goToPrevForm} goNextCallBack={goToNextForm} updateForm={localUpdateForm} details={data.step2} />,
    <Step3 goBackCallBack={goToPrevForm} goNextCallBack={goToNextForm} updateForm={localUpdateForm} details={data.step3} type={data.step2.planType} />,
    <Step4 goBackCallBack={goToPrevForm} goNextCallBack={goToNextForm} details={data} />,
    <Greet />
  ]
  return (
    <>

      <div className='wrapper'>
        <picture className='bg-wrapper'>
          <source media='(max-width:800px)' srcSet="./images/bg-sidebar-mobile.png" className='bg-image' />
          <source media='(min-width:800px)' srcSet="./images/bg-sidebar-desktop.png" className='bg-image' />
          <img src="./images/bg-sidebar-mobile.png" alt="mobile-view-banner" className='bg-image' />
        </picture>
        <div className="steps-wrapper">
          <div className="step-outer">
            <div className={currentStep + 1 >= 1 ? "step completed" : 'step'}>1</div>
            <div>
              <p className='step-number'>STEP 1</p>
              <p className='step-name'>YOUR INFO</p>
            </div>
          </div>
          <div className="step-outer">
            <div className={currentStep + 1 >= 2 ? "step completed" : 'step'}>2</div>
            <div>
              <p className='step-number'>STEP 2</p>
              <p className='step-name'>SELECT PLAN</p>
            </div>
          </div>
          <div className="step-outer">
            <div className={currentStep + 1 >= 3 ? "step completed" : 'step'}>3</div>
            <div>
              <p className='step-number'>STEP 3</p>
              <p className='step-name'>ADD-ONS</p>
            </div>
          </div>
          <div className="step-outer">
            <div className={currentStep + 1 >= 4 ? "step completed" : 'step'}>4</div>
            <div>
              <p className='step-number'>STEP 4</p>
              <p className='step-name'>SUMMARY</p>
            </div>
          </div>
        </div>


        {/* Step form goes here */}
        {
          stepsArr[currentStep]
        }

      </div>
    </>
  )
}
