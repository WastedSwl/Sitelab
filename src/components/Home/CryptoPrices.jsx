import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import { FaQuestionCircle } from 'react-icons/fa'; // Иконка вопроса
import './CryptoPrices.css'; // Для кастомных стилей

const CryptoPrices = () => {
  const [cryptos, setCryptos] = useState([]);
  const [showHelp, setShowHelp] = useState(false); // Для управления модальным окном

  useEffect(() => {
    // Получаем данные о популярных криптовалютах
    const fetchCryptos = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              order: 'market_cap_desc',
              per_page: 6, // Количество популярных валют
              page: 1,
              sparkline: false
            }
          }
        );
        setCryptos(response.data);
      } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
      }
    };

    fetchCryptos();
  }, []);

  // Функции для показа и скрытия модального окна
  const handleShowHelp = () => setShowHelp(true);
  const handleCloseHelp = () => setShowHelp(false);

  return (
    <Container className="crypto-section">
      <div className="crypto-header">
        <h2 className="section-title">Example of API Usage</h2>
        <FaQuestionCircle className="help-icon" onClick={handleShowHelp} />
      </div>
      <p className="section-description">
        This section demonstrates how to fetch and display real-time cryptocurrency prices using CoinGecko API.
      </p>
      <Row>
        {cryptos.map((crypto) => (
          <Col key={crypto.id} md={4} className="crypto-col">
            <Card className="crypto-card">
              <Card.Body>
                <Card.Title className="crypto-name">{crypto.name}</Card.Title>
                <img
                  src={crypto.image}
                  alt={crypto.name}
                  className="crypto-logo"
                />
                <Card.Text>
                  <strong>Price:</strong> ${crypto.current_price.toFixed(2)} <br />
                  <strong>Market Cap:</strong> ${crypto.market_cap.toLocaleString()} <br />
                  <strong>24h Change:</strong>{' '}
                  <span
                    className={
                      crypto.price_change_percentage_24h > 0
                        ? 'positive-change'
                        : 'negative-change'
                    }
                  >
                    {crypto.price_change_percentage_24h.toFixed(2)}%
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Модальное окно с подсказкой */}
      <Modal show={showHelp} onHide={handleCloseHelp}>
        <Modal.Header closeButton>
          <Modal.Title>API Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            This data is fetched using the CoinGecko API, which provides real-time information on cryptocurrency prices, market capitalization, and 24h price changes.
          </p>
          <p>
            To fetch data, we use an API call to the CoinGecko public API, which does not require an API key. The data is dynamically displayed and styled based on market trends.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseHelp}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default CryptoPrices;
