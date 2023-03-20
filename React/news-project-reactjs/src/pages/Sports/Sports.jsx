import './Sports.css'
import { useOutletContext } from "react-router-dom";

import Card from "../../components/Card/Card";

const Sports = () => {

  const [requestApi] = useOutletContext()


  return (
    <div className="article">
      <h1>Deportes</h1>
      {requestApi.map(
        (article) =>
          article.topic === 'sports' && <Card key={article.id} article={article} />,
      )}
    </div>
  );
};

export default Sports;
