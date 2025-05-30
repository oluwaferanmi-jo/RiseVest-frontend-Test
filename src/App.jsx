import React, { useState, useEffect } from "react";
import Header from "./components/header";
import HeroSection from "./components/HeroSection";
import FeedbackControls from "./components/FeedbackControls";
import FeedbackGrid from "./components/FeedbackGrid";
import FeedbackForm from "./components/FeedbackForm"; 
import { fetchFeedbacks, submitFeedback } from "./utils/api";
import { loadFeedbacks } from "./utils/localStorage";
import { saveFeedback} from "./utils/localStorage";
import FeedbackSuccessModal from "./components/FeedbackSuccessModal";


export default function App() {
  const [feedbackList, setFeedbackList] = useState([]);
  const [filter, setFilter] = useState("all");
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

 useEffect(() => {
  async function loadData() {
    
    try {
      const apiData = await fetchFeedbacks();

      
      const localData = loadFeedbacks();
      const mergedData = [...localData, ...apiData];

      setFeedbackList(mergedData);
    } catch (err) {
      
      console.warn("API fetch failed, loading local data only.");
      setFeedbackList(loadFeedbacks());
    }
  }

  loadData();
}, []);


 const handleSubmit = async (newFeedback) => {
  
  saveFeedback(newFeedback);
  setFeedbackList((prev) => [newFeedback, ...prev]);

  try {
    const res = await submitFeedback(newFeedback);

    
    if (res) {
      console.log("API status:", res.status);
    }
  } catch (err) {
    console.warn("API POST failed due to CORS or network error.");
  }

  
  
  setShowForm(false);
  setShowSuccess(true);
};


  return (
    <div className="bg-white min-h-screen">
      <Header />
      <HeroSection />
      <FeedbackControls
        currentFilter={filter}
        setFilter={setFilter}
        onOpenForm={() => setShowForm(true)}
      />

      {showForm && (
        <FeedbackForm
          onClose={() => setShowForm(false)}
          onSubmit={handleSubmit}
        />
        
      )}
    {showSuccess && <FeedbackSuccessModal onClose={() => setShowSuccess(false)} />}

      <FeedbackGrid feedbackList={feedbackList} currentFilter={filter} />
      

    </div>
  );
}
