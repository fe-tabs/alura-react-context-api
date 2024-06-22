import React from "react";

import imagemCarrinho from "/assets/cart.svg";
import { useCartContext } from "@/hooks/useCartContext";

const BotaoCarrinho = ({ className }) => {
  const classesComuns = "btn ms-3";
  const { quantidadeProdutos } = useCartContext();

  return (
    <button
      className={`${classesComuns} ${className}`}
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#modalCarrinhoSuspenso"
      aria-controls="modalCarrinhoSuspenso"
    >
      <img src={imagemCarrinho} alt="ícone de um carrinho de supermercado" />
      {quantidadeProdutos !== 0 && (
        <span className="badge verde-limao">{quantidadeProdutos}</span>
      )}
    </button>
  );
};

export default BotaoCarrinho;
