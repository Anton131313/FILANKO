import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDomainFromServer, delDomain } from '../../thunk/domainsThunk'
import MyButton from '../UI/button/MyButton'

export const LinkedDomains = () => {

  const domain = useSelector(state => state.domains)
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getDomainFromServer())
  }, [dispatch]);

  return (
    <div
      style={{ display: 'flex', flexDirection: 'row' }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          padding: '10px',
          border: 'solid',
          borderWidth: '1px',
          width: '195px'
        }}
      > привязанные домены
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '10px',
          border: 'solid',
          borderWidth: '1px',
          width: '761px'
        }}
      > {domain.map((dom) => (
        <form
          key={dom['id']}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div>
            <h4>{dom['name']}</h4>
            <h5>{dom['name_adress']}</h5>
          </div>
          <div>
            <MyButton onClick={delDomain(dom['id'])}>Удалить</MyButton>
          </div>
        </form>
      ))}
      </div>
    </div>
  )
}

/* 
    name: DataTypes.STRING,
    name_adress: DataTypes.STRING,
*/
