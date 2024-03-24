import React, { useEffect, useState } from 'react'
import styles from "./style.module.css"
export default function ViewFlag() {
    let [countryData,setData]=useState([])
    async function fetchData()
    {

        try{
        let response=await fetch('https://restcountries.com/v3.1/all')
        let data=await response.json();
        console.log(data)
        setData(data);
        return data;
        }
        catch(e)
        {
            console.log(e.message)
            setData([])
        }
    }
    function displayData(data)
    {
    let list=data.map((ele)=>{
        return (
            <div className={styles.countryCard} key={ele.ccn3}>
              <img src={ele.flags.png} alt={ele.flags.alt} width="100" height="100"/>
              <h3>{ele.name.common}</h3>
            </div>
        );
    })
    return list;
    }
    useEffect(()=>{
        fetchData();
         

    },[])
  return (
    <div className={styles.container} >
     <div className={styles.countryContainer}>
        {/* <div className={styles.countryCard}>
         
        </div> */}
        {countryData?displayData(countryData):null}

     </div>
    </div>
  )
}
