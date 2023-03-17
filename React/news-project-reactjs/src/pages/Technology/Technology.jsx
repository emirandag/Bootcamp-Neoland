import { useOutletContext } from "react-router-dom";
import Card from "../../components/Card/Card";

const Technology = () => {

  const [requestApi] = useOutletContext()
  return (
    <>
    {
      requestApi.map((article) => article.topic === 'technology' && (
        <Card key={article.id} article={article} />
      )
      )
    }
    </>
  )
}

export default Technology