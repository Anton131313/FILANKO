import React from 'react'
import classes from './Cap.module.css'

export const Cap = () => {
  return (
    <div>
      <div className={classes.blockGroup}>
        <div
          style={{ width: '135px' }}
          className={classes.block}>
          Аккаунт
        </div>
        <div className={classes.blockGroup1}>
          <div className={classes.block}>статистика</div>
          <div className={classes.blockGroup}>
            <div
              className={classes.block}
              style={{ width: '75px' }}
            >занято\всего
            </div>
            <div className={classes.block}>Cron</div>
            <div
              className={classes.block}
              style={{ width: '45px' }}>
              MySQL
            </div>
            <div className={classes.block}
              style={{ width: '24px' }}>
              FTP
            </div>
          </div>
        </div>
        <div
          className={classes.block}
          style={{ width: '63px' }}>
          Состояние
        </div>
        <div
          style={{ width: '56px' }}
          className={classes.block}>
          Действия
        </div>
      </div>

      <div className={classes.blockGroup2}>
        <div
          style={{ width: '135px' }}
          className={classes.block}>
          srv164042 (Бета- SSD)
        </div>
        <div
          style={{ width: '75px' }}
          className={classes.block}>
          675.01 / 7000
        </div>
        <div
          className={classes.block}
          style={{ width: '28px' }}>
          0
        </div>
        <div className={classes.block}
          style={{ width: '45px' }}>
          1
        </div>
        <div
          className={classes.block}
          style={{ width: '24px' }}>
          0
        </div>
        <div
          className={classes.block}
          style={{ width: '63px' }}>
          Включен
        </div>
        <div
          style={{ width: '56px' }}
          className={classes.block}>
          Действия
        </div>
      </div>

    </div>
  )
}

{/* <div className={classes.blockGroup2}>
<div className={classes.block}>srv164042 (Бета- SSD)</div>
<div className={classes.block}>675.01 / 7000</div>
<div className={classes.block}>0</div>
<div className={classes.block}>1</div>
<div className={classes.block}>0</div>
<div className={classes.block}>Включен</div>
<div className={classes.block}>Действия</div>
</div> */}
