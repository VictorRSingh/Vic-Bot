import { Container, Col, Row } from "react-bootstrap";

export default function Hobbies(props) {
  return (
    <>
      <Col className="text-center" md={{ span: 6 }}>
        <Container>
          <Row>
            <Col>
              <h4>Hobbies & Interests:</h4>
                I enjoy playing video games with my friends in my spare time.
                <br />
                Some game titles i play are:
                  <li>
                    <a
                      href="https://www.leagueoflegends.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      League of Legends
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://overwatch.blizzard.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Overwatch
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.valheimgame.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Valheim
                    </a>
                  </li>
                I have also taken interest in coding a Discord Bot using{" "}
                <a
                  href="https://discord.js.org/#/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DiscordJS
                </a>{" "}
                with multifunctionality. A big part of my coding experience into
                practice has revolved around making this Discord bot that i have
                been coding since September.

            </Col>
          </Row>
        </Container>
      </Col>
    </>
  );
}
