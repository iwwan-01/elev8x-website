import React, { useState, useEffect } from 'react'

function WordChanger() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const words = [
    'digitalize',
    'elevate',
    'improve',
    'optimize',
    'streamline',
    'automate',
    'update',
    'innovate',
    'enhance',
  ]
  const intervalDuration = 2000

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, intervalDuration)

    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <p className='font-poppins font-bold md:text-3xl text-4xl lg:text-4xl absolute'>
        We will help you{' '}
        <span className='text-orange'>{words[currentWordIndex]}</span>!
      </p>
    </div>
  )
}

export default WordChanger
