import PropTypes from 'prop-types';

const Logo = ({ path }) => {
  return (
    <div>
      <img src={path} className='cursor-pointer' />
    </div>
  );
};
Logo.propTypes = {
  path: PropTypes.string,
};
export default Logo;
