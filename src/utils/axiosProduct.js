import axios from "axios";
import { useState, useEffect } from "react";

const useAxios = (endpoint) => {

    const [loading, setLoading] = useState(true);
    const [responseData, setResponseData] = useState({});
    const [errorFlag, setErrorFlag] = useState(false);

    useEffect(() => {
      
      (async()=>{

        try{
            setLoading(true);
            const response = await axios.get(endpoint);
            setResponseData(response.data);
        }catch(err){
            setErrorFlag(true);
            console.error("Oops somethng went wrong. We're sorry", err);
        }finally{
            setLoading(false);
        }   
      })()
    }, [])
    
   return {loading, responseData, errorFlag} 
}

export default useAxios;