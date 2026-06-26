import "./Practice.css";

import { useState } from "react";

import questions from "../../data/questions";

import QuestionCard from "../../components/QuestionCard/QuestionCard";

function Practice() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }

  return (
    <div className="practice-container">
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

export default Practice;