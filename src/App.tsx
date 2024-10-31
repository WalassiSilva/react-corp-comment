import { useEffect, useState } from "react";
import Footer from "./components/layout/Footer";
import HashtagList from "./components/HashtagList";
import { TFeedbackItem } from "./lib/types";
import Container from "./components/layout/Container";

function App() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddToList = async (text: string) => {
    const company = text
      .split(" ")
      .find((word) => word.includes("#"))!
      .substring(1);

    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      upvoteCount: 0,
      daysAgo: 0,
      text,
      company,
      badgeLetter: company[0].toUpperCase(),
    };

    setFeedbackItems([...feedbackItems, newItem]);

    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        body: JSON.stringify(newItem),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  useEffect(() => {
    setIsLoading(true);

    const fetchFeedbackItems = async () => {
      setIsLoading(true);

      try {
        const res = await fetch(
          "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
        );

        if (!res.ok) {
          throw new Error();
        }

        const data = await res.json();
        setFeedbackItems(data.feedbacks);
      } catch (error) {
        setErrorMessage("Something went wrong. Please try again later.");
      }
      setIsLoading(false);
    };

    fetchFeedbackItems();
  }, []);
  return (
    <div className="app">
      <Footer />
      <Container
        feedbackItems={feedbackItems}
        isLoading={isLoading}
        errorMessage={errorMessage}
        handleAddToList={handleAddToList}
      />
      <HashtagList />
    </div>
  );
}

export default App;
