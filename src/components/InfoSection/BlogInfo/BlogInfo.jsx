import HelpIcon from '../../../assets/icons/Blog.svg'; 
import style from './BlogInfo.module.scss';

const BlogInfo = () => {
  return (
    <div className={style.BlogInfo}>
      <div className={style.iconContainer}>
        <img src={HelpIcon} alt={HelpIcon} />
        <span>Blog</span>
      </div>
      <p>Insights and news from
        the team</p>
    </div>
  );
};

export default BlogInfo;
