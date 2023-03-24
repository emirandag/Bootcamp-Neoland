import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Card from "../../components/Card/Card";

const Technology = () => {

  const [requestApi] = useOutletContext()
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="article">
      <h1>Tecnología</h1>
    {
      requestApi.map((article) => article.topic === 'technology' && (
        <Card key={article.id} article={article} />
      )
      )
    }
    </div>
  )
}

export default Technology