function List({ ...props }) {
    return (
      <li>
        <span>{props.title}</span>
        <span>{props.artist.name}</span>
        <span>{props.duration}</span>
        <span>{props.release}</span>
      </li>
    );
  }
  
  export default List;
  