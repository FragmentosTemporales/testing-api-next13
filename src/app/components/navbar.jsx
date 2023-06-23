"use client";
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
      <div className="col col-6 d-flex justify-content-start p-4">
        <div className="d-flex align-items-center">
          <div class="dropdown">
            <button
              style={{ background: "#2b3651", color: "white" }}
              className="btn btn-secondary rounded-0 border-0 shadow-sm dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              MENU
            </button>
            <ul
              style={{ borderRadius: "0", minWidth: "300px" }}
              className="dropdown-menu"
            >
              <li>
                <Link
                  className="dropdown-item"
                  style={{ textDecoration: "none" }}
                  href="/"
                >
                  <h6>INICIO</h6>
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  style={{ textDecoration: "none" }}
                  href="/store"
                >
                  <h6>TIENDA</h6>
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  style={{ textDecoration: "none" }}
                  href="/about"
                >
                  <h6>INFORMACION</h6>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col col-6 d-flex justify-content-end p-4">
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
    </div>
  );
}

export default Navbar;
