import React from 'react'
import { useState } from 'react'

const Crud = () => {
    const [identificacion, setIdentificacion] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [edad, setEdad] = useState("");
    const [sexo, setSexo] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [data, setData] = React.useState([]);
    


    const Almacenar = (e) => {
        e.preventDefault();

        if (!String(identificacion.trim())) {
            alert("El campo 'identificación' está vacio");
            return;
        }
        if (isNaN(identificacion)) {
            alert("En el campo 'identificación' no se han digitado valores numéricos");
            return true;
        }
        if (!nombre.trim()) {
            alert("El campo 'nombre' está vacio");
            return;
        }
        if (!apellido.trim()) {
            alert("El campo 'apellido' está vacio");
            return;
        }
        if (!String(edad.trim())) {
            alert("El campo 'edad' está vacio");
            return;
        }
        if (isNaN(edad)) {
            alert("En el campo 'edad' no se han digitado valores numéricos");
            return true;
        }
        if (!sexo.trim()) {
            alert("El campo 'sexo' está vacio");
            return;
        }
        if (!correo.trim()) {
            alert("El campo 'correo' está vacio");
            return;
        }
        if (!String(telefono.trim())) {
            alert("El campo 'telefono' está vacio");
            return;
        }
        if (isNaN(telefono)) {
            alert("En el campo 'telefono' no se han digitado valores numéricos");
            return true;
        }

        const idigual = data.find((x) => identificacion === x.identificacion);
        if (idigual !== undefined) {
            alert("¡La identificación ya se encuentra registrada!");
            return;
        }
        const correoigual = data.find((x) => correo === x.correo);
        if (correoigual !== undefined) {
            alert("¡El correo ya se encuentra registrado!");
            return;
        }
        const telefonoigual = data.find((x) => telefono === x.telefono);
        if (telefonoigual !== undefined) {
            alert("¡El telefono ya se encuentra registrado!");
            return;
        }


        setData([
            ...data,
            {
                identificacion,
                nombre,
                apellido,
                edad,
                sexo,
                correo,
                telefono,
            },
        ]);
        setIdentificacion("");
        setNombre("");
        setApellido("");
        setEdad("");
        setSexo("");
        setCorreo("");
        setTelefono("");
    };

    const eliminar = (tell) => {
        const aux = data.filter((item) => item.identificacion !== tell);
        setData(aux);
    };
    return (
        <div className="container">
            <h2>CRUD</h2>
            <p><b>RÚBRICA 20% - SAMUEL RODRÍGUEZ</b></p>
            <div className="row">
            <div className="col-3">
                    <h4>Agregar</h4>
                    <br />
                  

                    <form onSubmit={Almacenar}>

                        <h6>Identificación</h6>
                        <input

                            className="form-control mb-2 text-black"
                            type="text"
                            placeholder="Ingrese Identificación"
                            onChange={(e) => setIdentificacion(e.target.value)}
                            value={identificacion}
                        />
                        <h6>Nombre</h6>
                        <input
                            className="form-control mb-2 text-black"
                            type="text"
                            placeholder="Ingrese Nombre"
                            onChange={(e) => setNombre(e.target.value)}
                            value={nombre}
                        />
                         <h6>Apellido</h6>
                        <input
                            className="form-control mb-2 text-black"
                            type="text"
                            placeholder="Ingrese Apellido"
                            onChange={(e) => setApellido(e.target.value)}
                            value={apellido}
                        />
                        <h6>Edad</h6>
                        <input
                            className="form-control mb-2 text-black"
                            type="text"
                            placeholder="Ingrese edad"
                            onChange={(e) => setEdad(e.target.value)}
                            value={edad}
                        />
                        <h6>Sexo</h6>
                        <select
                            className="form-control mb-2 text-black"
                            placeholder="Seleccione su sexo"
                            onChange={(e) => setSexo(e.target.value)}
                            value={sexo}
                        >
                            <option value="" defaultChecked>Seleccione su sexo</option>
                            <option value="M">Masculino</option>
                            <option value="F">Femenino</option>
                        </select>
                        <h6>Correo</h6>
                        <input

                            type="text"
                            className="form-control mb-1 text-black"
                            placeholder="Ingrese su correo"
                            onChange={(e) => setCorreo(e.target.value)}
                            value={correo}
                        />
                        <h6>Telefono</h6>
                        <input

                            type="text"
                            className="form-control mb-2 text-black"
                            placeholder="Ingrese su telefono"
                            onChange={(e) => setTelefono(e.target.value)}
                            value={telefono}
                        />

                        <button className="btn btn-outline-primary" type="submit">Agregar</button>
                    </form>
                </div>
                <br />
                <div className="col-9">
                    <h4>Registros</h4>
                    <br />
                    <table className="table table-striped table-responsive table-dark table-responsive">
                        <caption>Lista de personas</caption>
                        <thead>
                            <tr>
                                <th>Identificación</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Edad</th>
                                <th>Sexo</th>
                                <th>Correo</th>
                                <th>Telefono</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((elemento) => (
                                <tr>
                                    <td>{elemento.identificacion}</td>
                                    <td>{elemento.nombre}</td>
                                    <td>{elemento.apellido}</td>
                                    <td>{elemento.edad}</td>
                                    <td>{elemento.sexo}</td>
                                    <td>{elemento.correo}</td>
                                    <td>{elemento.telefono}</td>
                                    <td>
                                        <button className="btn btn-outline-danger"
                                            onClick={() => eliminar(elemento.identificacion)}
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                
            </div>
        </div>
    );

}
export default Crud;