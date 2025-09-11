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
      <main className="min-h-[80vh] bg-base-gray">
        <div className="text-center py-6">
          <Title title="Your Job Offers" />
          <Button
            type="button"
            text="+ Add Job Offer"
            isSelected={false}
            onSelect={() => openModal()}
          />
        </div>
        {/* Start of Table section */}
        <section className="grid grid-cols-3 gap-8 px-8 pb-8">
          {/*  Start of SENT section */}
          <div className="max-h-[60vh] border-4 rounded-md text-accent-azure overflow-scroll transparent-bar">
            <h2 className="bg-base-gray sticky top-0 text-center py-4 font-extrabold uppercase text-xl">
              Sent
            </h2>
            <section className="p-4 pt-0">
              <div className="bg-accent-gray rounded-md p-2 mb-4 shadow-md/45 shadow-accent-azure">
                <h2 className="font-bold text-lg uppercase ">TITOLO OFFERTA</h2>
                <div className="flex gap-2 mb-2">
                  <h4>Nome Azienda</h4>
                  <p>Luogo</p>
                </div>
                <a href="#">Altre informazioni</a>
              </div>
            </section>
          </div>
        </section>
      </main>
      <footer className="bg-base text-white p-8">
        <Footer />
      </footer>
    </>
  );
}

export default App;
