import PropTypes from 'prop-types';
import Button from '../UI/Button';
const SectionHead = ({ title, button }) => {
  return (
    <div className='flex justify-between items-center py-4 border-b border-line'>
      <div className='title'>
        <h1 className='text-white font-bold text-3xl leading-9'>{title}</h1>
      </div>
      <div className='actions flex gap-4'>
        <Button href='#' name={button} bg='bg-blue' border='border-blue' />
      </div>
    </div>
  );
};
SectionHead.propTypes = {
  title: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
};
export default SectionHead;
