import "./ReviewCard.css";

function ReviewCard({
  question,
  selectedAnswer,
  questionNumber,
  totalQuestions,
}) {
  const userAnswer =
    selectedAnswer?.selectedOption !== null
      ? question.options[selectedAnswer.selectedOption]
      : "Not Attempted";

  const correctAnswer =
    question.options[question.correctOption];

  function getStatus() {
    if (!selectedAnswer) {
      return {
        label: "Not Attempted",
        className: "status-skipped",
      };
    }

    switch (selectedAnswer.status) {
      case "correct":
        return {
          label: "✓ Correct",
          className: "status-correct",
        };

      case "incorrect":
        return {
          label: "✗ Incorrect",
          className: "status-incorrect",
        };

      case "skipped":
        return {
          label: "Skipped",
          className: "status-skipped",
        };

      default:
        return {
          label: "Unknown",
          className: "status-skipped",
        };
    }
  }

  const status = getStatus();

  return (
    <div className="review-card">

      <div className="review-header">

        <div className="review-info">

          <span>{question.subject}</span>

          <span>•</span>

          <span>{question.chapter}</span>

        </div>

        <div>
          Question {questionNumber} of {totalQuestions}
        </div>

      </div>

      <h2>{question.question}</h2>

      <div className={`review-status ${status.className}`}>
        {status.label}
      </div>

      <div className="review-section">
        <h3>Your Answer</h3>

        <p
            className={
            selectedAnswer?.status === "correct"
                ? "answer-correct"
                : selectedAnswer?.status === "incorrect"
                ? "answer-incorrect"
                : "answer-skipped"
            }
        >
            {selectedAnswer?.status === "skipped"
            ? "➖ Not Attempted"
            : selectedAnswer
            ? userAnswer
            : "Not Attempted"}
        </p>
      </div>

        <div className="review-section">
            <h3>Correct Answer</h3>

            <p className="answer-correct">
                ✅ {correctAnswer}
            </p>
        </div>

      <div className="review-section">
        <h3>Explanation</h3>

        <p>{question.explanation}</p>
      </div>

    </div>
  );
}

export default ReviewCard;