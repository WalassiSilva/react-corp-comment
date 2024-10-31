import { useState, useEffect } from "react";
import FeedbackItem from "./FeedbackItem";
import Spinner from "./Spinner";

// const feedbackItemsExemple = [
//   {
//     id: 1,
//     name: "Nike",
//     badge: "N",
//     feedback: "Great quality and comfort. Really enjoy wearing these.",
//     upvotes: 412,
//     daysAgo: 4,
//   },
//   {
//     id: 2,
//     name: "Adidas",
//     badge: "A",
//     feedback:
//       "Stylish, but I found them slightly uncomfortable after long hours.",
//     upvotes: 350,
//     daysAgo: 12,
//   },
//   {
//     id: 3,
//     name: "Puma",
//     badge: "P",
//     feedback: "Durable and fits well. A reliable brand.",
//     upvotes: 290,
//     daysAgo: 10,
//   },
//   {
//     id: 4,
//     name: "Reebok",
//     badge: "R",
//     feedback: "Affordable but didn’t meet my expectations on quality.",
//     upvotes: 276,
//     daysAgo: 13,
//   },
//   {
//     id: 5,
//     name: "Under Armour",
//     badge: "U",
//     feedback: "Perfect for workouts. Good support and comfort.",
//     upvotes: 198,
//     daysAgo: 7,
//   },
//   {
//     id: 6,
//     name: "New Balance",
//     badge: "NB",
//     feedback: "Looks good but the sizing was a bit off.",
//     upvotes: 158,
//     daysAgo: 6,
//   },
//   {
//     id: 7,
//     name: "ASICS",
//     badge: "A",
//     feedback: "Ideal for running. Lightweight and comfortable.",
//     upvotes: 222,
//     daysAgo: 6,
//   },
//   {
//     id: 8,
//     name: "Converse",
//     badge: "C",
//     feedback: "Classic style, but lacks arch support.",
//     upvotes: 310,
//     daysAgo: 2,
//   },
//   {
//     id: 9,
//     name: "Vans",
//     badge: "V",
//     feedback: "Cool design, but wore out faster than expected.",
//     upvotes: 289,
//     daysAgo: 1,
//   },
//   {
//     id: 10,
//     name: "Fila",
//     badge: "F",
//     feedback: "Good for everyday use. Decent quality for the price.",
//     upvotes: 134,
//     daysAgo: 1,
//   },
// ];
export default function FeedbackList() {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFeedbackItems(data.feedbacks);
        setIsLoading(false);
        console.log(isLoading);
        
      });
  }, []);
  return (
    <ol className="feedback-list">
      {isLoading ? <Spinner /> : null}
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
