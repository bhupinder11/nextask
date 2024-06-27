import React, {useRef} from 'react'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}


const InputField = ({todo, setTodo, handleAdd}: Props) => {

    
const InputRef = useRef<HTMLInputElement>(null)

 return (
   <form className='flex flex-row-reverse md:w-1/2  relative items-center' onSubmit={(e) => {handleAdd(e); InputRef.current?.blur()}}>
    <input type="input" placeholder='Enter Here' className='w-full border rounded-3xl duration-75 px-5 py-2 text-xl focus:outline-none focus:shadow-custom-heavy shadow-inset-black' value={todo} onChange={(e) => setTodo(e.target.value)} ref={InputRef}/>
    <button type="submit" className='absolute w-9 h-8 m-2 rounded-3xl border-none text-xl bg-indigo-400 text-white shadow-inner hover:bg-indigo-500 hover:cursor-pointer transition-all duration-200 active:scale-50 active:transform'>Go</button>
   </form>
  )
}

export default InputField