import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import Article from '../../components/Article/Article'

const SportsDetails = () => {
    const { id } = useParams()

    const [requestApi] = useOutletContext() 

    const filteredArticle = requestApi?.filter((article) => article.id === id)

  return (
    <div>
        {/* {requestApi === "" ? <h2>Loading</h2> : <Article article={filteredArticle[0]} />} */}
        <Article article={filteredArticle[0]} />
    </div>
  )
}

export default SportsDetails