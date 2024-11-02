import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import FeedbackItem from "./FeedbackItem";
import { useFeedbackItemsContext } from "../../hooks/useFeedbackItemsContext";

export default function FeedbackList() {
  const { isLoading, errorMessage, filteredFeedbackItems } = useFeedbackItemsContext();
  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {filteredFeedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
