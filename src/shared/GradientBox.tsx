import styled from "styled-components";

const GradientBox = styled.div`
  background: #2980b9; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2980b9,
    #31c3f7,
    #6dd5fa
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2980b9,
    #31c3f7,
    #6dd5fa
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: 400px;
  display: flex;
  align-items: center;
`;

export default GradientBox;
