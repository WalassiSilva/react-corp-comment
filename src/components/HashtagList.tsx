import { useFeedbackItemsStore } from "../stores/feedbackItemsStore";
import HashtagItem from "./hashtag/HashtagItem";

export default function HashtagList() {
  const companyList = useFeedbackItemsStore((state) => state.getCompanyList());
  const selectCompany = useFeedbackItemsStore(
    (state) => state.selectCompany
  );
  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashtagItem
          key={company + Date.now()}
          company={company}
          onSelectedCompany={selectCompany}
        />
      ))}
    </ul>
  );
}
