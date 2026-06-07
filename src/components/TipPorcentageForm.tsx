import type { Dispatch } from "react";
import type { OrderActions } from "../reducers/order-reducer";
const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

type TipPorcentageFormProps = {
  dispatch: Dispatch< OrderActions>;
  tip: number
}

export default function TipPorcentageForm({ dispatch, tip } : TipPorcentageFormProps) {
  return <div className="border-t border-slate-200 pt-5">
    <h3 className="font-black text-xl mb-4">Propina:</h3>
    <form className="flex flex-wrap gap-4">
      { tipOptions.map( tipOption => (
        <div key={tipOption.id} className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full cursor-pointer hover:bg-slate-200 transition-colors">
          <label className="cursor-pointer font-medium" htmlFor={tipOption.id}>{ tipOption.label }</label>
          <input 
            id={tipOption.id}
            type="radio"
            name="tip"
            value={tipOption.value}
            // onChange={ () => setTip(tip.value)}
            onChange={ e => dispatch({ type: "add-tip", payload: { value: +e.target.value } })}
            checked={tipOption.value === tip}
          />
        </div>
      ) ) }
      <div>

      </div>
    </form>
  </div>;
}
