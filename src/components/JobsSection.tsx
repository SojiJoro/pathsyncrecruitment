// src/components/JobsSection.tsx
"use client"
// rest of the component code
import Link from 'next/link'

export default function JobsSection() {
  return (
    <section className="jobs_section">
      <h2>The Latest Jobs from Our Recruiters</h2>
      <p>Search our database to find the best IT and tech roles for you.</p>

      {/* Search Form */}
      <form className="jobs_search_form">
        <input type="text" placeholder="Job title or keyword" />
        <input type="text" placeholder="Location" />
        <button type="submit">Search</button>
      </form>

      {/* Example Table of Jobs */}
      <div className="jobs_table_wrapper">
        <table className="jobs_table">
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Location</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Software Engineer</td>
              <td>London</td>
              <td>Full-time</td>
            </tr>
            <tr>
              <td>DevOps Specialist</td>
              <td>Remote</td>
              <td>Contract</td>
            </tr>
            <tr>
              <td>Data Analyst</td>
              <td>Manchester</td>
              <td>Part-time</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="jobs_button_container">
        <Link href="/jobs" className="jobs_button">
          View All Jobs
        </Link>
      </div>

      {/* Additional Section (Optional) */}
      <div className="jobs_features">
        <h2>IT &amp; Tech Jobs Tailored for Your Needs</h2>
        <div className="jobs_features_cards">
          <div className="jobs_feature_card">
            <h3>Fully Authorised Roles</h3>
            <p>We only post genuine, verified vacancies from trusted recruiters.</p>
          </div>
          <div className="jobs_feature_card">
            <h3>Global Opportunities</h3>
            <p>Find remote and on-site roles around the world.</p>
          </div>
          <div className="jobs_feature_card">
            <h3>Expert Support</h3>
            <p>Our team is here to help you navigate the hiring process smoothly.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
