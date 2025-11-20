import React from "react";
import { coursesData } from "../data/courses";

const FeaturedCourses = () => {
  const featuredCourses = coursesData;

  return (
    <section className="skills-section">
      <div className="courses-title">
        <h2>Skills to transform your career and life</h2>
        <p>
          From critical skills to technical topics, Udemy supports your professional development.
        </p>
        <img
          src="public/pictures/tab.png"
          alt="text 8"
          className="header-image" 
        />

      </div>
      <div className="skills-container">
        {featuredCourses.map((course) => {
            const badgeClass = course.badge === 'Premium' 
                ? 'highlight is-premium' 
                : 'highlight';
            
            return (
              <div key={course.id} className="skill-card">
                <img src={course.image} alt={course.title} />
                <h3>{course.title}</h3>
                <p className="mentor">{course.instructor}</p>
                <div className="course-stats">
                  {course.badge && <span className={badgeClass}>{course.badge}</span>}
                  
                  <div className="stars">
                    <span className="rating-score">⭐ {course.rating}</span>
                <span className="rating-count">{course.reviews}</span> 
                  </div>
                </div>

                {/*Prices */}
                <div className="course-prices">
                    {/* Current Price */}
                    <p className="current-price">{course.price}</p> 
                    {/* Original Price */}
                    {course.originalPrice && <p className="original-price">{course.originalPrice}</p>}
                </div>

              </div>
            )
        })}
      </div>
    </section>
  );
};

export default FeaturedCourses;


