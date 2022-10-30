import { useState,useEffect,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePizzaSort } from "./slices/sortSlice";
import {RootState}from "../store";



const Sort:React.FC = () => {
  const [popup, setPopup] = useState(false);
  const dispatch = useDispatch();
  const { activeSort } = useSelector((state: RootState ) => state.sort)
  const sortRef = useRef<HTMLDivElement>(null)
  
  const getMethod = (name:string) => {
    dispatch(changePizzaSort(name))
    setPopup(!popup)
  }
  const togglePopup = () => {
    setPopup(!popup)
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const event = e as MouseEvent & {
        path: Node[]
      }
       if (sortRef.current && !event.path.includes(sortRef.current)) {
         setPopup(false)
         console.log('click')
      }
    }
    document.body.addEventListener('click', handleClickOutside)
    return () => { 
      document.body.removeEventListener('click',handleClickOutside)
    }
    // eslint-disable-next-line
  },[])
  const arrowFlip = popup ? {transform: 'rotate(180deg)'} : undefined
  const sort:string[] = ['popular','price','Alphabet']
    return (
            <div ref={sortRef} className="sort">
              <div className="sort__label">
                <svg style ={arrowFlip}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                    fill="#2C2C2C"
                  />
                </svg>
                <b>Sort by:</b>
                <span onClick={togglePopup}>{activeSort}</span>
              </div>
        {popup && (
          <div className="sort__popup">
                <ul>
                   {sort.map((item,i) => {
                        return <li onClick={()=> getMethod(item)} key ={i} className={activeSort === item ? 'active' : ''}>{item}</li>   
                      })}
                </ul>
              </div>)}
            </div>
    )
}
export default Sort;