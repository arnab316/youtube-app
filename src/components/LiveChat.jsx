import { useEffect, useState } from 'react'
import ChatMeassage from './ChatMeassage'
import { faker } from '@faker-js/faker';
import { useDispatch, useSelector } from 'react-redux'
import {addMessage} from '../utils/chatSlice'
const LiveChat=()=> {
  const dispatch = useDispatch();
  const ChatMeassages = useSelector((store)=> store.chat.messages) ;
  const [liveMessages, setLiveMessages] = useState('')
  useEffect(()=>{
  const i= setInterval(()=>{
        dispatch(addMessage({
          name: faker.internet.userName(),
          message: faker.word.words(3)
        }))
      console.log('api pooling')
    },2000)
    return()=>{
      clearTimeout(i)
    }
  },[])
  return (<>
 <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">

   {ChatMeassages.map((c, i)=>(
 <ChatMeassage key={i} name={c.name} message={c.message}/>
      ))}
    </div>
    <form className='w-full  p-2  ml-2 border border-black'
    onSubmit={(e)=>{e.preventDefault();
    dispatch(
      addMessage({
        name:'Arnab ',
        message: liveMessages
      }),
      setLiveMessages('')
    )
    }}>
     
     
      <input className='w-96 px-2' type="text" 
      value={liveMessages}
      onChange={(e)=>{setLiveMessages(e.target.value)}}
      />
      <button className='p-2 mx-4 bg-green-100'>Submit</button>
    </form>
    </>
  )
}

export default LiveChat
