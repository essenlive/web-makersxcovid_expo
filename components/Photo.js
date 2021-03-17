const Photo = (props) => {
    return (
      <div className="min-h-screen w-screen object-cover top-0 fixed z-0">
        {props.dark ? (
          <div className="h-screen w-screen bg-white bg-opacity-25 top-0 absolute z-10"></div>
        ) : null}
        {props.light ? (
          <div className="h-screen w-screen bg-black bg-opacity-25 top-0 absolute z-10"></div>
        ) : null}
        <img
          className="h-screen w-screen object-cover top-0 absolute"
          src={props.src}
          alt={props.description}
        />
        <div className="h-min font-bold uppercase right-16 bottom-8 absolute z-20 opacity-70">© {props.name}</div>
      </div>
    );
}
export default Photo