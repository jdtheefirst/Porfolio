import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../style.css"; // Custom CSS for further styling

const timelineData = [
  {
    year: "2025",
    title: "Founder & Full Stack Developer, Creator-HQ",
    description:
      "Designed and built Creator-HQ — a no-code, all-in-one site builder for content creators. Enabled users to manage stores, courses, bookings, newsletters, and VIP content under their own domain with no recurring platform fees. Integrated Supabase, Stripe, and Next.js for scalable multi-tenant deployment.",
  },
  {
    year: "2025",
    title: "Technical Architect, Ordate",
    description:
      "Designed and implemented key systems for a modern dating app, including wallet integration, payment processing, waitlist logic, and a responsive mobile-first UI using Next.js, Firebase, and PostgreSQL.",
  },
  {
    year: "2024",
    title: "Full Stack Developer at World Samma Federation",
    description:
      "Spearheaded the development of a scalable full-stack application, integrating dynamic CMS features and advanced user analytics to boost organizational operations and online engagement.",
  },
  {
    year: "2023",
    title: "Founder & Lead Developer, IntimatesPlus",
    description:
      "Launched IntimatesPlus, a pioneering dating platform featuring real-time chat, video, and voice calls, transforming the online dating experience with innovative, user-focused features.",
  },
  {
    year: "Sep 2021",
    title: "Full Stack Developer Training, FreeCodeCamp",
    description:
      "Mastered web design, JavaScript algorithms, and full stack development through an intensive curriculum, refining both front-end and back-end capabilities.",
  },
  {
    year: "2020",
    title: "University Enrollment",
    description:
      "Began my Bachelor’s journey at Mount Kenya University, majoring in Technology in Computer and Electronic Systems — blending software and hardware foundations.",
  },
  {
    year: "2019",
    title: "High School Graduate with Engineering Ambitions",
    description:
      "Graduated with a vision to build things that matter — from circuit boards to code. This passion fueled my move into the tech world.",
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
      <h2 className="text-heading">My Engineering Journey</h2>
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
