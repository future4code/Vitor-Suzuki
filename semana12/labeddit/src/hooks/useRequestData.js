import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    axios.get(url , {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then((response) => {
        setData(response.data) 
      })
      .catch((error) => {
        console.log(error)
        alert('Ocorreu um erro, tente fazer login novamente')
      })
  }, [url]);



  return (data)
}

export default useRequestData
