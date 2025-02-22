import style from './ForbesList.module.css'
import ForbesListItem from '../ForbesListItem/ForbesListItem'
const ForbesList = ({list}) => {
  return <>
  <div className={style.board}>
  <div className={style.header}>
    <h2 className={style.title}>
      <span className={style.titleTop}>Forbes</span>
      <span className={style.titleBottom}>Leader board</span>
    </h2>
  </div>

  <ul className={style.list}>
     {list.map(one_list =>{
       return <li className={style.item} key={one_list.id}>
       <ForbesListItem name ={one_list.name} capital = {one_list.capital} avatar = {one_list.avatar} isIncrease = {one_list.isIncrease}
       />
    </li>
     })}
  </ul>
</div>


  </>;
};

export default ForbesList;
