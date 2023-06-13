import Whatsapp from "./wsp";

const Footer = () => {
  return (
    <div>
    <nav
      className="navbar navbar-expand-lg "
    >
      <div className="container flex-column p-4">
        <div className="row  col-12">
          <div className="p-4 col-12 col-md-12  text-center">
            <p className="text-white">
              Erre Import. - San Miguel 851 - Tel. 56 9 56172015
            </p>
          </div>
        </div>
      </div>
      <Whatsapp/>
    </nav></div>
  );
};

export default Footer;
