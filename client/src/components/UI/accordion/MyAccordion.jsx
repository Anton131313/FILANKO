import React, { useState } from 'react'
import classes from './MyAccordion.module.css'

const MyAccordion = () => {

  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.accordion}>

        {data.map((item, i) => (
          <div className={classes.item}>

            <div className={classes.title} onClick={() => toggle(i)}>
              <h5>{item.question}</h5>
              <span>{selected === i ? '-' : '+'}</span>
            </div>

            <div className={
              selected === i
                ?
                (`${classes.content} ${classes.show}`)
                :
                classes.content}>
              {item.answer.map((el) => (
                <p key={el['id']}>{el.point}</p>
              ))}
            </div>

          </div>
        ))}

      </div>
    </div>
  )
}

const data = [
  {
    question: 'Заказать',
    answer: [
      {
        id: 1,
        point: 'Заказать'
      }
    ]
  },
  {
    question: 'Продлить / изменить',
    answer: [
      {
        id: 2,
        point: 'Продлить'
      },
      {
        id: 3,
        point: 'изменить'
      }
    ]
  },
  {
    question: 'Финансы',
    answer: [
      {
        id: 4,
        point: 'Финансы'
      }
    ]
  },
  {
    question: 'Управление',
    answer: [
      {
        id: 5,
        point: 'VDS/VPS'
      },
      {
        id: 6,
        point: 'Домены/почта'
      },
      {
        id: 7,
        point: 'Сертифмкаты'
      },
      {
        id: 8,
        point: 'Хостинг'
      },
      {
        id: 9,
        point: 'Реклама и продвижение'
      }
    ]
  },
]

export default MyAccordion
