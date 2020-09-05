import styled from "styled-components";

const DescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;

  span {
    justify-self: center;
    text-align: center;
    @media (max-width: 700px) {
      font-size: 1.1rem;
    }
  }
  .description {
    display: flex;
    flex-direction: row;
    @media (max-width: 700px) {
      flex-direction: column;
    }

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
      @media (max-width: 700px) {
        min-height: 100px;
        border-right: none;
        width: 100%;
        flex-direction: row;
        flex-wrap: wrap;
        border-bottom: 5px solid white;
      }
      button {
        font-family: "Press Start 2P", cursive;
        color: white;
        font-size: 1.3rem;
        @media (max-width: 700px) {
          margin-right: 10px;
        }
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
      @media (max-width: 700px) {
        min-height: 100px;

        width: 100%;
        flex-direction: row;
        flex-wrap: wrap;
      }
      li {
        font-family: "Press Start 2P", cursive;
        margin-right: 15px;
        font-size: 1rem;
        @media (max-width: 700px) {
          padding: 0;
        }
      }
    }
    .content {
      padding: 0 0 0 15px;
      width: 50%;
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      @media (max-width: 700px) {
        padding: 0;
        min-height: 100px;
        font-family: "Press Start 2P", cursive;
        width: 100%;
        flex-direction: row;
        flex-wrap: wrap;
        font-size: 1rem;
      }
      @media (max-width: 500px) {
        font-size: 0.8rem;
      }
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
