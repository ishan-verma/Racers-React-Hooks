import React from "react";
import { Row, Col } from "react-awesome-styled-grid";
import styled from "styled-components";

const AllRacers = props => {
  // The AllRacers component accepts props of `races` and `winner`. The content of the `races` props is then used to listing out all the details, while the `winner` props is used to determine the world champion.
  let result = props.races;
  let winner = props.winner;

  console.log(result);
  return (
    <Main>
      <Row>
        {winner}
        {result.map(item => (
          <Col xs={4} md={2} key={item.round}>
            <Card>
              <CardBody>
                <CardTitle>{item.raceName}</CardTitle>
                <CardSubtitle>{item.Circuit.circuitName}</CardSubtitle>
                <CardSubtitle>
                  <a
                    href={item.Results[0].Driver.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span role="img" aria-label="Race Winner">
                      🏎️
                    </span>
                    {item.Results[0].Driver.familyName +
                      " " +
                      item.Results[0].Driver.givenName}
                    {/* We aready know who the world champion is thanks to the `winner` props. Here we're simply doing a check for every driver. If this particular driver being iterated on is the same as the value of the `winner` props, then display the 🏆 emoji, signifying that they were the world champion for that year */}
                    {item.Results[0].Driver.familyName +
                      " " +
                      item.Results[0].Driver.givenName ===
                    winner ? (
                      <span role="img" aria-label="Race Winner">
                        {" "}
                        🏆🏆🏆{" "}
                      </span>
                    ) : (
                      ""
                    )}
                  </a>
                </CardSubtitle>
                <CardSubtitle>
                  <span role="img" aria-label="Race Winner">
                    ⏲
                  </span>
                  {item.Results[0].Time.time}
                </CardSubtitle>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Main>
  );
};

export default AllRacers;

const Main = styled.div`
  margin: 20px auto 50px auto;
  width: 90%;
`;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: none;
  border-radius: 0.5rem;
  border-color: #c4c4c4;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px hsla(0, 0%, 76.9%, 0.4);
  margin-top: 20px;
`;

const CardBody = styled.div`
  flex: 1 1 auto;
  padding: 1.25rem;
`;
const CardTitle = styled.div`
  text-transform: capitalize;
  font-weight: 600;
`;
const CardSubtitle = styled.div`
  margin-top: 10px;
  font-size: 14px;
  text-transform: capitalize;
  color: #787878;
  a {
    text-decoration: none;
    color: #00b1ff;
  }
`;
