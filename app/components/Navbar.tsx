import React from 'react'
import Link from "next/link";
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
        <nav className="flex justify-between items-center">
            <Link className='flex items-center' href="/">
                <Image  src="/box.png" alt="logo" width={50} height={10} />
                <span className="text-3xl font-black pl-4">Order Scheduler</span>
            </Link>
        
            <div className="flex item-center gap-5 text-black text-lg">
                <Link href="/">
                    <button>View Dashboard</button>
                </Link>
                <Link href="/orders">
                    <button>Manage Orders</button>
                </Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar;