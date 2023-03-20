import { useOutletContext } from "react-router-dom";
import Card from "../../components/Card/Card";
const Economy = () => {

  const [requestApi] = useOutletContext()
  return (
    <div className="article">
      <h1>Economía</h1>
    {
      requestApi.map((article) => article.topic === 'economy' && (
        <Card key={article.id} article={article} />
      )
      )
    }
    </div>
  )
};

export default Economy;
