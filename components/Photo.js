import Image from 'next/image'
import {useState} from 'react'
import classNames from 'classnames'

const Photo = (props) => {

  const [loaded, setLoaded] = useState(false);

  let color1 = props.color1 ?? '#d8cbbe',
    color2 = props.color2 ?? '#ffffff',
    color3 = props.color3 ?? '#e6ceb8';

    return (
      <div 
        className="min-h-screen w-screen object-cover top-0 fixed z-0">
        <div 
          className={classNames("h-screen w-screen top-0 absolute z-20 opacity-100 transit", { 'fadeIn': loaded })} style={{
            background: `linear-gradient(62deg,  ${color1},${color2},${color3})`
          }}></div>
        {props.dark ? (
          <div className="h-screen w-screen bg-white bg-opacity-25 top-0 absolute z-10"></div>
        ) : null}
        {props.light ? (
          <div className="h-screen w-screen bg-black bg-opacity-25 top-0 absolute z-10"></div>
        ) : null}

        <Image
          className={"h-screen w-screen object-cover top-0 absolute"}
          src={props.src}
          alt={props.description}
          fill={true}
          priority
          onLoad={() => setLoaded(true)}
        />
        <img
        />
        <div className="h-min font-bold uppercase right-2 bottom-0 absolute z-15 opacity-70">© {props.name}</div>
      </div>
    );
}
export default Photo