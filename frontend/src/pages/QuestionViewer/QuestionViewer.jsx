import "./QuestionViewer.css";

import { useNavigate, useParams } from "react-router-dom";

import questions from "../../data/questions";
import EmptyState from "../../components/EmptyState/EmptyState";

function QuestionViewer() {
  const { questionId } = useParams();
  const navigate = useNavigate();

  const question = questions.find(
    (q) => q.id === Number(questionId)
  );

  if (!question) {
    return (
      <EmptyState
        title="Question Not Found"
        message="The bookmarked question could not be found."
        buttonText="Back to Bookmarks"
      />
    );
  }

  return (
    <div className="question-viewer-container">
      <button
        className="back-button"
        onClick={() => navigate("/bookmarks")}
      >
        ← Back
      </button>

      <p className="question-meta">
        {question.subject} • {question.chapter}
      </p>

      <h2>{question.question}</h2>

      <div className="options-container">
        {question.options.map((option, index) => (
          <div
            key={index}
            className={`option-card ${
              index === question.correctOption
                ? "correct-option"
                : ""
            }`}
          >
            {option}
          </div>
        ))}
      </div>

      <div className="answer-section">
        <h3>Correct Answer</h3>
        <p>
          {
            question.options[
              question.correctOption
            ]
          }
        </p>
      </div>

      <div className="explanation-section">
        <h3>Explanation</h3>
        <p>{question.explanation}</p>
      </div>
    </div>
  );
}

export default QuestionViewer;