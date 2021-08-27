import { useEffect, useState } from 'react'
import axios from 'axios'

// const apihostname = 'http://localhost:5234'
const apihostname = 'https://ukelele-songs.herokuapp.com'

export default function useSongs() {
  const [songs, setSongs] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchSongs() {
      try {
        setIsLoading(true)
        const response = await axios.get(apiHostname + '/songs')
        setSongs(response.data)
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchSongs()
  }, [])

  return { songs, isLoading, error }
}
