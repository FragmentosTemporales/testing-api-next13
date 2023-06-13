import Whatsapp from "./wsp";
import MapView from "./map/MapView";

const Footer = () => {
  return (
    <nav
      className="navbar navbar-expand-lg "
      style={{background: "#a6a6a6"}}
    >
      <div className="container flex-column p-4">
        <div className="row  col-12">
        <div className="p-4 col-12 col-md-6 ">
            <h4 className="text-white">¿Dónde encontrarnos?</h4>
            <div className="">
              <MapView />
            </div>
          </div>
          <div className="p-4 col-12 col-md-12  text-center">
            <p className="text-white">
              Erre Import. - San Miguel 851 - Tel. 56 9 56172015
            </p>
          </div>
        </div>
      </div>
      <Whatsapp/>
    </nav>
  );
};

export default Footer;
