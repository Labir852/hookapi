import React, { useEffect } from 'react'

const NetflixSlider = () => {
    
    
const getNetflixData = async () => {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3afe13e568msh2752c3f0ef2f937p130f31jsnfc79ca5a1781',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

   try{
        const data = await fetch('https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en', options);
        const actualData = await data.json();
        console.log(actualData);
        // setNetflixData(actualData);
   }
   catch(error){
         console.log("Error is : "+error);
   }

}

useEffect(() => {

    getNetflixData();
}, [])

    
  return (
    <div>
        <h1>NetflixSlider</h1>
    </div>
  )
}

export default NetflixSlider;