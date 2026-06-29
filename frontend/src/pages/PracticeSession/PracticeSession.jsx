import "./PracticeSession.css";

import { useState } from "react";
import { useLocation } from "react-router-dom";

import QuestionCard from "../../components/QuestionCard/QuestionCard";
import EmptyState from "../../components/EmptyState/EmptyState";

function PracticeSession() {
  const location = useLocation();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const practice = location.state?.practice;

  if (!practice) {
    return (
      <EmptyState
        title="No Practice Session"
        message="Start a practice session from the Practice menu."
        buttonText="Return to Practice"
      />
    );
  }

  if (practice.empty) {
    return (
      <EmptyState
        title={practice.title}
        message={practice.message}
        buttonText="Choose Another Option"
      />
    );
  }

  const { title, questions } = practice;

  function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((previousIndex) => previousIndex + 1);
    }
  }

  return (
    <div className="practice-container">
      <h1 className="practice-title">{title}</h1>

      <QuestionCard
        key={questions[currentQuestionIndex].id}
        question={questions[currentQuestionIndex]}
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={questions.length}
        onNext={nextQuestion}
        isLastQuestion={currentQuestionIndex === questions.length - 1}
      />
    </div>
  );
}

export default PracticeSession;