import icon from '../../../assets/astronout.svg';
import './500.css';

const SomethingWentWrong = () => {
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
            <h1>500</h1>
            <h2>UH OH! Something Went Wrong.</h2>
            <p>Something big happened in our server right now.
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

export default SomethingWentWrong;
