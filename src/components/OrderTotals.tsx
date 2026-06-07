import { useMemo, type Dispatch } from "react";
import type { OrderItem } from "../types";
import { formatCurrency } from "../helpers";
import type { OrderActions } from "../reducers/order-reducer";

type OrderTotalsProps = {
  order: OrderItem[],
  tip: number,
  dispatch: Dispatch<OrderActions>
}
export default function OrderTotals({ order, tip, dispatch } : OrderTotalsProps) {
  
  // Consolidamos los cálculos en un solo objeto para mejorar la legibilidad y gestión de dependencias
  const { subTotalAmount, tipAmount, totalAmount } = useMemo(() => {
    const subTotal = order.reduce((total, item) => total + (item.quantity * item.price), 0);
    const tipAmt = subTotal * tip;
    const total = subTotal + tipAmt;
    return { subTotalAmount: subTotal, tipAmount: tipAmt, totalAmount: total };
  }, [order, tip]);

  return (
    <>
      <div className="space-y-3 bg-slate-50 p-6 rounded-2xl border border-slate-100">
        <h2 className="font-black text-2xl text-slate-800 mb-4">Caja</h2>
        <p className="text-lg text-slate-600">
          Subtotal: {" "}
          <span className="font-bold text-slate-800">{ formatCurrency(subTotalAmount) }</span>
        </p>
        <p className="text-lg text-slate-600">
          Propina: {" "}
          <span className="font-bold text-emerald-600">{ formatCurrency(tipAmount) }</span>
        </p>
        <p className="text-3xl text-slate-800 font-black border-t border-slate-200 pt-4">Total: {" "}
          <span className="text-indigo-600">{ formatCurrency(totalAmount) }</span>

        </p>
      </div>
      <button 
        type="button"
        className="w-full bg-indigo-600 hover:bg-indigo-700 p-4 uppercase text-white font-black mt-5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-all rounded-xl shadow-lg hover:shadow-indigo-200"
        disabled={totalAmount === 0}
        onClick={() => dispatch({ type: "place-order" })}
      >
        Guardar Orden
      </button>
    </>
  );
}
