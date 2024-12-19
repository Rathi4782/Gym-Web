// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
function Programs() {
  return (
    <div className="Programs" id='programs'>

        <div className="programs-header">
            <span className='stroke-test'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-test'>to shape you</span>
        </div>

        <div className="program-categories">
            {programsData.map((program) => {
            return (
            <div className="category" key={program.heading}>
                {program.image}
                <span>{program.heading}</span>
                <span>{program.details}</span>
                <div className="join-now">
                <span>Join Now</span>
                <img src={RightArrow} alt="Arrow Icon" />
                </div>
            </div>
            );
            })}
        </div>
    </div>
  )
}

export default Programs
