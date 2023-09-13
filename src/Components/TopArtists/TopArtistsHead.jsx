import leftArrow from '../../assets/images/others/leftArrow.svg';
import rightArrow from '../../assets/images/others/rightArrow.svg';
import ButtonIcon from '../UI/ButtonIcon';

const TopArtistsHead = () => {
  return (
    <div className='flex justify-between items-center py-4 border-b border-line'>
      <div className='title'>
        <h1 className='text-white font-bold text-3xl leading-9'>Top Artists</h1>
      </div>
      <div className='actions flex gap-4'>
        <ButtonIcon href='#' path={leftArrow} border='border-line' />
        <ButtonIcon href='#' path={rightArrow} border='border-line' />
      </div>
    </div>
  );
};

export default TopArtistsHead;
