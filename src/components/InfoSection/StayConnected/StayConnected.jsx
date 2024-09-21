
import style from './StayConnected.module.scss';
import ChatIcon from '../../../assets/icons/StayConnected.svg'; 

const StayConnected = () => {
  return (
    <div className={style.stayConnected}>
      <div className={style.iconContainer}>
        <img src={ChatIcon} alt="Chat Icon" />
        <span>Stay connected</span>
      </div>
      <p>Follow @CORN on X for the latest updates</p>
    </div>
  );
};

export default StayConnected;
