import classNames from 'classnames'

const Section = (props) => {
  
  return (
    <div className={classNames("relative p-4 min-h-3/4s flex flex-col z-1", props.className)}>
      {props.children}
    </div>
  );
};

export default Section;
