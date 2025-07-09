// app/settings/consult/projp/actionable-advice-proj/page.tsx
// version: 3

import ActionableAdviceClientSideForm from "./components/ActionableAdviceClientSideForm";

const defaultComponentData = {
  error: {
    hasError: false,
    type: "",
    message: "",
  },
  actionableAdvice: {
    meetingContext: {
      meetingId: 1234,
      attendee: "Terry",
      dateTime: "11:30 am, Oct 2nd",
    },
    leadershipGoal: {
      style: "Transformational",
      trait: "Inspiring",
    },
    feedback: {
      originalStatement: {
        title: "What you said",
        text: "It might be good if you could aim to get that done by next week, but no worries if it's tricky— just let me know what you think.",
      },
      analysis: {
        title: "Why it matters",
        text: "You sidestepped tension. It may have been strategic — but you also risked leaving something unresolved that matters to your teammate.",
      },
      suggestion: {
        title: "Try this next time",
        text: "I need you to deliver that by end of next week. Let me know today if you see any blockers.",
      },
    },
  },
};

const defaultJsonString = JSON.stringify(defaultComponentData, null, 2);

// We define the other two states for reference display.
const noDataJsonString = JSON.stringify(
  {
    error: { hasError: false, type: "", message: "" },
    actionableAdvice: null,
  },
  null,
  2
);

const errorJsonString = JSON.stringify(
  {
    error: {
      hasError: true,
      type: "DATA_FETCH_FAILED",
      message: "Could not retrieve meeting data.",
    },
    actionableAdvice: null,
  },
  null,
  2
);

export default async function ActionableAdviceProjectPage() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
      <ActionableAdviceClientSideForm
        defaultJsonString={defaultJsonString}
        defaultComponentData={defaultComponentData}
      />

      <div className="mt-8 p-6 bg-white rounded-lg shadow-md border border-neutral-200">
        <h2 className="text-xl font-bold mb-4 text-neutral-800">Reference JSON Examples</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-neutral-700 mb-2">
              JSON for "No Data" State
            </h3>
            <pre className="bg-neutral-100 text-neutral-800 p-4 rounded-md text-xs overflow-x-auto">
              <code>{noDataJsonString}</code>
            </pre>
          </div>
          <div className="border-t border-neutral-200 pt-6">
            <h3 className="text-lg font-semibold text-neutral-700 mb-2">JSON for "Error" State</h3>
            <pre className="bg-neutral-100 text-neutral-800 p-4 rounded-md text-xs overflow-x-auto">
              <code>{errorJsonString}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
