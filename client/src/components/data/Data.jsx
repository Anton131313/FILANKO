import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import AddCommentForm from '../AddCommentForm';
import MyButton from "../UI/button/MyButton";
import MyModal from "../UI/MyModal/MyModal";
import { addComment, getCommentFromServer } from '../../thunk/commentThunk';

export const Data = () => {

  const comm = useSelector(state => state.comment)
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);


  useEffect(() => {
    dispatch(getCommentFromServer())
  }, [dispatch, modal]);



  const createPost = (newPost) => {
    addComment(newPost);
    setModal(false)
  }

  const availabilityOfComments = () => {
    if (comm.length) {
      return comm.length
    } else {
      return 'Комментариев нет'
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#d5d5d5'
      }}
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
      >
        <p>IP- адрес</p>
        <p>Объём баз данных</p>
        <p>Объём почты</p>
        <p>Объём файлов</p>
        <p>Комментраний</p>
        <p>Услуга</p>
        <p>Логин</p>
        <p>Имя хоста FTP</p>
        <p>Пароль FTP</p>
        <p>Имя хоста SSH</p>
        <p>Пароль SSH</p>
        <p>Имя хоста My SQL</p>
        <p>Имя хоста PgSQL</p>
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
      >
        <p>31.28.24.122</p>
        <p>10.89 Mb</p>
        <p>522.43 Mb</p>
        <p>141.7 Mb</p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'row'
          }}
        >
          <p>{availabilityOfComments()}</p>
          <MyButton onClick={() => setModal(true)}>
            Изменить
          </MyButton>
          <MyModal visible={modal} setVisible={setModal}>
            <AddCommentForm create={createPost} />
          </MyModal>
        </div>
        <p>Бета-SSD</p>
        <p>КАКОЙТО ЛОГИН</p>
        <p>ИМЯ ХОСТА</p>
        <p>ПАРОЛЬ</p>
        <p>ХОСТ</p>
        <p>ПАРОЛЬ</p>
        <p>хост</p>
        <p>хост</p>
      </div>
    </div >
  )
}
