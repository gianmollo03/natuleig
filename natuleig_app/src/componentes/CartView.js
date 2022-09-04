import {
  Button,
  Center,
  Divider,
  HStack,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { useCarrito } from "../context/CartContext";
import { CloseIcon } from "@chakra-ui/icons";

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
                    {/* <HStack
                key={prod.id}
                boxShadow="lg"
                p="6"
                rounded="md"
                spacing={10}
                className="productoCarritoContenedor"
              >
                <div className="cartProductImage">
                  <Text as="b">Imagen</Text>
                  <Divider></Divider>
                  <Image src={prod.image} w="100px"></Image>
                </div>
                <div className="cartProductName">
                  <Text as="b">Nombre</Text>
                  <Divider></Divider>
                  <Text as="b">{prod.nombre}</Text>
                </div>
                <div className="cartProductQuantity">
                  <Text as="b">Cantidad</Text>
                  <Divider></Divider>
                  <Text as="b">{prod.cantidad}</Text>
                </div>
                <div className="cartProductPrice">
                  <Text as="b">Precio unitario</Text>
                  <Divider></Divider>
                  <Text as="b">${prod.precio}</Text>
                </div>
                <div className="cartProductTotal">
                  <Text as="b">Precio final</Text>
                  <Text as="b">${prod.precio * prod.cantidad}</Text>
                </div>
              </HStack> */}
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
                        <Button
                          onClick={() => eliminarItemCarrito(parseInt(prod.id))}
                        >
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
        <Button> Continuar Compra</Button>
      </div>
    </VStack>
  );
};
