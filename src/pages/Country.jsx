import { Section, Container, CountryInfo, Loader } from 'components';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { countryId } = useParams();
  const [country, setCountry] = useState('');

  useEffect(() => {
    setIsLoading(true);
    fetchCountry(countryId)
      .then(resp => {
        setCountry(resp);
      })
      .finally(() => setIsLoading(false));
  }, [countryId]);

  return (
    <Section>
      <Container>
        <CountryInfo country={country} />
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};
