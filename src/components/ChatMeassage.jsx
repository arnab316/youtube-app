
import { BiUserCircle } from "react-icons/bi";
import { faker } from '@faker-js/faker';
const ChatMeassage = ({name, message}) => {
  return (
    <div className=" flex items-center shadow-sm p-2">
       <img className="h-5"
       src={ faker.image.avatar()} alt="user" /> 
       {/* <BiUserCircle className="h-7"/> */}
       <span className="font-bold">{name} </span>
       <span>{message}</span>
    </div>
  )
}

export default ChatMeassage
