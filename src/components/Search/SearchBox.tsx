
import { Box, Container } from '@mui/material';
import styled from 'styled-components';
import SearchField from './SearchField';
import SearchSuggestion from './SearchSuggestion';

const GradientBox  = styled.div`
  background: #2980B9;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2980B9, #31c3f7, #6DD5FA);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right,#2980B9, #31c3f7, #6DD5FA); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: 400px;
  display: flex;
  align-items: center;
`;

const SearchFieldBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 100px;
`
const SearchBox = () => {
  return (
    <GradientBox>
      <Container maxWidth="lg">
        <SearchFieldBox>
          <Box position="relative">
            <SearchField />
          </Box>
        </SearchFieldBox>
      </Container>
    </GradientBox>
  )
}

export default SearchBox;