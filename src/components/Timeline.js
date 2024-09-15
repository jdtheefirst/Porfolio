import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../style.css"; // Custom CSS for further styling

const timelineData = [
  {
    year: "2024",
    title: "Full Stack Developer at World Samma Federation",
    description:
      "Spearheaded the development of scalable MERN stack applications, seamlessly integrating cutting-edge APIs, and driving significant improvements in business operations and performance.",
  },
  {
    year: "2023",
    title: "Founder & Lead Developer, IntimatesPlus",
    description:
      "Launched IntimatesPlus, a pioneering dating platform featuring real-time chat, video, and voice calls, transforming the online dating experience with innovative, user-focused features.",
  },
  {
    year: "Sep 2020",
    title: "Full Stack Developer Training, FreeCodeCamp",
    description:
      "Mastered web design, JavaScript algorithms, and full stack development through an intensive curriculum, refining my front-end and back-end skills.",
  },
  {
    year: "2020",
    title: "University Enrollment, B.Tech in Computer & Electronics",
    description:
      "Embarked on an exciting journey at Mount Kenya University, pursuing a Bachelor's degree in Technology and Electronic Systems to deepen my knowledge in engineering.",
  },
  {
    year: "2019",
    title: "High School Graduate with Engineering Ambitions",
    description:
      "Graduated with a clear vision to pursue engineering, igniting a passion for technology that would shape my future in higher education and beyond.",
  },
];

const TimelineItem = React.forwardRef(
  ({ year, title, description, isRight }, ref) => (
    <Row className="timeline-item" ref={ref}>
      <Col
        xs={12}
        md={5}
        className={isRight ? "text-md-right" : "text-md-left"}
      >
        <div className="timeline-content">
          <h3>{year}</h3>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </Col>
      <Col
        xs={12}
        md={2}
        className="d-flex justify-content-center align-items-center"
      >
        <div className="timeline-circle"></div>
      </Col>
      <Col xs={12} md={5} className={isRight ? "order-md-1" : ""}>
        <div className="timeline-spacer"></div>
      </Col>
    </Row>
  )
);

const DeveloperTimeline = () => {
  const timelineRefs = useRef([]); // Store refs for each timeline item

  useEffect(() => {
    const currentRefs = timelineRefs.current; // Capture current refs

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 } // Adjust as needed
    );

    currentRefs.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <Container className="timeline-container py-5">
      <h2 className="text-heading">My Developer Journey</h2>
      {timelineData.map((item, index) => (
        <TimelineItem
          key={index}
          year={item.year}
          title={item.title}
          description={item.description}
          isRight={index % 2 === 0}
          ref={(el) => (timelineRefs.current[index] = el)}
        />
      ))}
    </Container>
  );
};

export default DeveloperTimeline;
