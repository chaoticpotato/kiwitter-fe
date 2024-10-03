import Twit from "./Twit";
import PageLayout from "./PageLayout";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import NewTwit from "./NewTwit";

export default function MainPage() {
  const { data } = useQuery({
    queryKey: ["mainPageTwits"],
    queryFn: () =>
      axios.get("https://kiwitter-node-77f5acb427c1.herokuapp.com/twits"),
  });

  return (
    <PageLayout>
      <div className="sticky top-20 mb-6 mx-0 sm:-mx-8">
        <NewTwit />
      </div>
      <div className="bg-white rounded-xl shadow-xl">
        {data
          ? data.data.data.map((twit) => <Twit key={twit.id} item={twit} />)
          : "yükleniyor"}
      </div>
    </PageLayout>
  );
}
