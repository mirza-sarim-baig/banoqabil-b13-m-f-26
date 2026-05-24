import { useState } from "react";
import { Link } from "react-router";

const EyeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: 16, height: 16 }}
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" style={{ width: 18, height: 18 }}>
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

const GithubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ width: 18, height: 18 }}
  >
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

function LoginPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8f7f4",
        display: "flex",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Left panel */}
      <div
        style={{
          flex: "0 0 420px",
          background: "#0f1117",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "48px 44px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 20% 80%, rgba(59,130,246,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(99,102,241,0.1) 0%, transparent 50%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            pointerEvents: "none",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            position: "relative",
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 9,
              background: "#3b82f6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="white"
              style={{ width: 16, height: 16 }}
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <span
            style={{
              color: "white",
              fontWeight: 600,
              fontSize: 15,
              letterSpacing: "-0.02em",
            }}
          >
            Nucleus
          </span>
        </div>

        {/* Quote */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              width: 40,
              height: 3,
              background: "#3b82f6",
              borderRadius: 2,
              marginBottom: 24,
            }}
          />
          <p
            style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: 22,
              fontWeight: 500,
              lineHeight: 1.5,
              letterSpacing: "-0.02em",
              margin: "0 0 20px",
            }}
          >
            "The simplest path to managing your team, data, and insights."
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: "50%",
                background: "linear-gradient(135deg,#3b82f6,#6366f1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              AR
            </div>
            <div>
              <p
                style={{
                  color: "rgba(255,255,255,0.9)",
                  fontSize: 13,
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                Alex Rivera
              </p>
              <p
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: 12,
                  margin: 0,
                }}
              >
                Product Lead, Acme Co.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px 32px",
        }}
      >
        <div style={{ width: "100%", maxWidth: 380 }}>
          <div style={{ marginBottom: 36 }}>
            <h1
              style={{
                fontSize: 26,
                fontWeight: 600,
                color: "#0f1117",
                letterSpacing: "-0.03em",
                margin: "0 0 8px",
              }}
            >
              Welcome back
            </h1>
            <p style={{ fontSize: 14, color: "#6b7280", margin: 0 }}>
              Sign in to your Nucleus account
            </p>
          </div>

          {/* Social buttons */}
          <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
            {[
              { icon: <GoogleIcon />, label: "Google" },
              { icon: <GithubIcon />, label: "GitHub" },
            ].map((s) => (
              <button
                key={s.label}
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "10px 0",
                  background: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: 10,
                  cursor: "pointer",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#374151",
                  transition: "border-color .15s, box-shadow .15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#3b82f6";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(59,130,246,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e5e7eb";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {s.icon} {s.label}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 24,
            }}
          >
            <div style={{ flex: 1, height: 1, background: "#e5e7eb" }} />
            <span style={{ fontSize: 12, color: "#9ca3af" }}>
              or continue with email
            </span>
            <div style={{ flex: 1, height: 1, background: "#e5e7eb" }} />
          </div>

          {/* Form */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#374151",
                  marginBottom: 6,
                }}
              >
                Email address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  fontSize: 13,
                  border: "1px solid #e5e7eb",
                  borderRadius: 10,
                  outline: "none",
                  background: "white",
                  color: "#111",
                  boxSizing: "border-box",
                  transition: "border-color .15s",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#3b82f6";
                  e.target.style.boxShadow = "0 0 0 3px rgba(59,130,246,0.08)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e5e7eb";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 6,
                }}
              >
                <label
                  style={{ fontSize: 12, fontWeight: 500, color: "#374151" }}
                >
                  Password
                </label>
                <a
                  href="#"
                  style={{
                    fontSize: 12,
                    color: "#3b82f6",
                    textDecoration: "none",
                  }}
                >
                  Forgot password?
                </a>
              </div>
              <div style={{ position: "relative" }}>
                <input
                  type="password"
                  placeholder="••••••••"
                  style={{
                    width: "100%",
                    padding: "10px 40px 10px 14px",
                    fontSize: 13,
                    border: "1px solid #e5e7eb",
                    borderRadius: 10,
                    outline: "none",
                    background: "white",
                    color: "#111",
                    boxSizing: "border-box",
                    transition: "border-color .15s",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#3b82f6";
                    e.target.style.boxShadow =
                      "0 0 0 3px rgba(59,130,246,0.08)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e5e7eb";
                    e.target.style.boxShadow = "none";
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    right: 12,
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#9ca3af",
                    cursor: "pointer",
                  }}
                >
                  <EyeIcon />
                </span>
              </div>
            </div>
          </div>

          <button
            style={{
              width: "100%",
              marginTop: 20,
              padding: "11px 0",
              background: "#0f1117",
              color: "white",
              border: "none",
              borderRadius: 10,
              fontSize: 14,
              fontWeight: 500,
              cursor: "pointer",
              letterSpacing: "-0.01em",
              transition: "opacity .15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Sign in
          </button>

          <p
            style={{
              textAlign: "center",
              marginTop: 20,
              fontSize: 13,
              color: "#6b7280",
            }}
          >
            Don't have an account?{" "}
            <Link
              style={{
                background: "none",
                border: "none",
                color: "#3b82f6",
                fontWeight: 500,
                cursor: "pointer",
                fontSize: 13,
                padding: 0,
              }}
              to="signup"
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
