import MainLayout from "@/layouts/mainLayout/mainLayout";
import HomePage from "@/containers/home/homePage";

const Home = () => {
  return (
    <HomePage/>
  );
};

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
