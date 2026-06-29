import "./PracticeSummary.css";

function PracticeSummary({
  config,
  setConfig,
  onStart,
}) {
  function handleLimitChange(event) {
    const value = event.target.value;

    setConfig({
      ...config,
      questionLimit:
        value === "all"
          ? config.totalQuestions
          : Number(value),
    });
  }

  return (
    <div className="practice-summary">

      <div className="summary-header">
        <h2>{config.title}</h2>

        <p>
          Configure your practice session before
          starting.
        </p>
      </div>

      <div className="summary-card">

        <div className="summary-row">
          <span>Practice Type</span>
          <span>{config.mode}</span>
        </div>

        {config.subject && (
          <div className="summary-row">
            <span>Subject</span>
            <span>{config.subject}</span>
          </div>
        )}

        {config.chapter && (
          <div className="summary-row">
            <span>Chapter</span>
            <span>{config.chapter}</span>
          </div>
        )}

        <div className="summary-row">
          <span>Questions Available</span>
          <span>{config.totalQuestions}</span>
        </div>

      </div>

      <div className="question-limit">

        <label htmlFor="questionLimit">
          Questions to Attempt
        </label>

        <select
          id="questionLimit"
          value={
            config.questionLimit ===
            config.totalQuestions
              ? "all"
              : config.questionLimit
          }
          onChange={handleLimitChange}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={30}>30</option>
          <option value={50}>50</option>
          <option value="all">
            All Questions
          </option>
        </select>

      </div>

      <button
        className="start-button"
        onClick={onStart}
      >
        Start Practice
      </button>

    </div>
  );
}

export default PracticeSummary;