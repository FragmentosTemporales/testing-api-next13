import Cards from "./components/cards";

function Page() {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-lg-3 text-dark d-flex align-items-center justify-content-center add shadow">
          <img
            style={{ width: "100%" }}
            src="https://i.pinimg.com/736x/54/bf/b0/54bfb0dad775dd4de543cb9d3f346b80.jpg"
            alt="add"
          />
        </div>
        <div className="col-lg-9 justify-content-around">
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default Page;
