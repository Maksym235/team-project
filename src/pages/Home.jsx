import { Container, CountryList, Heading, Loader, Section } from 'components';
import { getCountries } from 'service/country-service';
import { useEffect, useState } from 'react';
export const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries().then(resp => setCountries(resp));
  }, []);
  return (
    <Section>
      <Container>
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
