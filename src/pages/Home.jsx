import { Container, CountryList, Loader, Section } from 'components';
import { getCountries } from 'service/country-service';
import { useEffect, useState } from 'react';
export const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setIsLoading(true)
    getCountries().then(resp => setCountries(resp)).finally(() => setIsLoading(false))
  }, []);
  return (
    <Section>
      <Container>
        <CountryList countries={countries} />
        {isLoading && <Loader/>}
      </Container>
    </Section>
  );
};
