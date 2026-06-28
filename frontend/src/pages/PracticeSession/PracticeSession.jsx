import "./PracticeSession.css";

import { useState } from "react";
import { useLocation } from "react-router-dom";

import QuestionCard from "../../components/QuestionCard/QuestionCard";

function PracticeSession() {
  const location = useLocation();

  const practice = location.state?.practice;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

if (!practice) {
  return (
    <div className="practice-container">

      <div className="no-session">

        <h2>No Practice Session</h2>

        <p>
          Start a practice session from the Practice
          menu.
        </p>

      </div>

    </div>
  );
}

  const { title, questions } = practice;

  function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }

  return (
    <div className="practice-container">

      <h1 className="practice-title">
        {title}
      </h1>

      <QuestionCard
        key={questions[currentQuestionIndex].id}
        question={questions[currentQuestionIndex]}
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={questions.length}
        onNext={nextQuestion}
        isLastQuestion={
          currentQuestionIndex === questions.length - 1
        }
      />

    </div>
  );
}

export default PracticeSession;