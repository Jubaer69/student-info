"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home(props) {
    const idx = props.params.editstudent;
    const [name, setName] = useState('')
    const [roll, setRoll]  = useState('')
    const [group, setGroup] = useState('')
    const [section, setSection] = useState('')

    useEffect(() => {
        updated()
    }, [])

    const updated = async () => {
        let gg = await fetch('http://localhost:3000/api/hello/'+idx);
        gg = await gg.json()
        const hh = gg.result;

        setName(hh.name)
        setRoll(hh.roll)
        setGroup(hh.group)
        setSection(hh.section)
    }

    const updx = async () => {
        if(name == '' || roll == '' || group == '' || section == ""){
            alert('somethig went wrong')
        }
        else{
            const jj = await fetch(`http://localhost:3000/api/hello/${idx}`, {
            method: 'put',
            body: JSON.stringify({name, roll, group, section})
        })
            alert('student updated')
            return await jj.json()
        }
    }



  

  return (
    <div>
      <h1 className='text-[50px] text-red-700 font-bold text-center'>Update Student Data</h1>
      <div>
        <div className='flex flex-col items-center space-y-4 mt-16'>
          <input value={name} className='w-[300px] px-3 h-[40px] bg-transparent text-[18px] text-black outline outline-1 outline-black' type='text' placeholder='Enter student name' onChange={(e) => setName(e.target.value)} />
          <input value={roll} className='w-[300px] px-3 h-[40px] bg-transparent text-[18px] text-black outline outline-1 outline-black' type='text' placeholder='Enter student roll' onChange={(e) => setRoll(e.target.value)} />
          <input value={group} className='w-[300px] px-3 h-[40px] bg-transparent text-[18px] text-black outline outline-1 outline-black' type='text' placeholder='Enter student group' onChange={(e) => setGroup(e.target.value)} />
          <input value={section} className='w-[300px] px-3 h-[40px] bg-transparent text-[18px] text-black outline outline-1 outline-black' type='text' placeholder='Enter student section' onChange={(e) => setSection(e.target.value)} />
          <button onClick={() => updx()} className='w-[300px] h-[40px] bg-green-500 text-white text-[18px] rounded-md'>Update data</button>
        </div>
      </div>
      <Link href='/studentlist'>Go to student list page</Link>
    </div>
  )
}