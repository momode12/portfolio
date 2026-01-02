import About from "../components/About";

interface HomeProps {
  darkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ darkMode }) => {
  return (
    <>
      <About darkMode={darkMode} />
    </>
  );
};

export default Home;
