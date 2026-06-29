# Changelog

All notable changes to this project will be documented in this file.

---

# Version 0.5.0 - Practice Session Configuration

## Added

### Practice Summary
- Added a dedicated Practice Summary page.
- Added a reusable Practice Summary component.
- Added a configurable practice session workflow before starting questions.

### Practice Configuration
- Introduced a centralized `practiceConfig` object.
- Added a reusable `defaultPracticeConfig`.
- Refactored Random, Subject, and Chapter Practice to use a shared configuration model.

### Question Limit
- Added configurable question limit selection.
- Supported options:
  - 5 Questions
  - 10 Questions
  - 25 Questions
  - 30 Questions
  - 50 Questions
  - All Questions
- Updated Practice Session to respect the selected question limit.

### Navigation
- Added Practice Summary route.
- Updated practice flow:

  Practice Selection
      ↓
  Practice Summary
      ↓
  Start Practice
      ↓
  Practice Session

### User Interface
- Improved Practice Summary layout.
- Added clearer session information.
- Improved spacing and visual hierarchy.
- Improved Start Practice workflow.

### Architecture
- Introduced a reusable practice configuration model.
- Separated session configuration from session execution.
- Improved scalability for future features such as timers, difficulty levels, and mock tests.

---

# Version 0.4.0 - Subject and Chapter Practice

## Added

### Practice Modes
- Implemented fully functional Subject-wise Practice.
- Implemented fully functional Chapter-wise Practice.
- Added reusable question filtering utility.
- Added dynamic practice session titles.

### Components
- Added reusable EmptyState component.

### User Experience
- Replaced browser alerts with friendly empty-state screens.
- Improved navigation for empty practice sessions.

### Architecture
- Added generic question filtering utility for future practice modes.
- Reused the same Practice Session for Random, Subject, and Chapter practice.

---

# Version 0.3.0 - Practice Mode Architecture

## Added

### Practice Navigation
- Added dedicated Practice menu.
- Added Random Practice page.
- Added Subject-wise Practice page.
- Added Chapter-wise Practice page.
- Added Practice Session page.

### Components
- Added reusable PageHeader component.
- Added reusable SelectionCard component.

### Practice System
- Implemented Fisher-Yates shuffle for random practice.
- Added router state for passing practice session data.
- Displayed practice session title.
- Added friendly "No Practice Session" screen.

### Data
- Added subjects.js.
- Added chapters.js.

### Architecture
- Improved routing structure for practice modes.
- Decoupled Practice Session from the question data source.

---

# Version 0.2.0 - Interactive Practice Module

## Added

### Routing
- Integrated React Router.
- Added application routing.
- Created reusable Layout component.
- Added 404 Not Found page.

### Dashboard
- Dashboard cards are now generated dynamically from a data file.
- Dashboard cards support navigation between pages.

### Practice Module
- Created Practice page.
- Created QuestionCard component.
- Created OptionButton component.
- Added sample question dataset.
- Displayed questions from a reusable data source.
- Implemented option selection.
- Added inline validation when no option is selected.
- Added answer submission.
- Displayed correct and incorrect feedback.
- Highlighted correct answer in green.
- Highlighted incorrect selected answer in red.
- Displayed explanation after submission.
- Implemented Next Question functionality.
- Added End of Practice state.
- Displayed subject and chapter information.
- Displayed question progress (Question X of Y).

---

# Version 0.1.0 - Project Foundation

## Added

### Project Setup
- Initialized Git repository.
- Connected project to GitHub.
- Configured .gitignore.
- Added project documentation.

### Documentation
- Added README.md.
- Added PROJECT.md.
- Added CHANGELOG.md.

### Frontend
- Created React application using Vite.
- Configured ESLint.
- Organized project folder structure.
- Created reusable DashboardCard component.
- Built Home page.
- Added responsive dashboard layout.
- Added navigation bar.
- Applied initial application color theme.