const STORAGE_KEY = "feedbackList";

export function loadFeedbacks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error("Error loading feedbacks from localStorage:", error);
    return [];
  }
}

export function saveFeedback(feedback) {
  const existing = loadFeedbacks();
  const updated = [feedback, ...existing];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

export function clearFeedbacks() {
  localStorage.removeItem(STORAGE_KEY);
}
