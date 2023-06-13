function Card(props) {
  return (
    <div className="card col-md-3 py-4 m-2" key={props.id}>
      <img src={props.avatar} className="card-img-top" alt={props.id} />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.precio}
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Card;
