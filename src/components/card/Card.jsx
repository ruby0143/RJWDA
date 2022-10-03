import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div class="card col-lg-3 col-md-3">
      <div class="card-body">
        <h5 class="card-title">Position</h5>
        <p class="card-text">{props.position}</p>
        <h6 class="company-name">Company Name</h6>
        <p class="card-text">{props.company}</p>
        <h6 class="Job-Location">Job-Location :</h6>
        <p class="JL">{props.location}</p>
        <h6 class="CTC">CTC :</h6>
        <p class="ctc">{props.ctc}</p>
        <h6 class="skills-required">Job Description :</h6>
        <p class="SR">{props.desc}</p>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-whatever="@fat"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Card;
