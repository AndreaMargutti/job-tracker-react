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
        <section className="grid grid-cols-3 gap-8 px-8 pb-8">
          <div className="max-h-[60vh] bg-red-500 overflow-scroll transparent-bar">
            <h2 className="sticky top-0 bg-amber-400 text-center font-extrabold uppercase text-xl">
              Sent
            </h2>
            <section className="p-4">
              <div className="bg-blue-500 mb-4">
                <h2>TITOLO OFFERTA</h2>
                <h4>Nome Azienda</h4>
                <p>Luogo</p>
                <a href="#">Altre informazioni</a>
              </div>
              <div className="bg-blue-500 mb-4">
                <h2>TITOLO OFFERTA</h2>
                <h4>Nome Azienda</h4>
                <p>Luogo</p>
                <a href="#">Altre informazioni</a>
              </div>
              <div className="bg-blue-500 mb-4">
                <h2>TITOLO OFFERTA</h2>
                <h4>Nome Azienda</h4>
                <p>Luogo</p>
                <a href="#">Altre informazioni</a>
              </div>
              <div className="bg-blue-500 mb-4">
                <h2>TITOLO OFFERTA</h2>
                <h4>Nome Azienda</h4>
                <p>Luogo</p>
                <a href="#">Altre informazioni</a>
              </div>
              <div className="bg-blue-500 mb-4">
                <h2>TITOLO OFFERTA</h2>
                <h4>Nome Azienda</h4>
                <p>Luogo</p>
                <a href="#">Altre informazioni</a>
              </div>
            </section>
          </div>
          <div className="min-h-100 bg-red-500"></div>
          <div className="min-h-100 bg-red-500"></div>
        </section>
      </main>
    </>
  );
}

export default App;
