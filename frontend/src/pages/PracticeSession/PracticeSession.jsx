import "./PracticeSession.css";

import { useState } from "react";
import { useLocation } from "react-router-dom";

import QuestionCard from "../../components/QuestionCard/QuestionCard";
import EmptyState from "../../components/EmptyState/EmptyState";

function PracticeSession() {
  const location = useLocation();

  const practice = location.state?.practice ?? null;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

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

  const {
    title,
    questions,
    questionLimit,
  } = practice;

  const sessionQuestions =
    questionLimit >= questions.length
      ? questions
      : questions.slice(0, questionLimit);

  function nextQuestion() {
    if (
      currentQuestionIndex <
      sessionQuestions.length - 1
    ) {
      setCurrentQuestionIndex((previousIndex) => previousIndex + 1);
    }
  }

  return (
    <div className="practice-container">
      <h1 className="practice-title">
        {title}
      </h1>

      <QuestionCard
        key={sessionQuestions[currentQuestionIndex].id}
        question={sessionQuestions[currentQuestionIndex]}
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={sessionQuestions.length}
        onNext={nextQuestion}
        isLastQuestion={
          currentQuestionIndex ===
          sessionQuestions.length - 1
        }
      />
    </div>
  );
}

export default PracticeSession;