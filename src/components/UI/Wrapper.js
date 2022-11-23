function Wrapper(props) {
  return (
    <section className="Wrapper" id={props.id}>
      {props.children}
    </section>
  );
}

export default Wrapper;
