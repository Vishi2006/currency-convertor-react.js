import React , {useId} from 'react';
//useId is hook for generating unique Id's that can be passed to accessibilty attributes.
 
function Input({
    //below these values are taken as an input from the user, because we use react components {i can pass these values from app.js file}
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className=""
}) {
    const amountInputId = useId();

  return (
    <div className={`h-auto w-96 bg-transparent p-4 rounded-lg text-sm flex ${className}`}>
        <div className="w-1/2">
            <label htmlFor={amountInputId} className="text-white mb-2 inline-block">{label}</label>

            <input id={amountInputId} type="number" className="outline-none border-2 p-2 rounded-lg text-white text-l w-full bg-transparent py-1.5" placeholder="Amount" disabled={amountDisable} value={amount} onChange={ (event) => onAmountChange && onAmountChange(Number(event.target.value))}/>
            {/* i use to target an event on input field , when the value of input change the onAmountChange() is fired. and && is a simple checker to prevent my website to no crash in case of no event is targeted. */}
            
        </div>

        <div className="w-1/2 flex flex-wrap justify-end text-right">
            <p className="text-white mb-2 w-full" >Currency Type</p>

            <select className="rounded-lg px-1 py-1 cursor-pointer outline-none" value={selectCurrency} onChange={ (event) => onCurrencyChange && onCurrencyChange(event.target.value)} disabled={currencyDisable}>

                {/* here i applied a simpel loop on my currency, because this is not possible to write manually. */}
                {currencyOptions.map( (currency) => (
                    // there is a key in loop to make a good performance in react, because react assume that same work is doing again and agin.
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </select>
        </div>

    </div>
    
  )
}

export default Input;