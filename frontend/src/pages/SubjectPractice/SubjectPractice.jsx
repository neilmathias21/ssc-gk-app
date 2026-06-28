import "./SubjectPractice.css";

import subjects from "../../data/subjects";

import SelectionCard from "../../components/SelectionCard/SelectionCard";

import PageHeader from "../../components/PageHeader/PageHeader";

function SubjectPractice() {
  return (
    <div className="subject-container">

      <PageHeader
        title="Choose a Subject"
        subtitle="Select a subject to begin practicing."
      />

      <div className="subject-grid">
        {subjects.map((subject) => (
          <SelectionCard
            key={subject}
            title={subject}
            onClick={() => {}}
          />
        ))}
      </div>

    </div>
  );
}

export default SubjectPractice;