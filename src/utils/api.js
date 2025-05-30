const API_URL = "https://rise-frontend-test-api.developer-a6a.workers.dev";


export async function fetchFeedbacks() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch");
    return await res.json();
  } catch (err) {
    console.error("Fetch error:", err);
    return [];
  }
}


export async function submitFeedback(data) {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    return res; // return full response for status checking
  } catch (err) {
    console.warn("POST failed or was blocked (CORS). Falling back.");
    return null;
  }
}

