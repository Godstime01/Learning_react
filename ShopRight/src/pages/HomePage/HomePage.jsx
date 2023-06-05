import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import FeatureSection from './components/FeatureSection';


const HomePage = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <FeatureSection />
        <Footer />
    </div>
  )
}

export default HomePage;