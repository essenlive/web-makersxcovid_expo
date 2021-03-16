const Footer = (props) => {
    return(
        <footer className="text-gray-600 body-font relative top-full w-full z-50">
            <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
               
                <span className="ml-3 text-l uppercase">Makerscovid.paris</span>
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">2020 —
                <a href="https://makerscovid.paris" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">contact</a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
     
                </span>
            </div>
        </footer>
    )
}
export default Footer