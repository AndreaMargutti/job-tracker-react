import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";
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
        <section className="grid grid-cols-3 gap-8 px-8 pb-8">
          <div className="max-h-[60vh] border-4 rounded-md text-[#9be3dd] overflow-scroll transparent-bar">
            <h2 className="sticky top-0 text-center pt-4 font-extrabold uppercase text-xl">
              Sent
            </h2>
            <section className="p-4">
              <div className="bg-gray-500 rounded-md p-2 mb-4">
                <h2>TITOLO OFFERTA</h2>
                <h4>Nome Azienda</h4>
                <p>Luogo</p>
                <a href="#">Altre informazioni</a>
              </div>
            </section>
          </div>
        </section>
      </main>
      <footer className="bg-black text-white p-8">
        <Footer />
      </footer>
    </>
  );
}

export default App;
