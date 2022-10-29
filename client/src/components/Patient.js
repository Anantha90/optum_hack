import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Patient = () => {
    useEffect(() => {
      const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzVjZmZjZjA5YTMzNTdhMjdkMTRmZDgiLCJpYXQiOjE2NjcwNDAwMTF9.WUrfnyKLESV38rSIMqLDe_osEIL3Ns536AJvNSSWhaY";
      axios.interceptors.request.use(
        config => {
          config.headers.authorization = `Bearer ${accessToken}`;
          return config;
        },
        error => {
          return Promise.reject(error);
        }
      )
      // const config = {
      //   headers: {
      //     Accept: "application/json",
      //     Authorization: `Bearer ${accessToken}`,
      //     "Content-Type": "application/json"
      //   },
      //   wthCredentials: true
      // }
        axios.get('http://localhost:5000/Doctor/api/fetch')
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }, [])

    
  return (
    <div>Patient</div>
  )
}

export default Patient;