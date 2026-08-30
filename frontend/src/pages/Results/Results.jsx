import "./Results.css";

import { useLocation, useNavigate } from "react-router-dom";

import EmptyState from "../../components/EmptyState/EmptyState";

function formatDuration(seconds) {
    if (seconds === null) {
        return "—";
    }

    const minutes = Math.floor(seconds / 60);

    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(
        2,
        "0"
    )}:${String(
        remainingSeconds
    ).padStart(2, "0")}`;
}

function Results() {
  const location = useLocation();
  const navigate = useNavigate();

  const completedSession = location.state?.session;

  const results = completedSession?.results;

  if (!completedSession) {
    return (
      <EmptyState
        title="No Results Available"
        message="Complete a practice session to view your results."
        buttonText="Return to Practice"
      />
    );
  }

  const {
      questionsAttempted,
      correctAnswers,
      incorrectAnswers,
      skippedQuestions,
      accuracy,
      markingScheme,

      timeAllowed,

      timeTaken,

      submissionType,

      totalQuestions,
  } = results;

  const marksObtained =
    correctAnswers *
    markingScheme.correct;

  const negativeMarks =
    incorrectAnswers *
    Math.abs(markingScheme.incorrect);

  const finalScore =
    marksObtained - negativeMarks;

  const maximumMarks =
    totalQuestions *
    markingScheme.correct;

  return (
    <div className="results-container">
      <h1>Practice Complete</h1>

      <p className="results-subtitle">
        Here is a summary of your practice session.
      </p>

      <div className="results-card">

        <div className="result-row">
          <span>Questions Attempted</span>
          <span>{questionsAttempted}</span>
        </div>

        <div className="result-row">
          <span>Correct Answers</span>
          <span>{correctAnswers}</span>
        </div>

        <div className="result-row">
          <span>Incorrect Answers</span>
          <span>{incorrectAnswers}</span>
        </div>

        <div className="result-row">
          <span>Skipped Questions</span>
          <span>{skippedQuestions}</span>
        </div>

        <div className="result-row">
          <span>Accuracy</span>
          <span>{accuracy}%</span>
        </div>

        <div className="result-row">
            <span>Time Allowed</span>

            <span>
                {timeAllowed === null
                    ? "No Timer"
                    : formatDuration(timeAllowed)}
            </span>
        </div>

        <div className="result-row">
            <span>Time Taken</span>

            <span>
                {formatDuration(timeTaken)}
            </span>
        </div>

        <div className="result-row">
            <span>Submission</span>

            <span>{submissionType}</span>
        </div>

        <div className="result-row">
          <span>Marks Obtained</span>
          <span>
            {marksObtained.toFixed(2)} / {maximumMarks}
          </span>
        </div>

        <div className="result-row">
          <span>Negative Marks</span>
          <span>
            -{negativeMarks.toFixed(2)}
          </span>
        </div>

        <div className="result-row">
          <span>Final Score</span>
          <span>
            {finalScore.toFixed(2)} / {maximumMarks}
          </span>
        </div>

      </div>

      <div className="results-actions">

        <button
          className="results-button"
          onClick={() =>
            navigate("/review", {
              state: {
                session: completedSession,
              },
            })
          }
        >
          Review Answers
        </button>

        <button
          className="results-button secondary-button"
          onClick={() =>
            navigate("/practice/session", {
              state: {
                practice: completedSession.originalPractice
              },
            })
          }
        >
          Retry Practice
        </button>

        <button
          className="results-button"
          onClick={() => navigate("/practice")}
        >
          Back to Practice
        </button>

      </div>
    </div>
  );
}

export default Results;