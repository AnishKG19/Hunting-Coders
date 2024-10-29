import React from 'react'
import Link from "next/link";

const Navbar = () => {
    return (

            <>

                <div className = 'justify-center gap-x-7 flex font-bold'>

                <div> <Link href="/"> Home </Link> </div>
                <div> <Link href="/about"> About </Link> </div>
                <div> <Link href="/contact"> Contact  </Link></div>
                <div> <Link href="/blog">  Blog  </Link> </div>
                </div>
            
            
            </>


        
        )
}

export default Navbar
