import Home from '@modules/home';
import { transfromContriesData } from '@utils/index';
import { getTotalData, getCountries } from '@services/index';

export default Home;

export async function getStaticProps() {
  try {
    const restotal = await getTotalData();
    const resCountries = await getCountries();

    return {
      props: {
        total: restotal.data,
        countries: transfromContriesData(resCountries.data),
      },
    };
  } catch (error) {
    console.log('🚀 ~ file: index.js ~ line 27 ~ getServerSideProps ~ error', error);

    return {
      notFound: true,
    };
  }
}
