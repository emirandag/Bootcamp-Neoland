import { useOutletContext } from "react-router-dom";
import Card from "../../components/Card/Card";
const Economy = () => {

  const [requestApi] = useOutletContext()
  return (
    <>
    {
      requestApi.map((article) => article.topic === 'economy' && (
        <Card key={article.id} article={article} />
      )
      )
    }
    </>
  )
};

export default Economy;
