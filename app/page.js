import Footer from "../components/footer";
import Header from "../components/header";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-between items-center">
      <Header />
      <div>
        Home
      </div>
      <Footer />
    </main>
  );
}
