"use client"

import Image from "next/image"
import Link from "next/link"
import { auth } from "@/auth"
import { signInAction, signOutAction } from "@/app/actions/auth"

const Navbar = async () => {
    const session = await auth()

  return (
    <div className="px-5 py-3 bg-white shadow-sm font-work-sans">
        <nav className="flex justify-between items-center">
            <Link href="/">
                <Image src="/logo.png" alt="logo" width={144} height={144} />
            </Link>

            <div className="flex items-center gap-5 text-black">
                {session && session?.user ? (
                    <>
                        <Link href="/startup/create">
                            <span>Create</span>
                        </Link>
                        
                        <form action={signOutAction}>
                            <button type="submit">
                                Sign Out
                            </button>
                        </form>

                        <Link href={`/user/${session.user.id}`}>
                            <span>{session?.user?.name}</span>
                        </Link>
                    </>
                )
                : (
                    <form action={signInAction}>
                        <button type="submit">
                            Sign In
                        </button>
                    </form>
                )}
            </div>
        </nav>
    </div>
  )
}

export default Navbar