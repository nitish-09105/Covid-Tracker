import React, { useEffect, useState } from 'react'
import './Covid.css'
const Covid = () => {

    const[data,setData]=useState([]);

    const getCovidData=async()=>{
        try{
            const res=await fetch('https://data.covid19india.org/data.json')
            // console.log(res)
            const actualdata=await res.json();
            console.log(actualdata.statewise[0])
            setData(actualdata.statewise[0])
        }
        catch(err){
            console.log(err)
        }
        
    }

    useEffect(()=>{
        getCovidData();
    },[])
  return (
    <div>
      <h4><span className='dot'>&#8226;</span>LIVE</h4>
      <h2>COVID-19 CORONAVIRUS TRACKER</h2>
    
        <section>

        <ul>
            <li className='card'>
                <div className="card__main">
                    <div className="card__inner">
                        <p className="card__name"><span>OUR</span>COUNTRY</p>
                        <p className="card__total card__small">INDIA </p>
                    </div>
                </div>
            </li>
            <li className='card'>
                <div className="card__main">
                    <div className="card__inner">
                        <p className="card__name"><span>TOTAL</span>RECOVERED</p>
                        <p className="card__total card__small">{data.recovered} </p>
                    </div>
                </div>
            </li>
            <li className='card'>
                <div className="card__main">
                    <div className="card__inner">
                        <p className="card__name"><span>TOTAL</span>CONFIRMED</p>
                        <p className="card__total card__small">{data.confirmed}</p>
                    </div>
                </div>
            </li>
            <li className='card'>
                <div className="card__main">
                    <div className="card__inner">
                        <p className="card__name"><span>TOTAL</span>DEATHS</p>
                        <p className="card__total card__small">{data.deaths}</p>
                    </div>
                </div>
            </li>
            <li className='card'>
                <div className="card__main">
                    <div className="card__inner">
                        <p className="card__name"><span>TOTAL</span>ACTIVE</p>
                        <p className="card__total card__small">{data.active}</p>
                    </div>
                </div>
            </li>
            <li className='card'>
                <div className="card__main">
                    <div className="card__inner">
                        <p className="card__name"><span>LAST</span>UPDATED</p>
                        <p className="card__total card__small">{data.lastupdatedtime}</p>
                    </div>
                </div>
            </li>
        </ul>
        </section>

    </div>
  )
}

export default Covid
