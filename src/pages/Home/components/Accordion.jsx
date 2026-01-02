import { useState } from "react";

export default function Accordion({item}) {
  
  const {id, question, answer} = item;
  const [accordion, setAccordion] = useState(false);

  return (
    <div key={id}>
      <h2 id="accordion-flush-heading-1">
        <button onClick={() => setAccordion(!accordion)} type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default border-gray-200 dark:text-gray-400 dark:border-gray-700 gap-3" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
          <span className="text-xl text-slate-900 dark:text-white">{question}</span>
          <svg data-accordion-icon className={`w-5 h-5 shrink-0 ${!accordion && 'rotate-180'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7"/></svg>
        </button>
      </h2>
      {accordion && (
        <div id="accordion-flush-body-1"  aria-labelledby="accordion-flush-heading-1">
          <div className="py-5 border-b border-default text-body">
            <p className="text-lg mb-2 text-gray-500 dark:text-gray-400">{answer}</p>
          </div>
        </div>)
      }
    </div>
  )
}
