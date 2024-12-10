import { TextField, Stack, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'




function App() {
  const [interest,setInterest]=useState(0) //for storing calculated interest
  const [principle,setPrinciple]=useState(0) 
  const [rate,setRate]=useState(0)
  const [year,setYear]=useState(0)

  const [invalidPrinciple,setinvalidPrinciple]=useState(false)
  const[invalidRate,setinvalidRate]=useState(false)
  const[invalidYear,setinvalidYear]=useState(false)

  const validateInput=(inputTag)=>{
    console.log(inputTag, typeof inputTag);
    const {name, value}=inputTag
    // console.log(name,value);
    // console.log(value.match(/^[0-9]*.?[0-9]+$/));
    console.log(!!value.match(/^\d*.?\d+$/));  //? checcks if there exist "." 
    
    if(name=='principle')
    {
        setPrinciple(value)  //updating value
        if(!!value.match(/^\d*.?\d+$/)){
          setinvalidPrinciple(false)
        }else{
          setinvalidPrinciple(true)
        }

    }else if(name=='rate'){
      setRate(value)
      if(!!value.match(/^\d*.?\d+$/)){
        setinvalidRate(false)
      }else{
        setinvalidRate(true)
      }

    }else if(name=='year'){
      setYear(value)
      if(!!value.match(/^\d*.?\d+$/)){
        setinvalidYear(false)
      }else{
        setinvalidYear(true)
      }
    }
    
  }

 const handleCalculate=(e)=>{ 
  e.preventDefault() //html predefined method to avoid extra events happens there. in above, there also given "e" inside ()
  if(principle && rate && year){
    setInterest(principle*rate*year/100)
  }else{
    alert("Please fill the form Completely !!!")
  }
 }

 const handleReset=()=>{
  setInterest(0)
  setPrinciple(0)
  setRate(0)
  setYear(0)

  setinvalidPrinciple(false)
  setinvalidRate(false)
  setinvalidYear(false)
 }

  return (
    <>
     <div style={{width:'100%',minHeight:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
      <div className='bg-light p-5 rounded'>
        <h3>Simple Interest Calculator</h3>
        <p>Calculate your simple interest easily</p>
        <div className='bg-warning p-5 rounded text-center'>
          <h1>₹ {interest}</h1>
          <p className='fw-bolder'>Total simple interest</p>
        </div>
        <form className='mt-5'>

          {/* Principle Amount */}
          <div className='mb-3'>
          <TextField value={principle || ""} name='principle' onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-principle" label="Principle Amount (₹)" variant="outlined" />
          </div>

                {/* invalid principle section */}
               {invalidPrinciple && <div className='text-danger fw-bolder mb-3'>
                 Invalid principle amount !!!</div>}

          {/* Interest rate */}
          <div className='mb-3'>
          <TextField value={rate || ""} name='rate' onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-rate" label="Rate (%)" variant="outlined" />
          </div>

                 {/* invalid Interest rate */}
                {invalidRate && <div className='text-danger fw-bolder mb-3'>
                 Invalid Interest rate !!!</div>}

          {/* No of Years */}
          <div className='mb-3'>
          <TextField value={year || ""} name='year' onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-year" label="Time Period (Yr)" variant="outlined" />
          </div>

             {/* invalid No of years */}
             {invalidYear && <div className='text-danger fw-bolder mb-3'>Invalid No of Years</div>}
                     
          {/* Buttons */}
          <Stack direction="row" spacing={2}>
<Button type='submit' onClick={handleCalculate} disabled={invalidPrinciple || invalidRate || invalidYear} variant="contained" style={{width:'50%',height:'70px'}} className='bg-dark'>Calculate</Button>
<Button onClick={handleReset} variant="outlined" style={{width:'50%',height:'70px'}} className='border border-dark text-dark'>Reset</Button>
          </Stack>

        </form>
      </div>
     </div>
    </>
  )
}

export default App