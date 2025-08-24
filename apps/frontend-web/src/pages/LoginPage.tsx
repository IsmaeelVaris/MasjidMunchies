import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { landingPageClasses as c, globalClasses } from "../styles/classes";

// TS-safe icon wrappers
const GoogleIcon: React.FC<{ className?: string }> = (props) => <FaGoogle {...props} />;
const FacebookIcon: React.FC<{ className?: string }> = (props) => <FaFacebook {...props} />;

type SocialLogin = {
  Icon: React.FC<{ className?: string }>;
  label: string;
  style: string;
};

const socialLogins: SocialLogin[] = [
  { Icon: GoogleIcon, label: "Login with Google", style: "bg-[#4285F4] text-white hover:bg-[#357ae8]" },
  { Icon: FacebookIcon, label: "Login with Facebook", style: "bg-[#1877F2] text-white hover:bg-[#155db2]" },
];

const validators: Record<string, (val: string) => string> = {
  email: (val) => (/\S+@\S+\.\S+/.test(val) ? "" : "Invalid email"),
  password: (val) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/.test(val)
      ? ""
      : "Password must have uppercase, lowercase, number & symbol",
  name: (val) => (val.length > 0 ? "" : "Name is required"),
};

// Floating Input Component
const FloatingInput: React.FC<{
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
        className="peer w-full p-4 pt-6 rounded-xl bg-bg-dark text-text-white focus:outline-none focus:ring-2 focus:ring-gold"
      />
      <label
        className={`absolute left-4 transition-all duration-200 cursor-text
          ${isFloating ? "top-1 text-text-white text-sm" : "top-4 text-text-secondary text-base"}`}
      >
        {label}
      </label>
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  );
};

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState<"login" | "register" | "forgot">("login");
  const [form, setForm] = useState({ email: "", password: "", name: "", forgotType: "password" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    const val = type === "checkbox" ? checked.toString() : value;
    setForm((prev) => ({ ...prev, [name]: val }));

    if (!val) setErrors((prev) => ({ ...prev, [name]: "" }));
    else if (validators[name]) setErrors((prev) => ({ ...prev, [name]: validators[name](val) }));
  };

  const handleLogin = () => {
    // TODO: Add actual login logic
    navigate("/dashboard");
  };

  const handleRegister = () => {
    // TODO: Add actual registration logic
    navigate("/dashboard");
  };

  return (
    <div className={c.container}>
      <section className="min-h-[calc(100vh-96px)] flex items-center justify-center px-4 bg-bg-light">
        <div className="bg-[rgba(11,12,16,0.85)] backdrop-blur-lg rounded-3xl border border-[rgba(255,255,255,0.1)] p-8 w-full max-w-md shadow-2xl flex flex-col gap-6 transition-all duration-500">
          <h2 className="text-4xl font-extrabold text-text-white text-center">Start Your Journey</h2>

          {/* Tabs */}
          <div className="flex justify-around gap-3">
            {["login", "register", "forgot"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t as "login" | "register" | "forgot")}
                className={`py-2 px-4 rounded-xl font-bold transition-all duration-300 flex-1 ${
                  tab === t
                    ? "bg-gold text-black scale-105 shadow-lg"
                    : "bg-white/20 text-text-white hover:bg-white/30"
                }`}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>

          {/* Form */}
          <div className="flex flex-col gap-4">
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
                  className={`${globalClasses.btnPrimary} w-full bg-green-dark hover:bg-green-dark/90`}
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
                  <label htmlFor="marketing" className="text-text-secondary text-sm cursor-pointer">
                    Subscribe to marketing emails
                  </label>
                </div>
                <button
                  className={`${globalClasses.btnPrimary} w-full bg-green-dark hover:bg-green-dark/90`}
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
                  className="w-full p-4 rounded-xl bg-bg-dark text-text-white focus:outline-none focus:ring-2 focus:ring-gold appearance-none"
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
            <hr className="flex-1 border-white/20" />
            <span className="px-2 text-text-secondary">OR</span>
            <hr className="flex-1 border-white/20" />
          </div>

          <div className="flex flex-col gap-3">
            {socialLogins.map(({ Icon, label, style }, i) => (
              <button
                key={i}
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 ${style}`}
              >
                <Icon className="text-xl" /> {label}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
