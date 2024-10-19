import React, { useCallback, useEffect, useRef, useState } from 'react'

export default function App() {

  // These are the useStates used in this project : 
  const [length,setLength] =useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");

  // to change the color of the copy button :
  const [color,setColor] = useState('bg-blue-700');

  const [buttonText, setButtonText] = useState('Copy');



  // reference hook ( used to select the copied portion in the input)
  const passwordRef = useRef(null);


  // password generator method :
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for(let i = 1; i <= length;i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);

  },[length,numberAllowed,setPassword,charAllowed]);


  // use effect calls the function password Generoator :
  useEffect(() => {
    passwordGenerator();
  },[length,numberAllowed,charAllowed,passwordGenerator]);

  const copyPasswordToClipboard = useCallback(() => {

    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    
    window.navigator.clipboard.writeText(password);
  },[password]);


  const changecolor = () => {
    setColor('bg-orange-700')

    setTimeout(() => {
      setColor('bg-blue-700')
    }, 2000)
  }

  const handleClick = () => {
    setButtonText('Copied');

    setTimeout(() => {
      setButtonText('Copy')
    }, 2000);
  }


  const handelAllClick = () => {
    changecolor();
    handleClick();
    copyPasswordToClipboard();

  }



  return (
    <div className='w-full h-screen bg-zinc-900 py-5'>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
        type='text'
        value={password}
        placeholder='Password'
        className="outline-none w-full py-1 px-3"
        readOnly
        ref={passwordRef}
        />

        <button 

        onClick={handelAllClick}
        className={`outline-none ${color} text-white px-3 py-0.5 shrink-0`}          // copy
        > {buttonText} </button>
      </div>
    

      
      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input
        type='range'
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)}}
        />
          <label>Length: {length}</label>
        </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox" 
        defaultChecked={numberAllowed}
        id="numberInput"
        onChange={() => {
          setNumberAllowed((prev) => !prev);
        }} />
      <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>



        </div>

      
    </div>
    </div>
  )
}
