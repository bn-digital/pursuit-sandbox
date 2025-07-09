// app/settings/consult/projp/template-project/actions/templageProjectAction.ts
// version: 2

"use server";

export async function updateComponentAction(previousState: unknown, formData: FormData) {
  const jsonString = formData.get("jsonData");

  if (typeof jsonString !== "string" || jsonString.trim() === "") {
    return { success: false, error: "JSON data is empty or not provided." };
  }

  try {
    const parsedJson = JSON.parse(jsonString);

    // We perform basic validation to ensure the payload has the expected shape.
    if (typeof parsedJson !== "object" || parsedJson === null) {
      throw new Error("Input must be a valid JSON object.");
    }
    if (typeof parsedJson.error !== "object" || parsedJson.error === null) {
      throw new Error("JSON is missing the 'error' object.");
    }
    // The 'data' property can be an array or null, so we check that it exists.
    if (!("data" in parsedJson)) {
      throw new Error("JSON is missing the 'data' property (it can be an array or null).");
    }

    // The data is considered valid for the placeholder.
    // The consultant will implement more robust validation.
    return { success: true, data: parsedJson };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown parsing error occurred.";
    return { success: false, error: errorMessage };
  }
}
