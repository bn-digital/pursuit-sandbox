// app/settings/consult/projp/template-project/components/TemplageComponent.tsx
// version: 3

// The consultant is responsible for creating strong types. 'any' is used for this placeholder.
/* eslint-disable @typescript-eslint/no-explicit-any */
interface TemplageComponentProps {
  payload: {
    error: { hasError: boolean; type: string; message: string };
    data: { style: string; summary: string }[] | null;
  };
}

// All static image assets are defined within the component, not passed in the JSON.
const leadershipStyleImageMap: { [key: string]: string } = {
  Coaching:
    "https://cdn.builder.io/api/v1/image/assets/976a0da190bf4da0a01e618728ce8ced/23d88142b6b6d5b6dc02400d763722ad8d8cc27a2b5dd1293c342ee71c23274e",
  Decisive:
    "https://cdn.builder.io/api/v1/image/assets/976a0da190bf4da0a01e618728ce8ced/3135e8e12a9af68e077e0d69e6b7eadeefa1f34dcd296ba9f9e8b820b0be3798",
  Democratic:
    "https://cdn.builder.io/api/v1/image/assets/976a0da190bf4da0a01e618728ce8ced/eb7abad7728f03f26a7f6d56c6320850de1a820453c6d73eeb7e9bf1d818ded1",
  Directional:
    "https://cdn.builder.io/api/v1/image/assets/976a0da190bf4da0a01e618728ce8ced/ec8a350a4ab0416c4e4115566dd3fbe33f038edf15e4617fb138c299f4b833aa",
  "Easy Going":
    "https://cdn.builder.io/api/v1/image/assets/976a0da190bf4da0a01e618728ce8ced/6eb45d9b4ed6c1be5fa5811cf5418c9856381a91ddf21906c5b36eef4d24e2b5",
  Servant:
    "https://cdn.builder.io/api/v1/image/assets/976a0da190bf4da0a01e618728ce8ced/1c10660a25ad678df8645fa2108a73f3b86e55b201abd1f9020bf07ddcf81697",
  Transformational:
    "https://cdn.builder.io/api/v1/image/assets/976a0da190bf4da0a01e618728ce8ced/236659ce81f053fb3d90e192df96a750b3a8214f7e4219ab31ecb36904667a61",
  Transactional:
    "https://cdn.builder.io/api/v1/image/assets/976a0da190bf4da0a01e618728ce8ced/7f7c501cae1f82edaa36c405af45375e194b28edfca617970661172301a2bea1",
};

/**
 * A more advanced template component that renders a grid of leadership style cards.
 */
export default function TemplageComponent({ payload }: TemplageComponentProps) {
  // 1. Handle the error state by rendering an invisible HTML comment.
  if (payload.error.hasError) {
    // We construct the HTML comment string first.
    const comment = `
      <!--
        Template Component Error:
        Type: ${payload.error.type}
        Message: ${payload.error.message}
      -->
    `;
    // We use dangerouslySetInnerHTML to render the raw HTML comment.
    // This is the standard and safe way to render an HTML comment from React.
    return <div dangerouslySetInnerHTML={{ __html: comment }} />;
  }

  // 2. Handle the "no data" state.
  if (!payload.data || payload.data.length === 0) {
    return (
      <div className="flex items-center justify-center h-24 bg-neutral-50 rounded-md">
        <p className="text-neutral-500">No leadership styles given!</p>
      </div>
    );
  }

  // 3. Render the grid of cards if data exists.
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {payload.data.map((item) => {
        const imageUrl = leadershipStyleImageMap[item.style];
        return (
          <div
            key={item.style}
            className="bg-white p-6 rounded-lg shadow-md border border-neutral-200 flex flex-col items-center text-center gap-4"
          >
            <div className="h-12 w-12 flex items-center justify-center">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={`${item.style} icon`}
                  className="h-10 w-10 object-contain"
                />
              ) : (
                <div className="h-10 w-10 border-2 border-dashed border-neutral-300 rounded-full" />
              )}
            </div>
            <div className="w-full">
              <p className="text-xs font-bold tracking-wider text-neutral-400 uppercase">
                Leadership Style
              </p>
              <h3 className="text-xl font-bold text-neutral-800 mt-1">{item.style}</h3>
            </div>
            <div className="w-full border-t border-neutral-200 pt-4">
              <p className="text-xs font-bold tracking-wider text-neutral-400 uppercase">Summary</p>
              <p className="text-neutral-600 mt-1 text-sm">{item.summary}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
