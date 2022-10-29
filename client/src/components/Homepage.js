import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">Welcome to MediClub</h1>
        <p class="lead text-muted">Are you a patient or a doctor?</p>
        <p>
          <Link to="/Doctor/Register"><a href="#" class="btn btn-lg btn-warning my-2 mx-1">Doctor</a></Link>
          <Link to="/Patient/Register"><a href="#" class="btn btn-lg btn-success my-2 mx-1">Patient</a></Link>
        </p>
      </div>
    </div>
  </section>
  )
}

export default Homepage