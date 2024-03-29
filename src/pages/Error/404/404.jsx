import icon from '../../../assets/astronout.svg';
import './404.css';

const NotFound = () => {
  const APP_URL = process.env.REACT_APP_URL;

  const goToHome = () => {
    window.location = APP_URL;
  };

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-md-6 align-self-center">
            <img src={icon} alt="astronout" />
          </div>
          <div className="col-md-6 align-self-center">
            <h1>404</h1>
            <h2>UH OH! You're lost.</h2>
            <p>The page you are looking for does not exist.
              How you got here is a mystery. But you can click the button below
              to go back to the homepage.
            </p>
            <button className="btn green" onClick={goToHome}>HOME</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
