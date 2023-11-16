import Header from "./components/Header";

import Brands from "./components/Brands/Brands";
import TopSection from "./components/TopSection/TopSection";
import Footer from "./components/Footer";

type Props = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Home(props: Props) {
  const searchParams = props.searchParams;
  return (
    <div>
      <Header />
      <TopSection />
      <Brands searchParams={searchParams} />
      <Footer />
    </div>
  );
}
