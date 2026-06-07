import type { Dispatch } from "react";
import type { MenuItem } from "../types";
import type { OrderActions } from "../reducers/order-reducer";

type menuItemProps = {
  item: MenuItem;
  dispatch: Dispatch<OrderActions>
};
export default function MenuItem({ item, dispatch }: menuItemProps) {
  return (
    <button 
      className="bg-white border border-slate-200 w-full p-4 hover:border-indigo-400 hover:bg-indigo-50 flex justify-between rounded-xl transition-all hover:shadow-md active:scale-[0.98] group"
      onClick={()=>dispatch({ type: "add-item", payload: {item} })}>

      <p className="text-lg font-medium text-slate-700 group-hover:text-indigo-700">{item.name}</p>
      <p className="font-black text-emerald-600 text-lg">${item.price}</p>
    </button>
  );
}
