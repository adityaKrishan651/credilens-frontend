import React, { useEffect } from "react";
import Chart from "chart.js/auto";
import "./Results.css";

function Results() {
  useEffect(() => {
    const score = 85;
    const riskLevel = "Medium";
    const riskData = { low: 60, medium: 30, high: 10 };

    new Chart(document.getElementById("scoreGauge"), {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [score, 100 - score],
            backgroundColor: ["#198754", "#e9ecef"],
            borderWidth: 0,
          },
        ],
      },
      options: {
        cutout: "75%",
        plugins: { legend: { display: false } },
      },
    });

    new Chart(document.getElementById("riskChart"), {
      type: "pie",
      data: {
        labels: ["Low", "Medium", "High"],
        datasets: [
          {
            data: [
              riskData.low,
              riskData.medium,
              riskData.high,
            ],
            backgroundColor: ["#198754", "#ffc107", "#dc3545"],
          },
        ],
      },
    });
  }, []);

  return (
    <div className="results-page">
      <header className="bg-primary text-white py-3">
        <div className="container text-center">
          <h3>Analysis Results</h3>
        </div>
      </header>

      <main className="container my-5">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card text-center">
              <div className="card-body">
                <h4>Credibility Score</h4>
                <canvas id="scoreGauge" width="200" height="200"></canvas>
                <p className="fs-5 mt-3">
                  <strong>85</strong> / 100
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card text-center">
              <div className="card-body">
                <h4>Risk Level</h4>
                <span className="badge bg-warning fs-6 mb-3">
                  Medium
                </span>
                <canvas id="riskChart"></canvas>
              </div>
            </div>
          </div>

          {/* SUPPORTING EVIDENCE */}
          <div className="row mt-5">
            <div className="col-12">
              <h4>Supporting Evidence</h4>
              <div className="card shadow-sm">
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <strong>Source Check:</strong> No matches in known scam databases
                    </li>
                    <li className="list-group-item">
                      <strong>Content Match:</strong> 95% similarity with verified sources
                    </li>
                    <li className="list-group-item">
                      <strong>Recommendation:</strong> Verify via official communication channels
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>

      </main>
      <footer className="text-center py-4 bg-light border-top mt-5">
        <button
          className="btn btn-primary me-3"
          onClick={() => window.location.href = "/"}
        >
          <i className="fas fa-rotate-right me-1"></i>
          Re-Analyze
        </button>

        <button className="btn btn-outline-secondary">
          <i className="fas fa-share-nodes me-1"></i>
          Share Results
        </button>
      </footer>

    </div>
  );
}

export default Results;