import PropTypes from 'prop-types';
import { CopyOutlined } from '@ant-design/icons';
import './BoxUrl.css';

const BoxUrl = ({ url, onClick }) => {
  return (
    <div className="box-parent">
      <div 
        className="btn box-url"
        onClick={onClick}
      >
        <div style={{ width: '100%' }}>{url}</div>
        <CopyOutlined style={{ fontSize: '16px', color: 'black', padding: '4px' }} />
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
  