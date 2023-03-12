import { useOutletContext } from "react-router-dom";
import Article from "../../components/Article/Article";

const Sports = () => {

  const [requestApi] = useOutletContext()

  return (
    <Article articles={requestApi} />
  )
};

export default Sports;
