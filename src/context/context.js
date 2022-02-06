import React,{useReducer,createContext} from 'react';

import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem("transactions")) || [{"amount":555,"category":"Travel","type":"Expense","date":"2022-01-07","id":"6c82b58d-3305-4192-9a6d-2227b3e80d38"},{"amount":333,"category":"Business","type":"Income","date":"2022-01-07","id":"42e3e172-3213-4568-bc43-189def073e7f"},{"amount":555,"category":"Investments","type":"Income","date":"2022-01-07","id":"32be2bf1-0180-4f36-a8d3-d92afd39694e"},{"amount":77,"category":"Investments","type":"Income","date":"2022-01-07","id":"cdbba8b1-2986-4289-9469-dabbf8dd97be"},{"amount":55,"category":"Car","type":"Expense","date":"2022-01-07","id":"859e28fc-8702-404f-bf90-63210cabf8af"}];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({children})=>{
    const [transactions, dispatch] = useReducer(contextReducer, initialState);
    const deleteTransaction = (id)=>{
        dispatch({
            type:"DELETE_TRANSACTION",
            payload:id
        });
    }

    const addTransaction = (transaction)=>{
        dispatch({
            type:"ADD_TRANSACTION",
            payload:transaction
        });
    }

    const balance = transactions.reduce((acc,currVal)=>{
        return (currVal.type === "Expense" ? acc-currVal.amount : acc+currVal.amount);
    },0);

    console.log(transactions);
    
    return(
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions,
            balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    );
}