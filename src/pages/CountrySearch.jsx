import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) {
      return;
    }

    async function getCountry() {
      const data = await fetchByRegion(query);
      setCountries([...data]);
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
      </Container>
    </Section>
  );
};
