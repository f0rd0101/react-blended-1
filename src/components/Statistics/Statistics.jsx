import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import  StatisticsItem  from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const pictures = [
 FaRegThumbsUp,
 MdPeople,
 MdOutlineProductionQuantityLimits,
 GiTreeDoor,
];

const Statistics = ({stats,title}) => {
  return <>
  {title && <h3 className={style.title}>{title}</h3>}
  <ul className={style.list}>
    {stats.map((stat,indx) =>{
      
      return <li className={style.item} key={stat.id}>
      <StatisticsItem title = {stat.title} total = {stat.total} picture={pictures[indx]}/>
     </li>
    })}

  </ul>
  </>;
};

export default Statistics;
