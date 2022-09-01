import { useState } from "react";

const Contador = (props) => {
  const [contador, setContador] = useState(props.initial);

  function aumentarContador() {
    if (contador == props.stock) {
      setContador(contador);
    } else {
      setContador(contador + 1);
    }
  }
  function disminuirContador() {
    if (contador === props.initial) {
      setContador(contador);
    } else {
      setContador(contador - 1);
    }
  }

  return (
    <>
      <div>
        <button onClick={disminuirContador}>-</button>
        <p>{contador}</p>
        <button onClick={aumentarContador}>+</button>
      </div>
    </>
  );
};
export default Contador;
