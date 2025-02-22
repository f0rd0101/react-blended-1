import styles from './BlogCard.module.css'
import { formatDistance, subDays } from "date-fns";
const BlogCard = ({name,poster,tag,title,description,avatar,postedAd }) => {
  const timeAgo = (time)=>{
    return formatDistance(new Date(time), new Date(), { addSuffix: true });
  }

  return <>
  
  <div className={styles.card}>
  <div className={styles.cardHeader}>
    <img
      className={styles.cardPoster}
      src={poster}
      alt="card__image"
    />
  </div>
  <div className={styles.cardBody}>
    <span className={styles.tag}>{tag}</span>
    <h2 className={styles.cardTitle}>{title}</h2>
    <p className={styles.cardText}>
      {description}
    </p>
  </div>
  <div className={styles.cardFooter}>
    <div className={styles.userBox}>
      <img
        className={styles.avatar}
        src={avatar}
        alt="Jane Doe"
      />
      <div>
        <h3 className={styles.userName}>{name}</h3>
        <small className={styles.date}>{timeAgo(postedAd)}</small>
      </div>
    </div>
  </div>
</div>


  </>
 


  ;
  
};
export default BlogCard;
