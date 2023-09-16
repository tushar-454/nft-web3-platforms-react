import Proptypes from 'prop-types';

const Timer = ({ time }) => {
  return (
    <>
      <button className='w-full text-white bg-backGroundGray text-center rounded-lg p-3'>
        {time.days} : {time.hours} : {time.minutes} : {time.seconds}
      </button>
    </>
  );
};
Timer.propTypes = {
  time: Proptypes.object.isRequired,
};
export default Timer;
