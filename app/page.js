import Footer from "../components/footer";
import Header from "../components/header";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-between items-center">
      <Header />
      <div className="font-luciole font-normal text-4xl">
        Home
      </div>
      <div className="font-luciole font-normal italic text-4xl">
        Home
      </div>
      <div className="font-luciole font-bold text-4xl">
        Home
      </div>
      <div className="font-luciole font-bold italic text-4xl">
        Home
      </div>
      <Footer />
    </main>
  );
}
