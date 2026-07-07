import "./ReviewAnswers.css";

import { useState } from "react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import EmptyState from "../../components/EmptyState/EmptyState";
import ReviewCard from "../../components/ReviewCard/ReviewCard";

function ReviewAnswers() {
  const location = useLocation();
  const navigate = useNavigate();

  const completedSession =
    location.state?.session;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  if (!completedSession) {
    return (
      <EmptyState
        title="No Review Available"
        message="Complete a practice session to review your answers."
        buttonText="Return to Practice"
      />
    );
  }

  const {
    questions,
    selectedAnswers,
  } = completedSession;

  function previousQuestion() {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(
        currentQuestionIndex - 1
      );
    }
  }

  function nextQuestion() {
    if (
      currentQuestionIndex <
      questions.length - 1
    ) {
      setCurrentQuestionIndex(
        currentQuestionIndex + 1
      );
    }
  }

  const currentQuestion =
    questions[currentQuestionIndex];

  const currentAnswer =
    selectedAnswers.find(
      (answer) =>
        answer.questionId ===
        currentQuestion.id
    );

  return (
    <div className="review-container">
      <h1>Review Answers</h1>

      <p className="review-subtitle">
        Review your answers after completing your practice session.
      </p>

      <div className="review-progress">

        <div
          className="review-progress-fill"
          style={{
            width: `${
              ((currentQuestionIndex + 1) /
                questions.length) *
              100
            }%`,
          }}
        />

      </div>

      <ReviewCard
        question={currentQuestion}
        selectedAnswer={currentAnswer}
        questionNumber={
          currentQuestionIndex + 1
        }
        totalQuestions={questions.length}
      />

      <div className="review-navigation">

        <button
          className="review-button"
          onClick={previousQuestion}
          disabled={
            currentQuestionIndex === 0
          }
        >
          Previous
        </button>

        <button
          className="review-button"
          onClick={nextQuestion}
          disabled={
            currentQuestionIndex ===
            questions.length - 1
          }
        >
          Next
        </button>

      </div>

      <button
        className="back-button"
        onClick={() =>
          navigate("/results", {
            state: {
              session: completedSession,
            },
          })
        }
      >
        Back to Results
      </button>
    </div>
  );
}

export default ReviewAnswers;