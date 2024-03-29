import './Figure.css'

const Figure = ({ data }) => {
  return (
    <figure className='figure'>
      <img src={data.url} alt={data.title} />
      <div className="window">
        <div className="title-bar">
          <button aria-label="Close" className="close"></button>
          <h1 className="title">{data.title}</h1>
          <button aria-label="Resize" className="resize"></button>
        </div>
        <div className="details-bar">
          <span>{data.date}</span>
          <span>{data.copyright}</span>
        </div>
        <div className="window-pane">
          <p>{data.explanation}</p>
        </div>
      </div>
    </figure>
  );
};

export default Figure;
