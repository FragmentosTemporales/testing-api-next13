import Image from "next/image";
import Link from "next/link";
function Navbar() {
  return (
    <div
      className="d-flex justify-content-center shadow sticky-top"
      style={{ background: "#a6a6a6" }}
    >
      <div className="col col-4 d-flex justify-content-start p-4">
        <div className="d-flex align-items-center">
          <Link href="/about">
            <h5 className="text-white">ABOUT</h5>
          </Link>
        </div>
      </div>
      <div className="col col-4 d-flex justify-content-center">
        <Link href="/">
          <Image
            priority
            src="/images/Avatar.jpeg"
            className=""
            height={100}
            width={100}
            alt="Logo"
          />
        </Link>
      </div>
      <div className="col col-4 d-flex justify-content-end p-4">
        <div className="d-flex align-items-center">
          <div className="dropdown">
            <button
              className="btn btn-success dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="text-white bi bi-cart"></i>
            </button>
            <ul className="dropdown-menu">
              <li>
                <p className="dropdown-item">
                  Action
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
