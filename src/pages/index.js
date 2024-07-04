import MainLayout from "@/layouts/mainLayout/mainLayout";
import styles from "./index.module.scss";

const Home = () => {
  return <div>Home</div>;
};

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
