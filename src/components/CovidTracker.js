import React, { useEffect, useState } from 'react';
import './CovidTracker.css';

const CovidTracker = () => {
const [Data, setData] = useState([]);
const [LatestDate, setLatestDate] = useState(['']);


  
  const getCovidData = async () => {
    try {
      const res = await fetch('https://storage.googleapis.com/covid19-open-data/v3/latest/epidemiology.json');
      const actualData = await res.json();
      //console.log(actualData.data);
      
      // console.log("LatestDate inside: "+latestDate);
      
      setData(actualData);
       console.log(Data.data);

      const latestDate = new Date(
        Math.max(...Data.data.map(Element => {
          return new Date(Element[0]);
        }))
      );
     setLatestDate(latestDate.toDateString());

     const DECEASED = 

    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    getCovidData();
  },[]);

  
  return (
    <>
        {/* <h1 className="ComTitle">CovidTracker</h1> */}
        <h2>🔴 Live </h2>
        <h3>COVID-19 CORONAVIRUS TRACKER</h3>

        <div className="container">
           <div className="card">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">LOCATION</p>
                <p className="card__total card__small">WORLD</p>
              </div>
            </div>         
          </div>
          <div className="card">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name"><span>NEW 
                  </span>DECEASED</p>
                <p className="card__total card__small">{}</p>
              </div>
            </div>         
          </div>
          <div className="card">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name"> DATE <span>updated</span></p>
                <p className="card__total card__small">{LatestDate}</p>
              </div>
            </div>         
          </div>
          
        </div>
    </>
  )
}

export default CovidTracker;