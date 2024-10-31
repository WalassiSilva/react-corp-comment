
export default function FeedbackForm() {
  return (
    <form className="form">
      <textarea id="feedback-textarea" placeholder="Write your feedback" spellCheck={false} />
      <label htmlFor="feedback-textarea">
        Write your feedback here, remember to #hashtag the company
      </label>
      <div>
        <p className="u-italic">150</p>
        <button>
          <span>submit</span>
        </button>
      </div>
    </form>
  );
}
