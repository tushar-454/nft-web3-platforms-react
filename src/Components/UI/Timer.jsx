import Proptypes from 'prop-types';
import { useState } from 'react';

const Timer = ({ time }) => {
  const [times, setTimes] = useState({ ...time });

  return (
    <>
      <button className='w-full text-white bg-backGroundGray text-center rounded-lg p-3'>
        {times.days} : {times.hours} : {times.minutes} : {times.seconds}
      </button>
    </>
  );
};
Timer.propTypes = {
  time: Proptypes.object.isRequired,
};
export default Timer;
