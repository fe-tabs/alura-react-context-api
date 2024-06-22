import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);
  const [quantidadeProdutos, setQuantidadeProdutos] = useState(0);
  const [valorTotalCarrinho, setValorTotalCarrinho] = useState(0);

  return(
    <CartContext.Provider value={{
      carrinho,
      setCarrinho,
      quantidadeProdutos,
      setQuantidadeProdutos,
      valorTotalCarrinho,
      setValorTotalCarrinho
    }}>
      {children}
    </CartContext.Provider>
  );
}