import { createContext, useEffect, useMemo, useReducer, useState } from "react";
import { cartReducer } from "../reducers/cartReducer";

export const CartContext = createContext();

const initiaState = [];

export const CartProvider = ({ children }) => {
  const [carrinho, dispatch] = useReducer(cartReducer, initiaState);
  const [quantidadeProdutos, setQuantidadeProdutos] = useState(0);
  const [valorTotalCarrinho, setValorTotalCarrinho] = useState(0);

  const { novoTotal, novaQuantidade } = useMemo(()=> {
    return carrinho.reduce(
      (contador, produto) => ({
        novaQuantidade: contador.novaQuantidade + produto.quantidade,
        novoTotal: contador.novoTotal + produto.preco * produto.quantidade,
      }),
      {
        novaQuantidade: 0,
        novoTotal: 0,
      }
    );
  });

  useEffect(() => {
    setQuantidadeProdutos(novaQuantidade);
    setValorTotalCarrinho(novoTotal);
  }, [carrinho, setQuantidadeProdutos, setValorTotalCarrinho]);

  return(
    <CartContext.Provider value={{
      carrinho,
      dispatch,
      quantidadeProdutos,
      valorTotalCarrinho,
    }}>
      {children}
    </CartContext.Provider>
  );
}