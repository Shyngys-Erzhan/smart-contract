import HelpIcon from '../../../assets/icons/HelpCenter.svg';
import style from './HelpCenter.module.scss';

const HelpCenter = () => {
  return (
    <div className={style.helpCenter}>
      <div className={style.iconContainer}>
        <img src={HelpIcon} alt={HelpIcon} />
        <span>Help center</span>
      </div>
      <p>Get support</p>
    </div>
  );
};

export default HelpCenter;
