// localhost testing
export const port = "http://localhost:8000";

export const generateApiKey = async (): Promise<string | null> => {
  const apiUrl = `${port}/generate_api_key`;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if (!data.api_key) {
      throw new Error("API key not found in response");
    }

    return data.api_key;
  } catch (error) {
    console.error("Error generating API key:", error);
    return null;
  }
};

export const apikeyPromise = generateApiKey();
