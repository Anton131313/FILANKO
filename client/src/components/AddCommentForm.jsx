import React, { useState } from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from './UI/button/MyButton';
import { useSelector } from 'react-redux';

const AddCommentForm = ({ create, tig }) => {

  const comm = useSelector(state => state.comment)

  const [post, setPost] = useState({ text: '' })

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post
    }
    create(newPost)
    setPost({ text: '' })
    // console.log(comm);
  }

  return (
    <form>
      <MyInput
        value={post.text}
        onChange={e => setPost({ ...post, text: e.target.value })}
        type="text"
        placeholder="Добаить новый комментарий"
      />
      <MyButton onClick={addNewPost}>Добавить</MyButton>
      <div>
        {comm.map((el) => (
          <p key={el['id']}>{el['id']}) {el['text']}</p>
        ))}
      </div>
    </form>
  )
}

export default AddCommentForm
