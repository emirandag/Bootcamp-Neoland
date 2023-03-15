import { useOutletContext } from "react-router-dom";
import Article from "../../components/Article/Article";

const Sports = () => {

  const [requestApi] = useOutletContext()

  return (
    <>
    {
      requestApi.map((article) => article.topic === 'sports' && (
        <Article key={article.id} article={article}/>
      )
      )
    }
    </>
    
    
  )
};

export default Sports;
