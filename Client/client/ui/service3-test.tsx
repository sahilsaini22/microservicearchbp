"use client";
import { useEffect, useState } from "react";
import axios from "axios";

interface Post {
  message: string;
}

export function Service1Text() {
  const [data, setData] = useState<Post[]>([]); // Ensure it's an array
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<Post[]>("/api/service3check")
      .then((response) => {
        // Ensure response data is always an array
        const formattedData = Array.isArray(response.data) ? response.data : [response.data];
        setData(formattedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Fetched from Next.js API Route</h1>
      <ul>
        {data.map((post, index) => (
          <li key={index}>{post.message}</li>
        ))}
      </ul>
    </div>
  );
}
