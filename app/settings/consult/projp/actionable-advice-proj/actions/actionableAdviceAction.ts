// app/settings/consult/projp/actionable-advice-proj/actions/actionableAdviceAction.ts
// version: 1

"use server";

// We keep this file self-contained. The consultant can later refactor types.
interface ActionableAdvicePayload {
  error: {
    hasError: boolean;
    type: string;
    message: string;
  };
  actionableAdvice: object | null;
}

export async function updateActionableAdviceAction(previousState: unknown, formData: FormData) {
  const jsonString = formData.get("jsonData");

  if (typeof jsonString !== "string" || jsonString.trim() === "") {
    return { success: false, error: "JSON data is empty or not provided." };
  }

  try {
    const parsedJson = JSON.parse(jsonString);

    // Basic placeholder validation, same as the template.
    if (typeof parsedJson !== "object" || parsedJson === null) {
      throw new Error("Input must be a valid JSON object.");
    }
    if (!("actionableAdvice" in parsedJson)) {
      throw new Error("JSON must contain an 'actionableAdvice' property.");
    }

    const validatedData = parsedJson as ActionableAdvicePayload;
    return { success: true, data: validatedData };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown parsing error occurred.";
    return { success: false, error: errorMessage };
  }
}
