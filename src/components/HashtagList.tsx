import { useFeedbackItemsContext } from "../hooks/useFeedbackItemsContext";
import HashtagItem from "./hashtag/HashtagItem";


export default function HashtagList() {
  const { companyList, handleSelectedCompany } = useFeedbackItemsContext();
  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashtagItem
          key={company + Date.now()}
          company={company}
          onSelectedCompany={handleSelectedCompany}
        />
      ))}
    </ul>
  );
}
