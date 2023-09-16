import Proptypes from 'prop-types';
import loveIcon from '../../assets/images/others/love.svg';
import Timer from '../UI/Timer';
const Auction = ({ auction }) => {
  const {
    cover_image,
    title,
    author_image,
    author_name,
    author_type,
    price,
    react,
  } = auction;
  return (
    <div className='text-white bg-backGroundDarkGray rounded-lg p-6 border border-[#FFFFFF50] space-y-5'>
      <div className='cover relative'>
        <img src={cover_image} className='w-full' />
        <div className='react absolute top-3 right-3 flex gap-1 bg-white text-[#000] rounded-lg p-2'>
          <img src={loveIcon} />
          <p className='font-semibold text-sm'>{react}K</p>
        </div>
      </div>
      <div className='title'>
        <h1 className='text-xl font-semibold cursor-pointer transition hover:text-blue'>
          {title}
        </h1>
      </div>
      <div className='authorWrap flex justify-between items-center'>
        <div className='authorInfo flex gap-4 items-center'>
          <div className='authorInfoImg'>
            <img src={author_image} className='w-[40px]' />
          </div>
          <div className='authorInfoNT'>
            <h1 className='font-medium'>{author_name}</h1>
            <p className='text-textGray'>{author_type}</p>
          </div>
        </div>
        <div className='authorPrice text-right'>
          <h1 className='font-medium'>{price} EHT</h1>
          <p className='text-textGray'>Current Bit</p>
        </div>
      </div>
      <div className='timer'>
        <Timer time={{ days: 5, hours: 15, minutes: 7, seconds: 45 }} />
      </div>
    </div>
  );
};

Auction.propTypes = {
  auction: Proptypes.object,
};
export default Auction;
