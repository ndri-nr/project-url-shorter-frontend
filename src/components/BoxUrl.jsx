import PropTypes from 'prop-types';
import './BoxUrl.css';

const BoxUrl = ({ url, onClick }) => {
  return (
    <div className="box-parent">
      <div 
        className="btn box-url"
        onClick={onClick}
      >
        {url}
      </div>
    </div>
  );
}

BoxUrl.propTypes = {
  url: PropTypes.string,
  onClick: PropTypes.func,
};

BoxUrl.defaultProps = {
  url: 'Loading',
  onClick: {}
};

export default BoxUrl;
  