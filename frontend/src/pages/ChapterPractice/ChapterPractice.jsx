import "./ChapterPractice.css";

import chapters from "../../data/chapters";
import SelectionCard from "../../components/SelectionCard/SelectionCard";

import PageHeader from "../../components/PageHeader/PageHeader";

function ChapterPractice() {
  return (
    <div className="chapter-container">
      <PageHeader
        title="Choose a Chapter"
        subtitle="Select a chapter to begin practicing."
      />

      {Object.entries(chapters).map(([subject, chapterList]) => (
        <div
          key={subject}
          className="chapter-section"
        >
          <h2>{subject}</h2>

          <div className="chapter-grid">
            {chapterList.map((chapter) => (
              <SelectionCard
                key={chapter}
                title={chapter}
                onClick={() => {}}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChapterPractice;