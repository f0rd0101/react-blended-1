import style from './StatisticsItem.module.css'

const StatisticsItem = ({title,total, picture:Picture}) => {
  return <>
  <>
  <Picture/>
  <span className={style.counter}>{total}</span>
  <p className={style.text}>{title}</p>
</>

</>;
};

export default StatisticsItem;
