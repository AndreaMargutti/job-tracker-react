import Button from "./components/Button/Button";
import Navbar from "./components/Navbar/Navbar";
import Title from "./components/Title/Title";

// TODO: implement the openModal function for the "add job offers button"

const openModal = () => {};

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-100 bg-[#3F3F3F]">
        <div className="text-center py-6">
          <Title title="Your Job Offers" />
          <Button
            type="button"
            text="+ Add Job Offer"
            isSelected={false}
            onSelect={() => openModal()}
          />
        </div>
      </main>
    </>
  );
}

export default App;
