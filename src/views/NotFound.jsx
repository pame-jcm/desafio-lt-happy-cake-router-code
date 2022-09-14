import imgHappyCake from '../images/404-error-page-not-found.jpg';

const NotFound = () => {
  return (
    <div className='d-flex flex-column align-items-center'>
        <img
              alt=""
              src={ imgHappyCake }
              width="800"
              height="600"
              className="align-top"
            />
    </div>
  )
}

export default NotFound