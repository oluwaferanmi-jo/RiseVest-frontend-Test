    ⚙️ Technical Notes
-This project integrates with the provided API endpoint to submit and fetch feedback (https://rise-frontend-test-api.developer-a6a.workers.dev).

-Due to CORS restrictions, the API is currently blocking requests from localhost, resulting in failed network calls in most development environments.

-As a result, a localStorage fallback mechanism has been implemented. All submitted feedback is:

    -Saved immediately to localStorage

    -Rendered on the dashboard

    -Merged with backend data (when accessible) during reload

This ensures the app remains functional and provides a consistent user experience — even if the backend is temporarily unavailable.

     🚧 Known Enhancement
-Currently, feedback submitted locally and fetched from the backend may appear duplicated if the same data exists in both.

-To keep the core logic simple and test-relevant, deduplication logic was not implemented.

-However, this could be added by filtering entries using a unique identifier (e.g., name + message hash or timestamp) in future iterations.

-------------------------------------------
## 🛠 Part 2 – Bug Fix and Explanation

### Fixed Code

```jsx
export default function FeedbackForm({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (onSubmit) onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit Feedback</button> 
    </form>
  );
}


🔍The Issue, how I Investigated & Solved It 

-When inspecting the bug, I noticed that clicking the “Submit Feedback” button did nothing. After reviewing the code, I found two key issues:

1. The `e.preventDefault` call was missing its parentheses, so it didn’t actually prevent the browser’s default behavior.
2. The button was set to `type="button"`, which doesn’t trigger a form’s `onSubmit` event. It needed to be `type="submit"`.

To fix this, I updated `e.preventDefault` to `e.preventDefault()` and changed the button’s type. These changes allow the form to respond correctly when users attempt to submit feedback.
