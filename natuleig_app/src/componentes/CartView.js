import {
  Button,
  Center,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { useCarrito } from "../context/CartContext";
import { CloseIcon } from "@chakra-ui/icons";
import { Usuarios } from "./carritoUsuarios";

export const CartView = () => {
  const { carrito, eliminarItemCarrito, obtenerPrecioTotal } = useCarrito();
  console.log(carrito);
  return (
    <VStack>
      <Center className="carritoContenedor">
        <TableContainer>
          <Table>
            <TableCaption>Carrito de compras</TableCaption>
            <Thead>
              <Tr>
                <Th>Imagen</Th>
                <Th>Nombre</Th>
                <Th>Precio unitario</Th>
                <Th>Cantidad</Th>
                <Th>Precio final</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {carrito.map((prod) => {
                return (
                  <>
                    <Tr>
                      <Td>
                        <Image src={prod.image} width="100px"></Image>
                      </Td>
                      <Td>
                        <Text as="b">{prod.nombre}</Text>
                      </Td>
                      <Td>
                        <Text as="b">${prod.precio}</Text>
                      </Td>
                      <Td>
                        <Text as="b">{prod.cantidad}</Text>
                      </Td>
                      <Td>
                        <Text as="b">${prod.precio * prod.cantidad}</Text>
                      </Td>
                      <Td>
                        <Button onClick={() => eliminarItemCarrito(prod.id)}>
                          <CloseIcon></CloseIcon>
                        </Button>
                      </Td>
                    </Tr>
                  </>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
      <Center>
        <Text as="b">Total: ${obtenerPrecioTotal()}</Text>
      </Center>
      <div>
        <Usuarios></Usuarios>
      </div>
    </VStack>
  );
};
