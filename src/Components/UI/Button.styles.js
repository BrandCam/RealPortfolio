import styled from "styled-components";
import { Link } from "react-router-dom";
import bg from "../../img/menu-button-background.svg";

const Button = styled(Link)`
  font-family: "Arcade Normal", Helvetica, Arial, sans-serif;
  color: white;
  padding: 15px 40px 13px 50px;
  font-size: 1.8rem;
  margin-left: 10px;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-family: "Press Start 2P", cursive;
  background-image: url(${bg});
  @media (max-width: 800px) {
    position: relative;
    top: 110%;
  }
`;

export default Button;
