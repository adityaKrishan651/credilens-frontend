import React, { useState } from "react";
import "./App.css";

function Home() {
  const [inputType, setInputType] = useState("url");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setProgress(0);

    let value = 0;
    const interval = setInterval(() => {
      value += 10;
      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          if (Math.random() > 0.5) {
            alert("Analysis complete!");
          } else {
            setLoading(false);
            setError(true);
          }
        }, 500);
      }
    }, 200);
  };

  return (
    <>
      {/* HERO SECTION */}
      <header className="hero text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Detect Spam & Fraud Instantly</h1>
          <p className="lead">
            Upload a URL, paste text, or share an image to check credibility.
          </p>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-lg">
              <div className="card-header">
                <h3>Choose Your Input Type</h3>
                <div className="btn-group w-100">
                  <button
                    className={`btn btn-outline-primary ${
                      inputType === "url" ? "active" : ""
                    }`}
                    onClick={() => setInputType("url")}
                  >
                    URL
                  </button>
                  <button
                    className={`btn btn-outline-primary ${
                      inputType === "text" ? "active" : ""
                    }`}
                    onClick={() => setInputType("text")}
                  >
                    Text
                  </button>
                  <button
                    className={`btn btn-outline-primary ${
                      inputType === "file" ? "active" : ""
                    }`}
                    onClick={() => setInputType("file")}
                  >
                    File Upload
                  </button>
                </div>
              </div>

              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  {inputType === "url" && (
                    <div className="input-group mb-3">
                      <span className="input-group-text">
                        <i className="fas fa-link"></i>
                      </span>
                      <input
                        type="url"
                        className="form-control"
                        placeholder="https://example.com"
                        required
                      />
                    </div>
                  )}

                  {inputType === "text" && (
                    <div className="input-group mb-3">
                      <span className="input-group-text">
                        <i className="fas fa-edit"></i>
                      </span>
                      <textarea
                        className="form-control"
                        rows="4"
                        placeholder="Paste your text here..."
                        required
                      ></textarea>
                    </div>
                  )}

                  {inputType === "file" && (
                    <div className="input-group mb-3">
                      <input
                        type="file"
                        className="form-control"
                        accept="image/*,.pdf,.txt"
                        required
                      />
                      <span className="input-group-text">
                        <i className="fas fa-upload"></i>
                      </span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                    disabled={loading}
                  >
                    Analyze
                  </button>
                </form>

                {loading && (
                  <div className="text-center mt-3">
                    <div className="spinner-border text-primary"></div>
                    <p className="mt-2">Analyzing your input...</p>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="alert alert-danger mt-3">
                    <i className="fas fa-exclamation-triangle"></i> Error:
                    Invalid input. Please try again.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-light text-center py-3">
        <p>&copy; 2026 Spam & Fraud Detector</p>
      </footer>
    </>
  );
}

export default Home;