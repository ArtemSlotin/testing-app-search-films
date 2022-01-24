import React, { useEffect, useState} from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

import '../pages/Details.css';
import { DetailsContainer } from '../components/DetailsContainer';


const Details = () => {
  const {id} = useParams();
  const [details, setDetails] = useState(null)
  
  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?_limit=20&i=${id}&apikey=3d3fe426`)
    .then((result) => {
      setDetails(result.data)
    })
}, [])

  return (
    <div>
      {details ?
      <DetailsContainer details={details} /> : 
      <h3>LOADING............... Please wait....</h3>}
    </div>
  )
}

export {Details};