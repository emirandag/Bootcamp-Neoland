import { useOutletContext } from "react-router-dom";
import Article from '../../components/Article/Article'

const Technology = () => {

  const [requestApi] = useOutletContext()
  return (
    <>
    {
      requestApi.map((article) => article.topic === 'technology' && (
        <Article key={article.id} article={article}/>
      )
      )
    }
    </>
  )
}

export default Technology