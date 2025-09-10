import Link from 'next/link';
import SignInOutButton from '../ui/sign-in-out-button';

export default function Header() {
    return (
        <>
        <div className=" flex flex-row justify-between p-4 bg-zinc-300">
            <h1 className="mb-2 text-4xl">
            <Link href={`/`}>Home</Link>
          </h1>
            <SignInOutButton/>
        </div>
        <div className="border-b-zinc-900 "> </div>   
        </>
    )
}