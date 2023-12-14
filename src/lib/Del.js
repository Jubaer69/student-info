"use client"
import { usePathname, useRouter } from "next/navigation"

export default function Del({id}){


    let bal = useRouter()

    const delx = async () => {
        let jj = await fetch(`http://localhost:3000/api/hello/${id}`, {
            cache: "no-cache",
            method: 'delete'
        })
        jj = await jj.json()
        if(jj.sucess){
            alert('student deleted')
        }
        bal.push('/studentlist')
    }
    return <button onClick={() => delx()}>delete</button>
}