function Album({ ...props }) {
  console.log('props', props);
  return (
    <div>
      <img src={props.cover_medium} alt={props.classNametitle}/>
      <h2>{props.title}</h2>
    </div>
  );
}

export default Album;
