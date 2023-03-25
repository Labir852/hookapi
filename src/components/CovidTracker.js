import React, { useEffect, useState } from 'react';
import './CovidTracker.css';

const CovidTracker = () => {
const [Data, setData] = useState([]);
const [LatestDate, setLatestDate] = useState(['']);

const [Confirmed, setConfirmed] = useState(['']);
const [DECEASED, setDECEASED] = useState(['']);
const [Location, setLocation] = useState(['']);




  function getData(column){
    const mainData = Data.data.filter(function (item) {
      return item[0] === LatestDate;
    }).map(function (item) {
      
      return item[column];
     });
    return mainData;
  };
  
  
  useEffect(() => {

    const getCovidData = async () => {
      try {
        const res = await fetch('https://storage.googleapis.com/covid19-open-data/v3/latest/epidemiology.json');
        const actualData = await res.json();
        console.log(actualData);
        
        setData(actualData);

        
const latestDateArray =[];
Data.data.map(Element => {
   return latestDateArray.push(Element[0]);
}
);
latestDateArray.sort().reverse();
const latestDate = latestDateArray[0];
setLatestDate(latestDate);



      const location = getData(1);
      setLocation(location);
      const Confirmed = getData(2);
      setConfirmed(Confirmed);
  
       const deceased = getData(3);
      setDECEASED(deceased);

      }
  
      catch (error) {
        console.log(error);
      }
    }
    getCovidData();
  },);

  
  return (
    <>
        {/* <h1 className="ComTitle">CovidTracker</h1> */}
        <h2 className="neons">🔴 Live </h2>
        <h3>COVID-19 CORONAVIRUS TRACKER</h3>

        <div className="container">
           <div className="card">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">LOCATION</p>
                <p className="card__total card__small">{Location}</p>
              </div>
            </div>         
          </div>
          <div className="card">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name"><span>NEW 
                  </span>DECEASED</p>
                <p className="card__total card__small">{DECEASED}</p>
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
          <div className="card">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name"><span>New</span> Confirmed</p>
                <p className="card__total card__small">{Confirmed}</p>
              </div>
            </div>         
          </div>
        </div>
    </>
  )
}

export default CovidTracker;