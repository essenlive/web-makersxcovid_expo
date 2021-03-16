import Link from 'next/link'

const NavigationBar = (props) => {
    return(
        <header className="text-gray-600 body-font fixed top-0 w-full z-50">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-black uppercase ">
                <Link href="/">
                    <a className="flex cursor-pointer title-font text-black uppercase font-black items-center mb-4 md:mb-0">
                        <span className="ml-3 text-xl">MakersCovid.Paris</span>
                    </a>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-bold">
                    <Link href="/urgency"><a className="mr-5 cursor-pointer hover:text-gray-900">Urgence</a></Link>
                    <Link href="/production"><a className="mr-5 cursor-pointer hover:text-gray-900">Production</a></Link>
                    <Link href="/network"><a className="mr-5 cursor-pointer hover:text-gray-900">Réseau</a></Link>
                    <Link href="/tomorrow"><a className="mr-5 cursor-pointer hover:text-gray-900">Demain</a></Link>
                </nav>
                <Link href="/about">
                    <button className="inline-flex cursor-pointer items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 font-bold">
                        En savoir plus
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"  className="w-4 h-4 ml-1" >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </Link>
            </div>
            </header>
    )
}

export default NavigationBar