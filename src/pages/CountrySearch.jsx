import {
  Container,
  SearchForm,
  Section,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const query = searchParams.get('query');
    if (!query) {
      return;
    }

    async function getCountry() {
      try {
        const data = await fetchByRegion(query);
        setCountries([...data]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getCountry();
  }, [searchParams]);

  const onSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onSubmit} />
        <CountryList countries={countries} />
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};
