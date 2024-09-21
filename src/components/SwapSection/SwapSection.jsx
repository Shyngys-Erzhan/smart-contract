import InputFirst from './InputFirst/InputFirst';
import InputSecond from './InputSecond/InputSecond';
import style from './SwapSection.module.scss';

const SwapSection = () => {
  return (
    <div className={style.container}>
      <h2>Swap anytime, anywhere.</h2>
      <InputFirst />
      <InputSecond />
      <button className={style.getStartedButton}>Get started</button>
      <p className={style.description}>The largest onchain marketplace.
        Buy and sell crypto on Ethereum and 11+ other chains.</p>
    </div>
  );
};

export default SwapSection;
