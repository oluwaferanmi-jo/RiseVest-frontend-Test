import React, { useState, useEffect } from "react";
import Header from "./components/header";
import HeroSection from "./components/HeroSection";
import FeedbackControls from "./components/FeedbackControls";
import FeedbackGrid from "./components/FeedbackGrid";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackSuccessModal from "./components/FeedbackSuccessModal";
import Pagination from "./components/Pagination";
import { fetchFeedbacks, submitFeedback } from "./utils/api";
import { loadFeedbacks, saveFeedback } from "./utils/localStorage";

export default function App() {
  const [feedbackList, setFeedbackList] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

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
      await submitFeedback(newFeedback);
    } catch (err) {
      console.warn("API POST failed due to CORS or network error.");
    }

    setShowForm(false);
    setShowSuccess(true);
  };

  const filtered = feedbackList.filter(item => {
    const matchesType = filter === "all" || item.type === filter;
    const matchesSearch = item.message.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginatedFeedback = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA]">
      <Header onSearchChange={setSearchQuery} />
      <HeroSection />
      <FeedbackControls
        currentFilter={filter}
        setFilter={setFilter}
        onOpenForm={() => setShowForm(true)}
      />

      {showForm && (
        <FeedbackForm onClose={() => setShowForm(false)} onSubmit={handleSubmit} />
      )}
      {showSuccess && (
        <FeedbackSuccessModal onClose={() => setShowSuccess(false)} />
      )}

      <div className="flex-grow">
        {filtered.length > 0 ? (
          <FeedbackGrid feedbackList={paginatedFeedback} />
        ) : (
          <div className="flex items-center justify-center h-[300px] text-center text-gray-500 text-sm">
            No feedback found.
          </div>
        )}
      </div>

      {filtered.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPrev={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          onNext={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        />
      )}
    </div>
  );
}
