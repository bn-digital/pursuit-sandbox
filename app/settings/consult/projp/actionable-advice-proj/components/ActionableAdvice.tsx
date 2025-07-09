// app/settings/consult/projp/actionable-advice-proj/components/ActionableAdvice.tsx
// version: 1
// author: [name of developer/company]

// We use 'any' intentionally, as this is a placeholder.
// The consultant is responsible for implementing the correct, strong types.
/* eslint-disable @typescript-eslint/no-explicit-any */
interface ActionableAdviceProps {
  data: any;
}

/**
 * This is a placeholder for the real ActionableAdvice component.
 * It simply renders the raw JSON data it receives.
 */
export default function ActionableAdvice({ data }: ActionableAdviceProps) {
  return (
    <div>
      <h3 className="text-md font-semibold text-neutral-600 mb-2">Rendered Component Output:</h3>
      {/* 
        The real ActionableAdvice UI will be built here.
        The consultant will replace this <pre> block with the actual component implementation.
      */}
      <pre className="bg-neutral-800 text-white p-4 rounded-md text-xs overflow-x-auto">
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </div>
  );
}
