const Section = (props) => {
  return (
    <div className="relative p-4 min-h-3/4s flex flex-col justify-around z-1">
      {props.children}
    </div>
  );
};

export default Section;
