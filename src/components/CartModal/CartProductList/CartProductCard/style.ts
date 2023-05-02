import styled from "styled-components";

export const StyledCartProductCard = styled.li`
  list-style: none;

  position: relative;

  img:first-child {
  }

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #2e2e2e;
    position: absolute;
    top: -8px;
    left: 80px;
  }

  h2 {
    font-family: "Poppins", sans-serif;
    font-size: 13px;
    font-weight: 500;
    color: #2e2e2e;
    position: absolute;
    top: 18px;
    left: 80px;
  }

  p {
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #2e2e2e;
    position: absolute;
    top: -13px;
    left: 200px;
  }

  small {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #A098AE;
    position: absolute;
    top: 33px;
    left: 200px;
   text-decoration: line-through;
  }

  img:last-child {
   width: 26px;
   position: absolute;
    top: 15px;
    left: 300px;
    cursor: pointer;
  }
`;
