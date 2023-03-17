import './Sports.css'
import { useNavigate, useOutletContext } from "react-router-dom";
import Article from "../../components/Article/Article";
import Card from "../../components/Card/Card";

const Sports = () => {

  const [requestApi] = useOutletContext()
  

  return (
    <div className='articles-data'>
      {requestApi.map(
        (article) =>
          article.topic === 'sports' && (
            <>
            <Card key={article.id} article={article} />
            {/* <div className='card' key={article.id}>
        <figure onClick={() => handleClick(article.id)} >
          <img src={article.image_url} alt={article.title} />
          <figcaption>
            <h2>{article.title}</h2>
          </figcaption>
        </figure>
    </div> */}
            </>
            // <Article key={article.id} article={article}/>
            
          ),
      )}
      
    </div>
  );
};

export default Sports;
