import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick, disabled }) {
  return (
    <button
      className={css.button}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      Load more
    </button>
  );
}