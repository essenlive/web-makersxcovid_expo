import Link from 'next/link'

const NavigationBar = (props) => {
    return (
      <header className="text-black body-font relative top-0 w-full z-10">
        <div className="flex flex-wrap p-4 flex-col md:flex-row items-center uppercase ">
          <Link href="/">
            <span className="flex cursor-pointer title-font uppercase font-black items-center mb-4 md:mb-0">
              <span className="text-xl">MakersCovid.Paris</span>
            </span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-bold">
            <Link href="/themes/urgency">
              <span className="border-transparent border-b-4 hover:border-black mr-5 cursor-pointer hover:text-gray-900">
                Urgence
              </span>
            </Link>
            <Link href="/themes/production">
              <span className="border-transparent border-b-4 hover:border-black mr-5 cursor-pointer hover:text-gray-900">
                Production
              </span>
            </Link>
            <Link href="/themes/network">
              <span className="border-transparent border-b-4 hover:border-black mr-5 cursor-pointer hover:text-gray-900">
                Réseau
              </span>
            </Link>
            <Link href="/themes/tomorrow">
              <span className="border-transparent border-b-4 hover:border-black mr-5 cursor-pointer hover:text-gray-900">Demain</span>
            </Link>
          </nav>
          <Link href="/about">
            <button className="inline-flex cursor-pointer items-center border-4 py-1 px-3 focus:outline-none hover:bg-white border-black text-base mt-4 md:mt-0 font-bold">
              En savoir plus
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </Link>
        </div>
      </header>
    );
}

export default NavigationBar