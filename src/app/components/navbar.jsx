'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
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
          <div class="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown button
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
