import Link from "next/link";

export default function MePage(){
    return (
        <div>
            <h1>this is a page about me</h1>
            <Link href='/'>
                go back to home
            </Link>
        </div>
    )
}