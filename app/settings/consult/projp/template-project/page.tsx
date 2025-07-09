// app/settings/consult/projp/template-project/page.tsx
// version: 3

import TemplageProjectClientSideForm from "./components/TemplageProjectClientSideForm";

// The new, richer default data structure.
const defaultComponentData = {
  error: { hasError: false, type: "", message: "" },
  data: [
    {
      style: "Coaching",
      summary:
        "Focuses on developing individual team members' skills and abilities for long-term growth.",
    },
    {
      style: "Decisive",
      summary:
        "Makes quick, confident, and clear decisions with authority, providing firm direction.",
    },
    {
      style: "Democratic",
      summary:
        "Encourages team participation in decision-making to build consensus and shared ownership.",
    },
    {
      style: "Directional",
      summary:
        "Provides clear goals and guidance on what needs to be done, without micromanaging how.",
    },
    {
      style: "Easy Going",
      summary:
        "Creates a relaxed, low-stress environment, fostering creativity and positive relationships.",
    },
    {
      style: "Servant",
      summary:
        "Prioritizes the needs of the team, aiming to serve and support them to perform their best.",
    },
    {
      style: "Transformational",
      summary:
        "Inspires and motivates the team to innovate and create change that will grow the company.",
    },
    {
      style: "Transactional",
      summary:
        "Focuses on clear structures and rewards, ensuring tasks are completed efficiently through exchanges.",
    },
  ],
};

const defaultJsonString = JSON.stringify(defaultComponentData, null, 2);

// We define the other two states for reference display.
const noDataJsonString = JSON.stringify(
  {
    error: { hasError: false, type: "", message: "" },
    data: [],
  },
  null,
  2
);

const errorJsonString = JSON.stringify(
  {
    error: {
      hasError: true,
      type: "DATA_UNAVAILABLE",
      message: "Failed to load leadership style data.",
    },
    data: null,
  },
  null,
  2
);

export default async function TemplateProjectPage() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
      <TemplageProjectClientSideForm
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
