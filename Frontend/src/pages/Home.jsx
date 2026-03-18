import Create from "../components/Create";
import Get from "../components/Get";

function Home() {
  return (
    <div className="w-full max-w-4xl p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        🚀 Online Clipboard
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <Create />
        <Get />
      </div>
    </div>
  );
}

export default Home;