import React from 'react'
import {useLocation, useParams} from 'react-router-dom'

const DynamicRoute = () => {
    const params = useParams()
    return (
    <div>DynamicRoute
        this is product {params.id}
    </div>
  )
}

export default DynamicRoute