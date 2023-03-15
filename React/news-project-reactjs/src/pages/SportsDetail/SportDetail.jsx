import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

const SportDetail = () => {
    const { id } = useParams()

    const [requestApi] = useOutletContext() 
    

    const filteredArticle = requestApi?.filter((article) => article.id == id)
    // console.log(filteredArticle);
    // console.log(filteredArticle[0].title);
  return (
    <div>
        {/* <h2>{filteredArticle[0].title}</h2> */}
    </div>
  )
}

export default SportDetail