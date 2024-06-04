import axios from "axios";
import { useQuery } from "react-query";

export interface User {
  id: string;
  channelId: string;
}

const fetchUserByEmail = (email: string) =>
  axios.get(`http://localhost:1313/users/${email}`);
const fetchCoursesByChannelId = (channleId: string | undefined) =>
  axios.get(`http://localhost:1313/channels/${channleId}`);

const DependedQueries = ({ email }: { email: string }) => {
  const { data: channelId } = useQuery(
    ["user", email],
    () => fetchUserByEmail(email),
    {
      select: (data) => {
        const user: User = data.data;
        const channelId: string = user.channelId;
        return channelId;
      },
    }
  );

  const { data } = useQuery(
    ["courses", channelId],
    () => fetchCoursesByChannelId(channelId),
    {
      enabled: !!channelId,
    }
  );
  console.log(data?.data);

  return <main>Inspect console or use RQ-devTool for results</main>;
};

export default DependedQueries;
