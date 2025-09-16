import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";
import JobTab from "./components/JobTab/JobTab";
import Navbar from "./components/Navbar/Navbar";
import Title from "./components/Title/Title";

const jobSections = [
  { id: 1, title: "Sent" },
  { id: 2, title: "Interview" },
  { id: 3, title: "Offer" },
];

const jobOffers = [
  {
    id: 1,
    sectionId: 1,
    title: "Frontend Developer",
    company: "Tech Corp",
  },
  {
    id: 2,
    sectionId: 2,
    title: "UI/UX Designer",
    company: "Creative Studio",
  },
  {
    id: 3,
    sectionId: 2,
    title: "Backend Developer",
    company: "Data Solutions",
  },
];

function renderJobTabs(sectionId: number) {
  return jobOffers
    .filter((offer) => offer.sectionId === sectionId)
    .map((offer) => <JobTab key={offer.id} />);
}

function sections() {
  return jobSections.map((section) => (
    <div className="max-h-[60vh] border-4 rounded-md text-accent-azure overflow-scroll transparent-bar">
      <h2 className="bg-base-gray sticky top-0 text-center py-4 font-extrabold uppercase text-xl">
        {section.title}
      </h2>
      {renderJobTabs(section.id)}
    </div>
  ));
}

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh] bg-base-gray">
        <div className="text-center py-6">
          <Title title="Your Job Offers" />
          <Button type="button" text="+ Add Job Offer" isSelected={false} />
        </div>
        <section className="grid grid-cols-3 gap-8 px-8 pb-8">
          {sections()}
        </section>
      </main>
      <footer className="bg-base text-white p-8">
        <Footer />
      </footer>
    </>
  );
}

export default App;
