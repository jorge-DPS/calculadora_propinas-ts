import { useMemo } from "react";
import type { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
  order: OrderItem[],
  tip: number,
  placeOrder: () => void
}
export default function OrderTotals({ order, tip, placeOrder } : OrderTotalsProps) {
  //useMemo es un hook que nos permite memorizar el resultado de una función, para evitar que se ejecute cada vez que el componente se renderiza, solo se ejecuta cuando las dependencias cambian, en este caso el order
  const subTotalAmount = useMemo(() => order.reduce( (total, item) => total + (item.quantity * item.price), 0 ), [order])
  const tipAmount = useMemo( () => subTotalAmount * tip, [tip, order])
  const totalAmount = useMemo( () => subTotalAmount + tipAmount, [tip, order])
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propina</h2>
        <p>
          subtotal a pagar: {" "}
          <span className="font-bold">{ formatCurrency(subTotalAmount) }</span>
        </p>
        <p>
          Propina: {" "}
          <span className="font-bold">{ formatCurrency(tipAmount) }</span>
        </p>
        <p>Total a pagar: {" "}
          <span className="font-bold">{ formatCurrency(totalAmount) }</span>

        </p>
      </div>
      <button 
        type="button"
        className="w-full bg-black p-3 uppercase text-white font-bold mt-10 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-black/60"
        disabled={totalAmount === 0}
        onClick={placeOrder}
      >
        Guardar Orden
      </button>
    </>
  );
}
