import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Event() {
  return (
    <section className="event-section">
      {/* 상단 오픈 이벤트 배너 */}
      <div className="event-top-banner">
        <img
          src={process.env.PUBLIC_URL + '/img/open-event.png'}
          alt="2026 오픈 이벤트"
        />
      </div>

      <Tabs defaultActiveKey="open" className="event-tabs mb-3">
        <Tab eventKey="open" title="2026 오픈 이벤트">
          <div className="event-banner">
            <img
              src={process.env.PUBLIC_URL + '/img/event1.png'}
              alt="프리미엄 타월 할인"
            />
          </div>
        </Tab>

        <Tab eventKey="gift" title="선물세트">
          <div className="event-banner">
            <img
              src={process.env.PUBLIC_URL + '/img/event2.png'}
              alt="타월 선물세트 할인"
            />
          </div>
        </Tab>
      </Tabs>
    </section>
  );
}

export default Event;
