import React from "react";

import { VStack, Button, Text, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
export const Item = ({ producto }) => {
  return (
    <VStack
      boxShadow="lg"
      p="6"
      rounded="md"
      bg="white"
      m="15px"
      minWidth="275px"
      className="itemContainer"
    >
      <div className="imagenContainer">
        <Image
          className="imagenItem"
          src={producto.image}
          alt={producto.nombre}
          w="200px"
          height="200px"
        />
      </div>
      <div>
        <div className="nombreItemContainer">
          <Text>{producto.nombre}</Text>
        </div>
        <div className="precioItemContainer">
          <Text>{producto.precio}$</Text>
          <Button colorScheme="pink" size="xs">
            <NavLink to={`producto/${producto.id}`} className="linkDetalle">
              Ver Detalle
            </NavLink>
          </Button>
        </div>
      </div>
    </VStack>
  );
};
