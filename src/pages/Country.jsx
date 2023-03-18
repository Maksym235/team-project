import { Section, Container, CountryInfo, Loader } from 'components';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const { countryId } = useParams();
  const [country, setCountry] = useState('');

  
  
  useEffect(() => {
  fetchCountry(countryId).then(resp => {setCountry(resp)});
  }, [countryId])
  
  return (
    <Section>
      <Container>
        <CountryInfo country={country } />
      </Container>
    </Section>
  );
};
