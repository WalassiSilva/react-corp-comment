import { TriangleUpIcon } from "@radix-ui/react-icons";
type FeedbackItemProps = {
  feedbackItem: FeedbackItem;
};
type FeedbackItem = {
  id: 1;
  company: string;
  badgeLetter: string;
  upvoteCount: number;
  daysAgo: number;
  text: number;
};
export default function FeedbackItem({ feedbackItem }: FeedbackItemProps) {
  return (
    <li className="feedback">
      <button>
        <TriangleUpIcon />
        <span>{feedbackItem.upvoteCount}</span>
      </button>

      <div>
        <p>{feedbackItem.badgeLetter}</p>
      </div>

      <div>
        <p>{feedbackItem.company}</p>
        <p>{feedbackItem.text}</p>
      </div>
      <p>{feedbackItem.daysAgo}d</p>
    </li>
  );
}
