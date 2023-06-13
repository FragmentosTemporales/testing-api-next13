const Whatsapp = () => {
    return (
      <div
        className="shadow"
        style={{
          position: "fixed",
          width: "55px",
          height: "55px",
          lineHeight: "55px",
          bottom: "30px",
          right: "30px",
          background: "#0df053",
          color: "#fff",
          borderRadius: "50px",
          textAlign: "center",
          fontSize: "30px",
          zIndex: "1",
        }}
      >
        <a
          href="https://api.whatsapp.com/send?phone=56956172015&text=Hola, vengo del sitio Erre Import y tengo una consulta..."
          target="blank"
        >
          <i className="text-white bi bi-whatsapp"></i>
        </a>
      </div>
    );
  };
  
  export default Whatsapp;