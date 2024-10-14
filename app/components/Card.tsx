import React from 'react'

interface Card{
  Name:string
  RollNo:number
  Day:string
  Timing:string
}
const Card = (props:any) => {
  return (
    <div className='max-w-sm mx auto bg-gray-950-200 shadow-lg rounded-lg border border-gray-300 p-6'>
      <h1 className='text lg text-center mb-2 font-bold text-stone-800-400 bg-orange-600'>Student ID Card</h1>
      <div className='flex items-center justif~y-center'>
        <div className='flex-1'>
      <span className='font-sans'>
        <p>Name: {props.Name}</p>
        <p>RollNo: {props.RollNo}</p>
        <p>Day: {props.Day}</p>
        <p>Timing: {props.Timing}</p>
      </span>


        </div>

      </div>
    </div>
  )
}

export default Card
