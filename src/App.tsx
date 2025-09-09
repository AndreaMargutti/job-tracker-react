import Navbar from "./components/Navbar/Navbar";
import Title from "./components/Title/Title";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-100 bg-[#F3F6FA]">
        <div className="text-center py-6">
          <Title title="Your Job Offers" />
        </div>
      </main>
    </>
  );
}

export default App;
