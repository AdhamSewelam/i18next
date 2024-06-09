import react, { Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Container, Card, Row, Col, Button, Dropdown } from "react-bootstrap";

import "./App.css";
import RTLStyle from "./AppRTL.module.css";

const locales = {
  en: { title: "English" },
  ar: { title: "Arabic" },
};

function App() {
  const { t, i18n } = useTranslation();

  const RTL = i18n.resolvedLanguage === "ar" && RTLStyle;

  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n.language]);

  return (
    <Suspense fallback="...loading">
      <Container>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {locales[i18n.language].title}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {Object.keys(locales).map((lang) => (
              <Dropdown.Item
                key={lang}
                onClick={() => i18n.changeLanguage(lang)}
              >
                {locales[lang].title}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <h1 className={`"my-5" ${RTL.header}`}>{t("main.header")}</h1>
        <p>
          {t("notification.message", {
            count: 4,
          })}
        </p>

        <Row>
          <Col md={6} className="my-3">
            <Card>
              <Card.Body>
                <Card.Title>{t("Cards.card1.header")}</Card.Title>
                <Card.Text>{t("Cards.card1.content")}</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="my-3">
            <Card>
              <Card.Body>
                <Card.Title>{t("Cards.card2.header")}</Card.Title>
                <Card.Text>{t("Cards.card2.content")}</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="my-3">
            <Card>
              <Card.Body>
                <Card.Title>{t("Cards.card3.header")}</Card.Title>
                <Card.Text>{t("Cards.card3.content")}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Suspense>
  );
}

export default App;
