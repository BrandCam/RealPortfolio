import styled from "styled-components";

const DescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  span {
    justify-self: center;
    text-align: center;
  }
  .description {
    display: flex;
    flex-direction: row;

    div {
      width: 50%;
    }
    .selector {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      border-right: 5px solid white;
      min-height: 300px;
      button {
        font-family: "Press Start 2P", cursive;
        color: white;
        font-size: 1.3rem;
      }
      button:focus {
        outline-style: none;
      }
      button:hover {
        cursor: pointer;
      }
      button.selected {
        color: rgb(100, 255, 100);
      }
    }
    ul {
      margin: 0;
      padding: 0 0 0 15px;
      text-indent: 0;
      list-style-type: none;
      width: 50%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      li {
        font-family: "Press Start 2P", cursive;
        margin-right: 15px;
        font-size: 1rem;
      }
    }
    .content {
      padding: 0 0 0 15px;
      width: 50%;
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
    }
    .links {
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      a {
        font-family: "Press Start 2P", cursive;
        color: rgba(255, 255, 255, 1);
        text-decoration: none;
        font-size: 1.3rem;
      }
      a:hover {
        color: rgba(100, 255, 100, 1);
      }
    }
  }
`;

export default DescriptionWrap;
