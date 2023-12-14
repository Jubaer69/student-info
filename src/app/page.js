"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [name, setName] = useState('')
  const [roll, setRoll]  = useState('')
  const [group, setGroup] = useState('')
  const [section, setSection] = useState('')
  const [file, setFile] = useState()

  const addx = async () => {
    const data = await fetch('http://localhost:3000/api/hello', {
      method: "post",
      body: JSON.stringify({name, roll, group, section})
    });
    const gg = await data.json();

    if(gg.success){
      alert('Student added')
    }
    else{
      alert('something went wrong')
    }

    setName('')
    setRoll('')
    setGroup('')
    setSection('')
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    console.log(file)
    // const data = new FormData();
    // data.set("file", file)
    // const result = await fetch('api/upload', {
    //   method: "POST",
    //   body: data
    // })
    // console.log(data)
    const data = new FormData();
    data.set("file", file)
    const jub = await fetch('api/upload', {
      method: 'POST',
      body: data
    })
    console.log(jub)

  }

  return (
    <div>
      <h1 className='text-[50px] text-red-700 font-bold text-center'>Students Data</h1>
      <div>
        <div className='flex flex-col items-center space-y-4 mt-16'>
          <input value={name} className='w-[300px] px-3 h-[40px] bg-transparent text-[18px] text-black outline outline-1 outline-black' type='text' placeholder='Enter student name' onChange={(e) => setName(e.target.value)} />
          <input value={roll} className='w-[300px] px-3 h-[40px] bg-transparent text-[18px] text-black outline outline-1 outline-black' type='text' placeholder='Enter student roll' onChange={(e) => setRoll(e.target.value)} />
          <input value={group} className='w-[300px] px-3 h-[40px] bg-transparent text-[18px] text-black outline outline-1 outline-black' type='text' placeholder='Enter student group' onChange={(e) => setGroup(e.target.value)} />
          <input value={section} className='w-[300px] px-3 h-[40px] bg-transparent text-[18px] text-black outline outline-1 outline-black' type='text' placeholder='Enter student section' onChange={(e) => setSection(e.target.value)} />
          <button onClick={() => addx()} className='w-[300px] h-[40px] bg-green-500 text-white text-[18px] rounded-md'>Add student</button>
        </div>
      </div>
      <Link href='/studentlist'>Go to student list page</Link>

      <div>
        <h1>Upload image</h1>
        <form onSubmit={onSubmit}>
          <input type='file' name='file' onChange={(e) => setFile(e.target.files?.[0])} ></input>
          <button type='submit'>upload</button>
        </form>
      </div>
    </div>
  )
}
