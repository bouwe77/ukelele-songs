// import { useEffect, useState } from 'react'
// import axios from 'axios'
import songs from './songs'

// const apihostname = 'http://localhost:5234'
// const apiHostname = 'https://ukelele-songs.herokuapp.com/api'

export default function useSongs() {
  // const [songs, setSongs] = useState([])
  // const [isLoading, setIsLoading] = useState(false)
  // const [error, setError] = useState(null)

  // useEffect(() => {
  //   async function fetchSongs() {
  //     try {
  //       setIsLoading(true)
  //       const response = await axios.get(apiHostname + '/songs')
  //       setSongs(response.data)
  //     } catch (error) {
  //       setError(error.message)
  //     } finally {
  //       setIsLoading(false)
  //     }
  //   }
  //   fetchSongs()
  // }, [])

  const isLoading = false
  const error = null

  return { songs, isLoading, error }
}
