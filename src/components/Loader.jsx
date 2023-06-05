import PropTypes from 'prop-types';
import './Loader.css';

const Loader = ({ text }) => {
  return (
    <div>
      <div className="loader">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
        <div className="bar4"></div>
        <div className="bar5"></div>
        <div className="bar6"></div>
      </div>
      <div className="loader-text">{text}</div>
    </div>
  );
}

Loader.propTypes = {
  text: PropTypes.any,
};

Loader.defaultProps = {
  text: 'Loading',
};

export default Loader;
