interface PlaceEntryProps {
    title: string;
    place: string;
    body: string;
    visited: number;
    link: string;
    postDate: { month: string; day: number; year: number };
  }

  
  function PlaceEntry(props: PlaceEntryProps): JSX.Element {
    return (
      <section>
        <h2>{props.title}</h2>
        <p>
          <i>Place: {props.place}</i>
        </p>
        <p>{props.body}</p>
        <ul>
          <li>Number of times visited: {props.visited}</li>
          <li>Link: {props.link}</li>
        </ul>
        <p>
          <small>
            Posted: {props.postDate.month} {props.postDate.day},{" "}
            {props.postDate.year}
          </small>
        </p>
      </section>
    );
  }
  
  export default PlaceEntry;