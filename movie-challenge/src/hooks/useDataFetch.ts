import { useState, useEffect } from 'react'
import axios from 'axios'

interface DataFetchState<T> {
  data: T | null
  error: unknown
  loading: boolean
}

const useDataFetch = <T>(url: string): DataFetchState<T> => {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<unknown>(null)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    const options = {
      method: 'GET',
      url: url,
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_BEARER_AUTH}`
      }
    }

    axios
      .request<T>(options)
      .then(response => {
        setData(response.data)
        setLoading(false)
      })
      .catch(error => {
        setError(error)
        setLoading(false)
      })
  }, [url])

  return { data, error, loading }
}

export default useDataFetch
