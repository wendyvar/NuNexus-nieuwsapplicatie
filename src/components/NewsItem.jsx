
import PropTypes from 'prop-types';
import image from '../assets/news.jpg.jpg';




const NewsItem = ({title, description, src, url }) => {
  return (
    <div className="card shadow bg-light text-dark mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
  <img src={src?src:image} style={{height:"200px", width:"330px"}} className="card-img-top img-fluid" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title?.slice(0,50)}</h5>
    <p className="card-text">{description?.slice(0,90)}</p>
    <a href={url} className="btn btn-primary">Lezen</a>
  </div>
</div>
  )
};

// Define prop types for validation
NewsItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    src: PropTypes.string,
    url: PropTypes.string
  };

export default NewsItem;
