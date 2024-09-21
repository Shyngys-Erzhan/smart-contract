import BlogInfo from "./BlogInfo/BlogInfo"
import HelpCenter from "./HelpCenter/HelpCenter"
import StayConnected from "./StayConnected/StayConnected"
import style from "./InfoSection.module.scss"

const InfoSection = () => {
  return (
    <div className={style.container}>
      <HelpCenter />
      <BlogInfo />
      <StayConnected />
    </div>
  )
}

export default InfoSection