import imgHappyCake from '../images/cake-chocolate.png';

const Home = () => {
  return (
    <div className='d-flex flex-column align-items-center'>
        <h1 className="mt-5">Bienvenido a <strong>Happy Cake</strong></h1>
        <p>El lugar de los pasteles felices</p>
        <img
              alt=""
              src={ imgHappyCake }
              width="100"
              height="100"
              className="d-inline-block align-top"
            />
    </div>
  )
}

export default Home