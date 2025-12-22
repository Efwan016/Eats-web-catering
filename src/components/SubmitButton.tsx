import React, { ReactNode } from 'react'
import { useFormStatus } from 'react-dom';

type Props = {
    children: ReactNode;
    overrideClassname?: (isPending: boolean) => string[],
    pendingText?: string;
}


function SubmitButton({children, overrideClassname, pendingText}: Props) {
    const{pending} = useFormStatus();
    let className = [
        "rounded-full flex items-center justify-center px-6 py-3 font-bold text-sm transition-all duration-300", 
        pending ? "cursor-not-allowed bg-slate-100 text-slate-400" : "bg-gray-600 text-white hover:bg-amber-600 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 active:scale-95" 
    ];

    if (overrideClassname) {
        className = overrideClassname(pending);
    }

  return (
    <button
              type="submit"
              className={className.join(" ")} 
              disabled={pending}
              aria-disabled={pending}
              aria-busy={pending}
            >
              {
                pending ? (
                  <span className="flex items-center gap-x-2">
                    <svg className="animate-spin h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {pendingText || "Processing..."}
                  </span>
                ) : children
              }
            </button>
  )
}

export default SubmitButton