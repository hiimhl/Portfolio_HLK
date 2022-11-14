function Card(props) {
  return (
    <section className="section" id={props.id}>
      {props.children}
    </section>
  );
}

export default Card;
