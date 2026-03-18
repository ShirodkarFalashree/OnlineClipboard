import { useState } from "react";
import axios from "axios";

function Create() {
  const [text, setText] = useState("");
  const [code, setCode] = useState("");

  const handleSubmit = async () => {
    const res = await axios.post("http://localhost:5000/create", { text });
    setCode(res.data.code);
  };

  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700">
      <h2 className="text-xl font-semibold mb-4">Create Clipboard</h2>

      <textarea
        className="w-full h-32 p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Paste your text here..."
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 transition-all py-2 rounded-lg font-semibold"
      >
        Generate Code
      </button>

      {code && (
        <div className="mt-4 text-center">
          <p className="text-gray-400">Your Code:</p>
          <h3 className="text-2xl font-bold text-green-400">{code}</h3>
        </div>
      )}
    </div>
  );
}

export default Create;