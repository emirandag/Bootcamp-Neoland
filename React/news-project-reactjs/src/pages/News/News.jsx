import './News.css'
import { useOutletContext } from "react-router-dom";
import ResponsiveGrid from "../../components/ResponsiveGrid/ResponsiveGrid";

const News = () => {
  const [requestApi] = useOutletContext()
  //console.log(requestApi);
  return (
    <div className="container">
      {/* {requestApi.map((data) => (
        <article key={data.id}>
          <h2>{data.title}</h2>
          <h5>{data.author}</h5>
          <h5>{data.published_date}</h5>
          <img src={data.image_url} alt={data.name} />
          {data.summary.map((item) => (
            <p key={item.info}>{item.info}</p>
          ))}
        </article>
      ))} */}
      <ResponsiveGrid news={requestApi} />
    </div>
  )
}

export default News;
