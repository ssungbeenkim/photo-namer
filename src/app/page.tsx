"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [names, setNames] = useState([]);

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: text }),
      });
      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status${response.status}`)
        );
      }
      console.log(data);
      setCount(count + 1);
      setText("");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <main className="flex h-1/3 flex-col items-center justify-between bg-blue-400">
      <Image
        className="mt-8"
        src="/favicon.ico"
        alt="Next.js Logo"
        width={100}
        height={100}
        priority
      />
      <h3 className="mt-5 text-2xl font-bold">Name Something!!!</h3>
      <p>You've used this app {count} times!!!!!</p>
      <form onSubmit={onSubmit}>
        <input
          onChange={(e) => {
            setText(e.target.value);
          }}
          type="text"
          name="text"
          value={text}
          placeholder="Enter an Description"
          autoFocus
          className="my-2 border border-gray-400 px-2 outline-none"
        />
        <input
          value="Generate names"
          type="submit"
          className="ml-1 border border-gray-400 bg-gray-100 px-2"
        />
      </form>
    </main>
  );
}
