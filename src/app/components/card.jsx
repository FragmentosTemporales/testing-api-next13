import { useRouter } from "next/navigation";
function Card(props) {
  const router = useRouter()
  return (
    <div className="card col-lg-3 py-4 m-2" key={props.id}>
      <img src={props.first} className="card-img-top" alt={props.id} />
      <div className="card-body">
        <h6 className="card-title">{props.brand}</h6>
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.price}
        </p>
        <div className="d-flex justify-content-center">
        <button onClick={()=>router.push(`/product/${props.id}`)} className="btn btn-success">
          Leer más...
        </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
