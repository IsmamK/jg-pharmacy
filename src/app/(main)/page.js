import Footer from '@/components/Footer';
import ProductSection from '@/components/Collection';
import SubNavbar from '@/components/SubNavbar';
import Banner from '@/home/Banner';
import CategoryComponent from '@/home/CategoryComponent';
import GradientCardComponent from '@/home/GradientCardComponent';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <GradientCardComponent />
      <CategoryComponent />
      <ProductSection id={1} productName='top-seals' />
      <ProductSection id={2} productName='top-seals' />
      <ProductSection id={3} productName='top-seals' />
      <ProductSection id={4} productName='top-seals' />
      <Footer />
    </div>
  );
};

export default HomePage;