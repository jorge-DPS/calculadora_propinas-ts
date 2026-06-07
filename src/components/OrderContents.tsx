import type { Dispatch } from "react";
import { formatCurrency } from "../helpers";
import type { OrderItem } from "../types";
import type { OrderActions } from "../reducers/order-reducer";

type OrderContentsProps = {
  order: OrderItem[];
  dispatch: Dispatch<OrderActions>;
};

export default function OrderContents({ order, dispatch }: OrderContentsProps) {
  return (
    <div>
      <h2 className="font-black text-3xl text-slate-800">Resumen de Consumo</h2>
      <div className="space-y-3 mt-8">
        {order.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-slate-50 p-4 rounded-xl border border-slate-100"
          >
            <div>
              <p className="text-lg font-bold text-slate-700">
                {item.name} - {formatCurrency(item.price)}
              </p>
              <p className="text-sm font-bold text-indigo-600">Cant: {item.quantity}</p>
              <p className="text-slate-400 text-sm">
                Subtotal: {formatCurrency(item.price * item.quantity)}
              </p>
            </div>
            <button
              className="bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 font-black transition-colors shadow-sm flex items-center justify-center"
              onClick={() => dispatch({ type: "remove-item", payload: {id: item.id} })}>
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
