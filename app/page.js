import Footer from "../components/footer";
import Header from "../components/header";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-between items-center">
      <Header />
      <div className="font-poppins font-extrabold text-4xl">
        Home
      </div>
      <div className="font-poppins font-semibold text-4xl">
        Home
      </div>
      <Footer />
    </main>
  );
}
