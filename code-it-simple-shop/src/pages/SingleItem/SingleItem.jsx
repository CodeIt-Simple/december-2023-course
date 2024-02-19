import React from 'react'
import {useParams} from 'react-router-dom'
const SingleItem = () => {
    const {itemID} = useParams();
  return (
    <div>
        hello this is the id you have chosen: {itemID}
    </div>
  )
}

export default SingleItem