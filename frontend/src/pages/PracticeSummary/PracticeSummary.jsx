import "./PracticeSummary.css";

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import PracticeSummary from "../../components/PracticeSummary/PracticeSummary";
import EmptyState from "../../components/EmptyState/EmptyState";

function PracticeSummaryPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const initialPractice = location.state?.practice ?? null;

  const [practiceConfig, setPracticeConfig] =
    useState(initialPractice);

  if (!practiceConfig) {
    return (
      <EmptyState
        title="No Practice Selected"
        message="Please choose a practice mode first."
        buttonText="Return to Practice"
      />
    );
  }

  function handleStartPractice() {
    navigate("/practice/session", {
      state: {
        practice: practiceConfig,
      },
    });
  }

  return (
    <div className="practice-summary-page">
      <PracticeSummary
        config={practiceConfig}
        setConfig={setPracticeConfig}
        onStart={handleStartPractice}
      />
    </div>
  );
}

export default PracticeSummaryPage;