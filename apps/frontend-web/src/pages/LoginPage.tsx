import React, { useState, FC, SVGProps } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { landingPageClasses as c, globalClasses } from "../styles/classes";
import { useAuth } from "../contexts/AuthContext";

// --------------------
// Type-safe social icons
// --------------------
type SocialLogin = {
  Icon: FC<SVGProps<SVGSVGElement>>;
  label: string;
  style: string;
};

const socialLogins: SocialLogin[] = [
  {
    Icon: FaGoogle as FC<SVGProps<SVGSVGElement>>,
    label: "Login with Google",
    style: "bg-[#4285F4] text-white hover:bg-[#357ae8]",
  },
  {
    Icon: FaFacebook as FC<SVGProps<SVGSVGElement>>,
    label: "Login with Facebook",
    style: "bg-[#1877F2] text-white hover:bg-[#155db2]",
  },
];

// --------------------
// Form validators
// --------------------
const validators: Record<string, (val: string) => string> = {
  email: (val) => (/\S+@\S+\.\S+/.test(val) ? "" : "Invalid email"),
  password: (val) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/.test(val)
      ? ""
      : "Password must have uppercase, lowercase, number & symbol",
  name: (val) => (val.length > 0 ? "" : "Name is required"),
};

// --------------------
// Floating Input Component
// --------------------
const FloatingInput: FC<{
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}> = ({ label, type = "text", name, value, onChange, error }) => {
  const [focused, setFocused] = useState(false);
  const isFloating = focused || !!value;

  return (
    <div className="relative w-full">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder=" "
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`peer w-full p-4 pt-6 rounded-xl bg-ivory text-dark placeholder-dark border ${
          error ? "border-red-400" : "border-gray-300"
        } focus:outline-none focus:ring-2 focus:ring-gold transition`}
      />
      <label
        className={`absolute left-4 transition-all duration-200 cursor-text ${
          isFloating ? "top-1 text-dark text-sm" : "top-4 text-dark text-base"
        }`}
      >
        {label}
      </label>
      {error && (
        <p
          id={`${name}-error`}
          className="text-red-500 font-medium text-sm mt-1"
        >
          {error}
        </p>
      )}
    </div>
  );
};

// --------------------
// Login Page
// --------------------
const LoginPage: FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [tab, setTab] = useState<"login" | "register" | "forgot">("login");
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    forgotType: "password",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    const val = type === "checkbox" ? checked.toString() : value;
    setForm((prev) => ({ ...prev, [name]: val }));

    if (!val) setErrors((prev) => ({ ...prev, [name]: "" }));
    else if (validators[name])
      setErrors((prev) => ({ ...prev, [name]: validators[name](val) }));
  };

  const handleLogin = () => {
    login();
    navigate("/dashboard");
  };

  const handleRegister = () => {
    login();
    navigate("/dashboard");
  };

  return (
    <div className={c.container}>
      <section className="min-h-[calc(100vh-96px)] flex items-center justify-center px-4 bg-bg-light">
        <div className="bg-ivory rounded-3xl border border-[rgba(0,0,0,0.1)] p-8 w-full max-w-md shadow-2xl flex flex-col gap-6 transition-all duration-500">
          <h2 className="text-4xl font-extrabold text-dark text-center">
            Start Your Journey
          </h2>

          {/* Tabs */}
          <div className="flex justify-around gap-3" role="tablist">
            {["login", "register", "forgot"].map((t, idx) => (
              <button
                key={t}
                onClick={() => setTab(t as "login" | "register" | "forgot")}
                role="tab"
                aria-selected={tab === t}
                aria-controls={`tabpanel-${t}`}
                tabIndex={tab === t ? 0 : -1}
                onKeyDown={(e) => {
                  if (e.key === "ArrowRight") {
                    const nextIdx = (idx + 1) % 3;
                    setTab(
                      ["login", "register", "forgot"][nextIdx] as
                        | "login"
                        | "register"
                        | "forgot"
                    );
                  } else if (e.key === "ArrowLeft") {
                    const prevIdx = (idx + 2) % 3;
                    setTab(
                      ["login", "register", "forgot"][prevIdx] as
                        | "login"
                        | "register"
                        | "forgot"
                    );
                  }
                }}
                className="py-2 px-4 rounded-xl font-bold flex-1 perspective-1000 focus:outline-none focus:ring-2 focus:ring-green-dark"
              >
                <span
                  className={`block rounded-xl px-4 py-2 transition-transform duration-200 transform
          ${
            tab === t ? "bg-green text-ivory shadow-lg" : "bg-green/10 text-dark shadow-md"
          }
          hover:bg-green/50 hover:text-bg-dark hover:scale-105 hover:rotate-3`}
                  style={{ backfaceVisibility: "hidden" }}
                >
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </span>
              </button>
            ))}
          </div>

          {/* Form */}
          <div className="flex flex-col gap-4 mt-4">
            {tab === "login" && (
              <>
                <FloatingInput
                  label="Email"
                  name="email"
                  value={form.email}
                  type="email"
                  onChange={handleChange}
                  error={errors.email}
                />
                <FloatingInput
                  label="Password"
                  name="password"
                  value={form.password}
                  type="password"
                  onChange={handleChange}
                  error={errors.password}
                />
                <button
                  className={`${globalClasses.btnPrimary} w-full bg-green hover:bg-green-dark`}
                  onClick={handleLogin}
                >
                  Login
                </button>
              </>
            )}

            {tab === "register" && (
              <>
                <FloatingInput
                  label="Full Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <FloatingInput
                  label="Email"
                  name="email"
                  value={form.email}
                  type="email"
                  onChange={handleChange}
                  error={errors.email}
                />
                <FloatingInput
                  label="Password"
                  name="password"
                  value={form.password}
                  type="password"
                  onChange={handleChange}
                  error={errors.password}
                />
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="marketing" />
                  <label
                    htmlFor="marketing"
                    className="text-dark text-sm cursor-pointer"
                  >
                    Subscribe to marketing emails
                  </label>
                </div>
                <button
                  className={`${globalClasses.btnPrimary} w-full bg-green hover:bg-green-dark`}
                  onClick={handleRegister}
                >
                  Register
                </button>
              </>
            )}

            {tab === "forgot" && (
              <>
                <select
                  name="forgotType"
                  value={form.forgotType}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-ivory text-dark focus:outline-none focus:ring-2 focus:ring-gold appearance-none border border-gray-300"
                >
                  <option value="password">Password</option>
                  <option value="username">Username</option>
                  <option value="email">Email</option>
                </select>
                <FloatingInput
                  label="Enter your email or username"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                />
                <button
                  className={`${globalClasses.btnPrimary} w-full bg-gold hover:bg-gold/90`}
                  onClick={() => navigate("/dashboard")}
                >
                  Recover
                </button>
              </>
            )}
          </div>

          {/* Social Login */}
          <div className="flex items-center my-4 gap-2">
            <hr className="flex-1 border-dark/30" />
            <span className="px-2 text-dark">OR</span>
            <hr className="flex-1 border-dark/30" />
          </div>

          <div className="flex flex-col gap-3">
            {socialLogins.map(({ Icon, label, style }, i) => (
              <button
                key={i}
                aria-label={label}
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-dark ${style}`}
              >
                <Icon className="text-xl transition-transform duration-300 ease-in-out" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
