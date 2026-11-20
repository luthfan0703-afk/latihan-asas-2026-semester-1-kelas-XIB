import React, { useEffect } from 'react'

function LatihanUseEffect() {
  useEffect(() => {
    first
  
    return () => {
      second
    }
  }, [third])
  
  return (
    <div></div>
  )
}

export default LatihanUseEffect