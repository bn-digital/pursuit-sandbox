// app/settings/consult/projp/actionable-advice-proj/components/ActionableAdviceClientSideForm.tsx
// version: 2

"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useState } from "react";
import { updateActionableAdviceAction } from "../actions/actionableAdviceAction";
import ActionableAdvice from "./ActionableAdvice";

// We use 'any' as the consultant is responsible for final typing.
/* eslint-disable @typescript-eslint/no-explicit-any */
interface FormProps {
  defaultJsonString: string;
  defaultComponentData: any;
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="px-4 py-2 bg-rose-500 text-white font-semibold rounded-md hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 self-start disabled:bg-neutral-400 disabled:cursor-not-allowed"
      aria-disabled={pending}
    >
      {pending ? "Updating..." : "Update Component"}
    </button>
  );
}

export default function ActionableAdviceClientSideForm({
  defaultJsonString,
  defaultComponentData,
}: FormProps) {
  const [state, formAction] = useFormState(updateActionableAdviceAction, null);
  const [componentData, setComponentData] = useState(defaultComponentData);

  useEffect(() => {
    if (state?.success && state.data) {
      setComponentData(state.data);
    }
  }, [state]);

  return (
    <div className="flex flex-col gap-8">
      {/* Form Card */}
      <div className="p-6 bg-white rounded-lg shadow-md border border-neutral-200">
        <h1 className="text-2xl font-bold mb-2">ActionableAdvice Sandbox</h1>
        <p className="text-neutral-600 mb-4">Enter JSON data below to see the component update.</p>
        <form action={formAction} className="flex flex-col gap-4">
          {state && !state.success && state.error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
              <p className="font-bold">Error</p>
              <p>{state.error}</p>
            </div>
          )}
          <div>
            <label htmlFor="jsonData" className="block text-sm font-medium text-neutral-700 mb-1">
              Component JSON Input
            </label>
            <textarea
              id="jsonData"
              name="jsonData"
              rows={24}
              className="block w-full p-2 border border-neutral-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500 font-mono text-sm"
              defaultValue={defaultJsonString}
            />
          </div>
          <SubmitButton />
        </form>
      </div>

      {/* Rendered Component Area (No extra wrapping divs) */}
      <ActionableAdvice data={componentData} />
    </div>
  );
}
