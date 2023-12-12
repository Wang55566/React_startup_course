import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useState } from 'react'

interface Props {
  handleOnClick: () => void;
}


const Like = ({ handleOnClick }: Props) => {
  const [ liked, setLiked ] = useState(false)

  const toggleLike = () => {
    setLiked(!liked)
    handleOnClick()
  }

  if (liked) return (<AiFillHeart color="#ff6b81" size={20} onClick={toggleLike}/>)
  return <AiOutlineHeart size={20} onClick={toggleLike}/>
}

export default Like
