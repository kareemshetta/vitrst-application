import React, { useEffect, useState } from "react";

interface IData {
  id: number;
  title: string;
  // Define other properties as needed
}

const FetchDataComponent: React.FC = () => {
  const [data, setData] = useState<IData[]>([]);
  const [error, setError] = useState<string | null>("");
  console.log("err", error);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: IData[] = await response.json();
        setData(data);
      } catch (error: any) {
        console.log(error.message);

        setError(error.message);
        // console.log(error.message);
      }
    };

    fetchData();
  }, []);

  // if (error) {
  //   return <div>Error fetching data: {error}</div>;
  // }

  return (
    <div>
      <h2>Data List</h2>

      {error && <div> {error}</div>}
      {data.length !== 0 && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchDataComponent;
