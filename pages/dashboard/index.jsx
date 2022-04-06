import useSWR from "swr";

const fetcher = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};
const Dashboard = () => {
  const { data, error } = useSWR("dashboard", fetcher);
  if (error) return "failed to load";
  if (!data) return " Loading...";
  console.log(data);
  return (
    <>
      <h1 className="text"> Dashboard </h1>
    </>
  );
};

export default Dashboard;
