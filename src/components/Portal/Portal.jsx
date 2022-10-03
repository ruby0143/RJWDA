import React, { useState, useEffect } from "react";
import "./portal.css";
import Card from "../card/Card";
import { Jobs } from "./Jobs";

function Portal() {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [qualif, setQualif] = useState("");
  const [passout, setPassout] = useState("");
  const [search, setSearch] = useState("");
  const [checked, setChecked] = useState([]);
  const [fileredJobs, setFilter] = useState([]);
  const [appliedCads, setCad] = useState([]);
  useEffect(() => {
    setFilter(
      Jobs.filter((val) => {
        if (search == "") {
          return val;
        } else if (val.position.toLowerCase().includes(search.toLowerCase())) {
          return val;
        } else if (val.company.toLowerCase().includes(search.toLowerCase())) {
          return val;
        }
      })
    );
    // console.log(fileredJobs);
  }, [search]);

  const updateName = (e) => {
    setName(e.target.value);
  };
  const updatePosition = (e) => {
    setPosition(e.target.value);
  };
  const updateQualif = (e) => {
    setQualif(e.target.value);
  };
  const updatePassout = (e) => {
    setPassout(e.target.value);
  };

  const addCheck = (e) => {
    const cb = document.getElementById("" + e.target.id);
    var key = cb.checked;
    if (key == true && checked.includes(e.target.value) == false) {
      checked.push(e.target.value);
    } else if (key == false && checked.includes(e.target.value) == true) {
      const index = checked.indexOf(e.target.value);
      if (index > -1) {
        checked.splice(index, 1);
      }
    }
    setFilter(
      Jobs.filter((val) => {
        if (checked.length == 0) {
          return val;
        }
        if (checked.includes(val.ctc)) {
          return val;
        } else {
          return false;
        }
      })
    );
  };

  const submit = () => {
    const cad = {
      name: name,
      position: position,
      qualification: qualif,
      passout: passout,
    };
    const close = document.getElementById("close");
    close.click();
    setName("");
    setPosition("");
    setQualif("");
    setPassout("");
    appliedCads.push(cad);
    console.log(appliedCads);
  };

  return (
    <div className="cnt">
      <div className="search">
        <div className="left">
          <h2>Job Portal</h2>
          <h5>Apply and filter out jobs based on your preferences.</h5>
        </div>
        <div className="right">
          <div className="searchBar">
            <input
              className="sbar"
              type="text"
              placeholder="Search for Companies or Roles...."
              onChange={(e) => {
                setSearch(e.target.value);
                console.log(search);
              }}
            />
          </div>

          <div className="checks ">
            <div className="box">
              <label>9lpa</label>
              <input
                type="checkbox"
                id="9lpa"
                value="9lpa"
                onClick={addCheck}
              />
            </div>
            <div className="box">
              <label>12lpa</label>
              <input
                type="checkbox"
                id="12lpa"
                value="12lpa"
                onClick={addCheck}
              />
            </div>
            <div className="box">
              <label>14lpa</label>
              <input
                type="checkbox"
                id="14lpa"
                value="14lpa"
                onClick={addCheck}
              />
            </div>
            <div className="box">
              <label>16lpa</label>
              <input
                type="checkbox"
                id="16lpa"
                value="16lpa"
                onClick={addCheck}
              />
            </div>
          </div>
        </div>
      </div>

      <hr className="hr" />
      <div className="jobs row">
        {fileredJobs.map((job, index) => {
          return (
            <Card
              position={job.position}
              company={job.company}
              desc={job.desc}
              ctc={job.ctc}
              id={job.id}
              location={job.location}
            />
          );
        })}
      </div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Apply for a Job
              </h5>
              <button
                type="button"
                class="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="inp">
              <label for="recipient-name" class="col-form-label">
                Your Name
              </label>
              <input
                type="text"
                class="form-control"
                id="recipient-name"
                onChange={updateName}
                value={name}
              />
            </div>
            <div class="inp">
              <label for="message-text" class="col-form-label">
                Apply Position
              </label>
              <input
                class="form-control"
                id="message-text"
                onChange={updatePosition}
                value={position}
              />
            </div>
            <div class="inp">
              <label for="message-text" class="col-form-label">
                Qualification
              </label>
              <input
                class="form-control"
                id="message-text"
                onChange={updateQualif}
                value={qualif}
              />
            </div>
            <div class="inp">
              <label for="message-text" class="col-form-label">
                Passout Year
              </label>
              <input
                class="form-control"
                id="message-text"
                onChange={updatePassout}
                value={passout}
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                id="close"
              >
                Close
              </button>
              <button type="submit" class="btn btn-primary" onClick={submit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portal;
