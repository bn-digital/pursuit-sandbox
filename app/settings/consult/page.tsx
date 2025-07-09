// app/settings/consult/page.tsx
// version: 5

import Link from "next/link";

export default async function ConsultantSandboxPage() {
  console.log("[ConsultantSandboxPage] Rendering page.");
  return (
    <div className="flex-1 w-full flex flex-col items-center bg-neutral-50">
      <div className="animate-in flex-1 flex flex-col gap-8 opacity-0 max-w-4xl px-3 my-16">
        <div className="flex flex-col gap-4 mb-4">
          <Link
            href="/settings/consult/projp/template-project"
            className="block p-4 bg-white rounded-lg shadow-md border border-neutral-200 hover:border-rose-500 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-lg text-neutral-800">Template Project</h3>
            <p className="text-sm text-neutral-600">
              A simple, working example of the required form pattern. Use this as a reference.
            </p>
          </Link>
          <Link
            href="/settings/consult/projp/actionable-advice-proj"
            className="block p-4 bg-rose-50 rounded-lg shadow-md border border-rose-300 hover:border-rose-500 hover:shadow-lg transition-all relative"
          >
            <h3 className="font-bold text-lg text-rose-800">ActionableAdvice Project</h3>
            <p className="text-sm text-rose-700">
              This is the active project. Start your work here.
            </p>
            <span className="absolute top-4 right-4 text-2xl font-bold text-rose-500">→</span>
          </Link>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md border border-neutral-200">
          <h1 className="text-3xl font-bold mb-4 text-neutral-800">Component Design Sandbox</h1>
          <p className="text-lg text-neutral-600 mb-6">
            <strong>Goal:</strong> Isolated and modular component design.
          </p>
          <p className="mb-8 text-neutral-700">
            We will have a sandbox for component design. It is important for developers to follow
            directions EXACTLY to make sure we can easily drop this component and have it work the
            same way on production.
          </p>

          <div className="border-t border-neutral-200 pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-800">Design Parameters</h2>
            <p className="bg-red-50 border border-red-200 text-red-800 p-3 rounded-md mb-6 text-sm">
              <strong>Please note:</strong> Code delivery will be rejected if it doesn’t follow
              these parameters.
            </p>
            <ol className="list-decimal list-inside space-y-6 text-neutral-700">
              <li>
                <strong className="font-semibold text-neutral-800">Self-contained:</strong>{" "}
                Everything needs to be contained in one folder (subfolders are acceptable). The
                folder must be named using UpperCamelCase (e.g.,{" "}
                <code className="text-sm bg-neutral-100 p-1 rounded">{"ComponentName"}</code>).
              </li>
              <li>
                <strong className="font-semibold text-neutral-800">
                  Technical Stack & Standards:
                </strong>{" "}
                All components must adhere to the following unless a specific, pre-approved
                exception is granted.
                <ol className="list-none space-y-3 mt-4 pl-6">
                  <li>
                    <span className="font-semibold">a.</span>{" "}
                    <strong>Server-Side by Default:</strong> We use Next.js App Router. Components
                    must be React Server Components. Do not use the{" "}
                    <code className="text-sm bg-neutral-100 p-1 rounded">{`"use client"`}</code>{" "}
                    directive unless explicitly required.
                  </li>
                  <li>
                    <span className="font-semibold">b.</span> <strong>TypeScript:</strong> We
                    enforce a strict linter. No linter errors or{" "}
                    <code className="text-sm bg-neutral-100 p-1 rounded">{"any"}</code> types will
                    be accepted.
                  </li>
                  <li>
                    <span className="font-semibold">c.</span> <strong>Clarity and Naming:</strong>{" "}
                    Code must be clean and well-commented. Use long, descriptive variable names. The
                    code should be immediately understandable.
                  </li>
                  <li>
                    <span className="font-semibold">d.</span> <strong>Styling:</strong> Use Tailwind
                    CSS exclusively. No third-party styling libraries are permitted.
                  </li>
                  <li>
                    <span className="font-semibold">e.</span>{" "}
                    <strong>No External Libraries:</strong> Do not add or modify{" "}
                    <code className="text-sm bg-neutral-100 p-1 rounded">{"package.json"}</code>.
                  </li>
                  <li>
                    <span className="font-semibold">f.</span>{" "}
                    <strong>No Global Dependencies:</strong> Components must be fully
                    self-sufficient and not rely on global variables or styles.
                  </li>
                  <li>
                    <span className="font-semibold">g.</span>{" "}
                    <strong>Relative Imports Only:</strong> Do not use aliased imports like{" "}
                    <code className="text-sm bg-neutral-100 p-1 rounded">{"@/"}</code>.
                  </li>
                  <li>
                    <span className="font-semibold">h.</span> <strong>No Image Files:</strong> All
                    images are either SVGs embedded directly or served from our CMS.
                  </li>
                  <li>
                    <span className="font-semibold">i.</span> <strong>Folder Conventions:</strong>{" "}
                    Follow the specified folder structure. For simple projects, a single file{" "}
                    <code className="text-sm bg-neutral-100 p-1 rounded">
                      {"<ComponentName.tsx>"}
                    </code>{" "}
                    is expected.
                  </li>
                  <li>
                    <span className="font-semibold">j.</span> <strong>Responsive Design:</strong>{" "}
                    Display/work reasonably well on mobile as well as desktop.
                  </li>
                </ol>
              </li>
              <li>
                <strong className="font-semibold text-neutral-800">Required File Header:</strong>{" "}
                Every file must begin with these lines, with the version incremented on every
                change.
                <pre className="bg-neutral-800 text-white p-3 rounded-md mt-2 text-sm">
                  <code>
                    {
                      "// app/settings/consult/projp/actionable-advice-proj/components/ActionableAdvice.tsx\n"
                    }
                    {"// version: 1\n"}
                    {"// author: [name of developer/company]"}
                  </code>
                </pre>
              </li>
            </ol>
          </div>

          <div className="border-t border-neutral-200 mt-8 pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-800">Process</h2>
            <ol className="list-decimal list-inside space-y-4 text-neutral-700">
              <li>
                Specifications for a project/component are delivered, questions answered (ideally
                all async via email/slack).
              </li>
              <li>
                You host the provided sandbox project and get it working per specs, handling corner
                cases (error state, no data state, really short text/data, really long data, etc.).
              </li>
              <li>Get approval from Ben/Designers, iterate as needed.</li>
              <li>Get approval from Max (that it meets the above conditions).</li>
              <li>Deliver the folder/file to Max via email/slack.</li>
              <li>
                Max will test and drop onto production and that version gets released - any future
                changes will be a new version and a new folder/file is delivered.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
