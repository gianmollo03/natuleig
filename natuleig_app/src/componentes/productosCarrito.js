import { HStack, Image, Text } from "@chakra-ui/react"

export const ProductoCarrito = (props) =>{
    return(
        <HStack key={props.id} boxShadow='lg' p='6' rounded='md' spacing={10} bg='white'>
        <Image src={props.image} w='100px'></Image>
        <Text as='b'>{props.nombre}</Text>
        <Text as='b'>{props.precio}</Text>
        <Text as='b'>{props.cantidad}</Text>
    </HStack>
    
    )}
    
