import "./PracticeSummary.css";

const TIMER_OPTIONS = [
  { label: "No Timer", value: 0 },
  { label: "5 Minutes", value: 35 },
  { label: "10 Minutes", value: 600 },
  { label: "15 Minutes", value: 900 },
  { label: "30 Minutes", value: 1800 },
  { label: "60 Minutes", value: 3600 },
];

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

  function handleTimerChange(event) {
    const duration = Number(event.target.value);

    setConfig({
      ...config,

      timer: {
        enabled: duration > 0,
        duration,
      },
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

      <div className="question-limit">

        <label htmlFor="timer">
          Time Limit
        </label>

        <select
          id="timer"
          value={config.timer.duration}
          onChange={handleTimerChange}
        >
          {TIMER_OPTIONS.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
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