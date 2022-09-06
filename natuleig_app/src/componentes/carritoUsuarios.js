import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useCarrito } from "../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import database from "./firebase";

export const Usuarios = () => {
  const [nombre, setNombre] = useState("");

  const [apellido, setApellido] = useState("");

  const [usuarios, setUsuarios] = useState([]);
  const [email, setEmail] = useState("");
  const { carrito, obtenerPrecioTotal } = useCarrito();

  const nombreCompleto = `${nombre} ${apellido}`;

  const handleOnChangeNombre = (e) => {
    e.preventDefault();
    const input = e.target;
    const value = input.value;
    setNombre(value);
  };

  const handleOnChangeApellido = (e) => {
    e.preventDefault();
    const input = e.target;
    const value = input.value;
    setApellido(value);
  };
  const handleOnChangeEmail = (e) => {
    e.preventDefault();
    const input = e.target;
    const value = input.value;
    setEmail(value);
  };
  const handleConfirm = () => {
    const usuario = { nombre, apellido, email };
    const OC = {
      usuario: usuario,
      items: carrito,
      total: obtenerPrecioTotal(),
      date: new Date(),
    };
    console.log(OC);
    const orderCollection = collection(database, "OCs");
    const consulta = addDoc(orderCollection, OC);
    consulta
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div>
        <FormControl isRequired>
          <FormLabel>Nombre</FormLabel>
          <Input
            placeholder="Nombre"
            value={nombre}
            onChange={handleOnChangeNombre}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Apellido</FormLabel>
          <Input
            placeholder="Apellido/s"
            value={apellido}
            onChange={handleOnChangeApellido}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Email"
            type="email"
            onChange={handleOnChangeEmail}
          />
        </FormControl>
        <Button onClick={handleConfirm}>Confirmar orden de compra</Button>
      </div>
    </>
  );
};
