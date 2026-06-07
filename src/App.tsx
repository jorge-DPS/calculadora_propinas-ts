import { useReducer } from "react";
import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPorcentageForm from "./components/TipPorcentageForm";
import { menuItems } from "./data/db";
import { initialState, orderReducer } from "./reducers/order-reducer";

function App() {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  return (
    <div className="bg-slate-50 min-h-screen font-sans antialiased text-slate-900">
      <header className="bg-indigo-700 py-10 shadow-lg mb-10">
        <h1 className="text-center text-4xl font-black text-white">
          Terminal de Ventas
        </h1>
      </header>

      <main className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-5 pb-20">
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
          <h2 className="text-3xl font-black text-slate-800 border-b pb-4">Menú de Productos</h2>
          <div className="space-y-3 mt-8">
            {menuItems.map((item) => (
              <MenuItem 
                key={item.id} 
                item={item} 
                dispatch={dispatch} 
              />
            ))}
          </div>
        </div>
        <div className="bg-white border border-slate-200 p-8 rounded-2xl space-y-10 shadow-xl flex flex-col">
          {state.order.length > 0 ? (
            <>
              <OrderContents 
                order={state.order} 
                dispatch={dispatch} 
              />
              <TipPorcentageForm
                dispatch={dispatch} 
                tip={state.tip} 
              />
              <OrderTotals 
                order={state.order} 
                tip={state.tip} 
                dispatch={dispatch} 
              />
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center py-20 text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p className="text-xl font-bold">La orden está vacía</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
