import "./BookmarkButton.css";

import { useState } from "react";

import {
  addBookmark,
  isBookmarked,
  removeBookmark,
} from "../../utils/questionCollections";

function BookmarkButton({ question }) {
  const [, forceUpdate] = useState(0);

  const bookmarked = isBookmarked(question.id);

  function handleBookmark() {
    if (bookmarked) {
      removeBookmark(question.id);
    } else {
      addBookmark(question);
    }

    forceUpdate((value) => value + 1);
  }

  return (
    <button
      className={`bookmark-button ${
        bookmarked ? "bookmarked" : ""
      }`}
      onClick={handleBookmark}
      type="button"
    >
      {bookmarked ? "★" : "☆"}{" "}
      {bookmarked
        ? "Bookmarked"
        : "Bookmark"}
    </button>
  );
}

export default BookmarkButton;