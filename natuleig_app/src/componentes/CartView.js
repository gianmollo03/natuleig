import { Center, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useCarrito } from "../context/CartContext";

export const CartView = () => {
  const { carrito } = useCarrito();
  console.log(carrito);
  return (
    <VStack>
      <Center>
        {carrito.map((prod) => {
          return (
            <HStack
              key={prod.id}
              boxShadow="lg"
              p="6"
              rounded="md"
              spacing={10}
              bg="white"
            >
              <Image src={prod.image} w="100px"></Image>
              <Text as="b">{prod.nombre}</Text>
              <Text as="b">{prod.cantidad}</Text>
              <Text as="b">{prod.precio}</Text>
            </HStack>
          );
        })}
      </Center>
    </VStack>
  );
};
