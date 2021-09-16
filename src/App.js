import React, { useState, useEffect, useCallback } from 'react'
import './assets/main.css'
import ImageCard from './components/ImageCard'
import ImageSearch from './components/ImageSearch'
function App() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  const fetchWrapper = useCallback(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchTerm}&image_type=photo&pretty=true`
        ).then((res) => res.json())
        setImages(data.hits)
        setIsLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [searchTerm])

  useEffect(() => {
    // fetchData()
    fetchWrapper()
    setIsLoading(false)
  }, [setSearchTerm, fetchWrapper])

  return (
    <div className="container mx-auto">
      <ImageSearch setText={(text) => setSearchTerm(text)} />
      {!isLoading && images.length === 0 && (
        <h1 className="text-5xl text-center mx-auto mt-32">Images not found</h1>
      )}
      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}{' '}
    </div>
  )
}

export default App
