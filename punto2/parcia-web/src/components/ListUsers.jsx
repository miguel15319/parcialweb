import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "../styles/ListUsers.css"

const ListUsers = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);

  const handleProduc = async () => {
    await axios
      .get("http://89.116.25.43:3500/api/productos/listar", {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((resp) => {
        console.log(resp);
        setData(resp.data.result);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status == 400) {
          Swal.fire("Información!", err.response.data.message, "error");
        } else if (err.response.status == 401) {
          Swal.fire("Información!", err.response.data.message, "error");
        } else {
          Swal.fire("Información!", "Ocurrio un error!", "error");
        }
      });
    };
    useEffect(() => {
      handleProduc();
    }, []);

    return (
      <div className="g">
        {data.map((producto, index) => (
          <div className="producto" key={producto._id}>
            <div className="producImg">
              <img src={producto.imagen} alt={producto.descripcion} />
            </div>
            <div className="nombre">{`${producto.descripcion}`}</div>
            <div className="precio">{`$${producto.valor}`}</div>
          </div>
        ))}
      </div>
    );
  };

export default ListUsers;
