import { useState } from "react";
import axios from "axios";

function Get() {
  const [code, setCode] = useState("");
  const [data, setData] = useState("");

  const handleFetch = async () => {
    const res = await axios.get(`http://localhost:5000/get/${code}`);
    setData(res.data.text);
  };

  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700">
      <h2 className="text-xl font-semibold mb-4">Retrieve Clipboard</h2>

      <input
        className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="Enter Code"
        onChange={(e) => setCode(e.target.value)}
      />

      <button
        onClick={handleFetch}
        className="mt-4 w-full bg-green-600 hover:bg-green-700 transition-all py-2 rounded-lg font-semibold"
      >
        Get Data
      </button>

      {data && (
        <div className="mt-4 p-3 bg-gray-800 rounded-lg border border-gray-600">
          <p className="text-gray-300">{data}</p>
        </div>
      )}
    </div>
  );
}

export default Get;