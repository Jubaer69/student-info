import Del from "@/lib/Del";
import Link from "next/link";
import { usePathname } from "next/navigation";

async function stList(){

    let bal = await fetch('http://localhost:3000/api/hello', {cache: "no-cache"});
    let hh = await bal.json()
    return hh.result
}

export default async function main(){
    const gg = await stList();
    const jub = gg;
    return(
        <div>
            <h1 className='text-[50px] text-red-700 font-bold text-center'>Student List</h1>
            <table className="border border-black w-[380px] mx-auto mt-16 lg:w-[450px]">
                <thead className="font-bold">
                    <tr className="text-center">
                        <td className="border border-black">Name</td>
                        <td className="border border-black">Roll</td>
                        <td className="border border-black">Group</td>
                        <td className="border border-black">Section</td>
                        <td className="border border-black">Action</td>
                    </tr>
                </thead>

                <tbody>
                    {jub.map(item => {
                        return <tr className="text-center border border-black">
                        <td className="border border-black">{item.name}</td>
                        <td className="border border-black">{item.roll}</td>
                        <td className="border border-black">{item.group}</td>
                        <td className="border border-black">{item.section}</td>
                        <td><Link className="mr-3" href={`/studentlist/${item._id}`}>edit</Link>
                        <Del id={item._id} /></td>
                    </tr>
                    })}
                    
                </tbody>
            </table>
            <Link href='/'>Go to main page</Link>

        </div>
    )
}