import { TriangleUpIcon } from "@radix-ui/react-icons";

export default function FeedbackItem({ feedbackItem }) {
  return (
    <li className="feedback">
      <button>
        <TriangleUpIcon />
        <span>{feedbackItem.upvotes}</span>
      </button>

      <div>
        <p>{feedbackItem.badge}</p>
      </div>

      <div>
        <p>{feedbackItem.name}</p>
        <p>{feedbackItem.feedback}</p>
      </div>
      <p>{feedbackItem.daysAgo}d</p>
    </li>
  );
}
