import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function Event() {
  return (
    <section className="event-section">

      {/* 상단 오픈 이벤트 배너 */}
      <div className="event-top-banner">
        <img src="/img/open-event.png" alt="2026 오픈 이벤트" />
      </div>

      {/* 이벤트 탭 */}
      <Tabs defaultActiveKey="open" className="event-tabs">

        <Tab eventKey="open" title="OPEN EVENT">
          <div className="event-content">
            <div className="event-card">
              <img src="/img/event1.png" alt="프리미엄 타월 할인" />
            </div>
          </div>
        </Tab>

        <Tab eventKey="gift" title="GIFT SET">
          <div className="event-content">
            <div className="event-card">
              <img src="/img/event2.png" alt="타월 선물세트 할인" />
            </div>
          </div>
        </Tab>

      </Tabs>

    </section>
  );
}

export default Event;