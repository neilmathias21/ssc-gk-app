import "./Bookmarks.css";

import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import questions from "../../data/questions";
import BookmarkListItem from "../../components/BookmarkListItem/BookmarkListItem";

import {
  getBookmarks,
  removeBookmark,
} from "../../utils/questionCollections";

function Bookmarks() {
  const navigate = useNavigate();

  const [refreshKey, setRefreshKey] =
    useState(0);

  const [searchQuery, setSearchQuery] =
    useState("");

  const [selectedSubject, setSelectedSubject] =
    useState("All Subjects");

  const [selectedChapter, setSelectedChapter] =
    useState("All Chapters");

  const [sortOrder, setSortOrder] =
  useState("Newest First");

  const [bookmarkToDelete, setBookmarkToDelete] =
    useState(null);

  const allBookmarkedQuestions =
    useMemo(() => {
      const bookmarks =
        getBookmarks();

      return bookmarks
        .map((bookmark) => {
          const question =
            questions.find(
              (q) =>
                q.id ===
                bookmark.questionId
            );

          if (!question) {
            return null;
          }

          return {
            ...bookmark,
            question,
          };
        })
        .filter(Boolean);
    }, [refreshKey]);

  const bookmarkedQuestions =
    useMemo(() => {
      return allBookmarkedQuestions.filter(
        (bookmark) => {
          const search =
            searchQuery
              .toLowerCase()
              .trim();

          const matchesSearch =
            !search ||
            bookmark.subject
              .toLowerCase()
              .includes(search) ||
            bookmark.chapter
              .toLowerCase()
              .includes(search) ||
            bookmark.question.question
              .toLowerCase()
              .includes(search);

          const matchesSubject =
            selectedSubject ===
              "All Subjects" ||
            bookmark.subject ===
              selectedSubject;

          const matchesChapter =
            selectedChapter ===
              "All Chapters" ||
            bookmark.chapter ===
              selectedChapter;

          return (
            matchesSearch &&
            matchesSubject &&
            matchesChapter
          );
        }
      ).sort((a, b) => {
    if (sortOrder === "Newest First") {
      return (
        new Date(b.bookmarkedAt) -
        new Date(a.bookmarkedAt)
      );
    }

    return (
      new Date(a.bookmarkedAt) -
      new Date(b.bookmarkedAt)
    );
  });
    }, [
      allBookmarkedQuestions,
      searchQuery,
      selectedSubject,
      selectedChapter,
      sortOrder,
    ]);

  const subjects = [
    "All Subjects",
    ...new Set(
      allBookmarkedQuestions.map(
        (bookmark) =>
          bookmark.subject
      )
    ),
  ];

  const chapters = [
    "All Chapters",
    ...new Set(
      allBookmarkedQuestions
        .filter(
          (bookmark) =>
            selectedSubject ===
              "All Subjects" ||
            bookmark.subject ===
              selectedSubject
        )
        .map(
          (bookmark) =>
            bookmark.chapter
        )
    ),
  ];

  function handleRemoveBookmark() {
    removeBookmark(
      bookmarkToDelete.questionId
    );

    setBookmarkToDelete(null);

    setRefreshKey(
      (previousValue) =>
        previousValue + 1
    );
  }

  return (
    <div className="bookmarks-container">

      <div className="bookmarks-header">

        <button
          className="dashboard-button"
          onClick={() => navigate("/")}
        >
          🏠 Dashboard
        </button>

      </div>

      <h1>Bookmarks</h1>

      <input
        type="text"
        className="bookmark-search"
        placeholder="Search bookmarks..."
        value={searchQuery}
        onChange={(event) =>
          setSearchQuery(
            event.target.value
          )
        }
      />

      <select
        className="bookmark-filter"
        value={selectedSubject}
        onChange={(event) => {
          setSelectedSubject(
            event.target.value
          );

          setSelectedChapter(
            "All Chapters"
          );
        }}
      >
        {subjects.map((subject) => (
          <option
            key={subject}
            value={subject}
          >
            {subject}
          </option>
        ))}
      </select>

      <select
        className="bookmark-filter"
        value={selectedChapter}
        onChange={(event) =>
          setSelectedChapter(
            event.target.value
          )
        }
      >
        {chapters.map((chapter) => (
          <option
            key={chapter}
            value={chapter}
          >
            {chapter}
          </option>
        ))}
      </select>

      <select
        className="bookmark-filter"
        value={sortOrder}
        onChange={(event) =>
          setSortOrder(
            event.target.value
          )
        }
      >
        <option>
          Newest First
        </option>

        <option>
          Oldest First
        </option>
      </select>

      {bookmarkedQuestions.length ===
      0 ? (
        <p>No bookmarked questions.</p>
      ) : (
        bookmarkedQuestions.map(
          (bookmark) => (
            <BookmarkListItem
              key={bookmark.questionId}
              bookmark={bookmark}
              onClick={() =>
                navigate(
                  `/bookmarks/${bookmark.questionId}`
                )
              }
              onDelete={
                setBookmarkToDelete
              }
            />
          )
        )
      )}

      {bookmarkToDelete && (
        <div className="dialog-overlay">

          <div className="dialog-box">

            <h3>
              Remove Bookmark?
            </h3>

            <p>
              Are you sure you want
              to remove this
              bookmark?
            </p>

            <div className="dialog-buttons">

              <button
                className="cancel-button"
                onClick={() =>
                  setBookmarkToDelete(
                    null
                  )
                }
              >
                Cancel
              </button>

              <button
                className="leave-button"
                onClick={
                  handleRemoveBookmark
                }
              >
                Remove
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default Bookmarks;