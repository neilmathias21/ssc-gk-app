import "./QuestionCard.css";
import { useState } from "react";

import OptionButton from "../OptionButton/OptionButton";

function QuestionCard({
  question,
  currentQuestion,
  totalQuestions,
  onNext,
  isLastQuestion,
}) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const isCorrect =
    selectedOption === question.correctOption;

  function handleSubmit() {
    if (selectedOption === null) {
      setError("Please select an option.");
      return;
    }

    setError("");
    setSubmitted(true);
  }

  return (
    <div className="question-card">
        <div className="question-header">

            <div className="question-info">

                <span className="subject">
                {question.subject}
                </span>

                <span className="separator">
                •
                </span>

                <span className="chapter">
                {question.chapter}
                </span>

            </div>

            <div className="question-number">

                Question {currentQuestion} of {totalQuestions}

            </div>

        </div>
      <h2>{question.question}</h2>

      <div className="options">
        {question.options.map((option, index) => (
            <OptionButton
                key={index}
                option={option}
                selected={selectedOption === index}
                disabled={submitted}
                onClick={() => setSelectedOption(index)}
                isCorrect={
                submitted &&
                index === question.correctOption
                }
                isWrong={
                submitted &&
                selectedOption === index &&
                index !== question.correctOption
                }
            />
            ))}
      </div>

      {error && (
        <p className="error-message">
          {error}
        </p>
      )}

      {!submitted ? (
        <button
          className="submit-button"
          onClick={handleSubmit}
        >
          Submit Answer
        </button>
      ) : (
        <>
          <div
            className={
              isCorrect
                ? "correct-message"
                : "wrong-message"
            }
          >
            {isCorrect
              ? "Correct!"
              : "Incorrect!"}
          </div>

          <div className="explanation">
            <h3>Explanation</h3>

            <p>{question.explanation}</p>
          </div>

          {!isLastQuestion ? (
            <button
              className="next-button"
              onClick={onNext}
            >
              Next Question
            </button>
          ) : (
            <button
              className="next-button"
              disabled
            >
              End of Practice
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default QuestionCard;