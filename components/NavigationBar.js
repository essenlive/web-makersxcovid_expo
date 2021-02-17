
const NavigationBar = (props) => {
    return(
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex cursor-pointer title-font font-medium items-center text-primary mb-4 md:mb-0">
                <span className="ml-3 text-xl">Tailblocks</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <a className="mr-5 cursor-pointer hover:text-gray-900">First Link</a>
                <a className="mr-5 cursor-pointer hover:text-gray-900">Second Link</a>
                <a className="mr-5 cursor-pointer hover:text-gray-900">Third Link</a>
                <a className="mr-5 cursor-pointer hover:text-gray-900">Fourth Link</a>
                </nav>
                <button className="inline-flex cursor-pointer items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                    Button
                </button>
            </div>
            </header>
    )
}

export default NavigationBar