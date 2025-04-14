import React from 'react'
import Data from './Data'
import MapData from './MapData'


function App() {
  let myData = Data()
  return (
   <>
    <MapData data={myData}/>
   </>
  )
}

export default App