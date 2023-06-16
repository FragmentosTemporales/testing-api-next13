import dynamic from "next/dynamic"
import Whatsapp from "./wsp";

const Footer = () => {
  const Map = dynamic(() => import('./map/MapView'), { ssr:false })
  return (
    <nav className="navbar navbar-expand-lg " style={{ background: "#a6a6a6" }}>
      <div className="container d-flex align-items-start">
        <div className="p-4 col-12 col-md-6">
          <h4 className="text-white">Contáctanos</h4>
          <div className="">
            <div className="col-lg-3 col-3 d-flex">
              <a href="https://www.instagram.com/erre_import/" target="blank">
                <i className="text-white bi bi-instagram"></i>
              </a>
            </div>
            <div className="col-lg-3 col-3 d-flex">
              <a
                href="https://www.facebook.com/fragmentos.temporales"
                target="blank"
              >
                <i className="text-white bi bi-facebook"></i>
              </a>
            </div>
            <div className="col-lg-3 col-3 d-flex">
              <a href="https://github.com/FragmentosTemporales" target="blank">
                <i class="text-white bi bi-github" />
              </a>
            </div>
            <div className="col-lg-3 col-3 d-flex">
              <a href="https://www.tiktok.com/@erre_import" target="blank">
                <i class="text-white bi bi-tiktok" />
              </a>
            </div>
          </div>
        </div>
        <div className="p-4 col-12 col-md-6 ">
          <h4 className="text-white">¿Dónde encontrarnos?</h4>
          <div className="">
            <Map />
          </div>
        </div>
      </div>
      <Whatsapp />
    </nav>
  );
};

export default Footer;
