import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import Article from '../../components/Article/Article'

const EconomyDetails = () => {
    const { id } = useParams()

    const [requestApi] = useOutletContext() 

    const filteredArticle = requestApi?.filter((article) => article.id === id)

  return (
    <div>
        <Article article={filteredArticle[0]} />
    </div>
  )
}

export default EconomyDetails