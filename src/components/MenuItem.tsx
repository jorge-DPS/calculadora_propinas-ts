import type { MenuItem } from "../types";

type menuItemProps = {
  item: MenuItem;
  addItem: (item : MenuItem) => void;
};
export default function MenuItem({ item, addItem }: menuItemProps) {
  return (
    <button 
      className="border-2 border-teal-400 w-full p-3 hover:bg-teal-200 flex justify-between"
      onClick={()=>addItem(item)}>

      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
}
