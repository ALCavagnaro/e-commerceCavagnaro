
import data from './Data.jsx'
import Item from './Item.jsx'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

  const getItems = (id = null) => {
    console.log('waiting for response...');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = data.find(data => data.id === id);
       
        if (data != null) resolve(data);

        reject({
          status: 404
        });
      }, 2000);
    });
  };
  
  const myPromise = new Promise(async (resolve, reject) => {
    const data = await getItems('').catch(
      err => reject(err)
    );
    
    data?.isValid ? resolve(data) : reject('not ItemStock');
  });
  
  myPromise.then(result => console.log(result)).catch(err => console.log(err));




  