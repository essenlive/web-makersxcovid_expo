import Link from "next/link";

const Caption = (props) => {
  return (
    <div className="text-base w-1/1 md:w-1/3">
      <div className="p-4 border-4 hover:bg-white border-black">
        <h3 className="uppercase font-black mb-4">
          {props.theme}
        </h3>
        <p className="font-normal">
          {props.description}
        </p>
      </div>
      <div className="flex flex-row text-sm border-4 border-black mt-4">
        <Link href={props.prevUrl}>
          <div className=" hover:bg-white p-4 font-bold w-2/5 inline-flex cursor-pointer items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Précédente
          </div>
        </Link>
        <div className=" hover:bg-white p-4 justify-center font-bold border-l-4 border-black w-1/5 inline-flex cursor-pointer items-center ">
          <Link href="/themes">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 ml-1 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
          </Link>
        </div>
        <Link href={props.nextUrl}>
          <div className=" hover:bg-white p-4 font-bold border-l-4 border-black w-2/5 inline-flex cursor-pointer items-center justify-center">
            Suivante
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Caption