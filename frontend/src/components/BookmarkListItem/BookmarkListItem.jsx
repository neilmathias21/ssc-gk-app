import "./BookmarkListItem.css";

function BookmarkListItem({
  bookmark,
  onClick,
  onDelete,
}) {
  const bookmarkDate = new Date(
    bookmark.bookmarkedAt
  ).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <button
      className="bookmark-list-item"
      onClick={onClick}
      type="button"
    >
      <div className="bookmark-row">

        <span className="bookmark-title">
          ⭐ {bookmark.subject} •{" "}
          {bookmark.chapter} •{" "}
          {bookmark.question.question}
        </span>

        <div className="bookmark-actions">

          <span className="bookmark-date">
            {bookmarkDate}
          </span>

          <button
            className="delete-bookmark-button"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onDelete(bookmark);
            }}
          >
            🗑
          </button>

        </div>

      </div>
    </button>
  );
}

export default BookmarkListItem;