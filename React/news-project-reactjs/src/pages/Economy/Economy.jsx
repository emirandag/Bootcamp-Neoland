import { useOutletContext } from "react-router-dom";
import Article from "../../components/Article/Article";
const Economy = () => {

  const [requestApi] = useOutletContext()
  return (
    <>
    {
      requestApi.map((article) => article.topic === 'economy' && (
        <Article key={article.id} article={article}/>
      )
      )
    }
    </>
  )
};

export default Economy;
