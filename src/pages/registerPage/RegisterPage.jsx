import React, { useState } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";

import { Header } from "../../components/header/Header";
import { Linkin } from "../../components/linkin/Linkin";
import { Footer } from "../../components/footer/Footer";
import { Input } from "../../components/input/Input";
import { Checkbox } from "../../components/checkbox/Checkbox";

import { useAuth } from "../../context/AuthContext";

import "./registerPage.scss";

const REG_EXP_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PASSWORD_HINT = "At least 8 characters, with a number, a lowercase and an uppercase letter";
const REG_EXP_PASSWORD = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const validate = ({ email, firstName, lastName, password }) => {
  const errors = {};
  if (!REG_EXP_EMAIL.test(email.trim())) errors.email = "Enter a valid email, e.g. name@mail.com";
  if (!firstName.trim()) errors.firstName = "Enter your first name";
  if (!lastName.trim()) errors.lastName = "Enter your last name";
  if (!REG_EXP_PASSWORD.test(password)) errors.password = PASSWORD_HINT;
  return errors;
};

export const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { user, register } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect") || "/account";

  if (user) return <Navigate to={redirect} replace />;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const fields = { email, firstName, lastName, password };
    const nextErrors = validate(fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setIsLoading(true);
    const result = await register({ ...fields, newsletter, remember });
    setIsLoading(false);

    if (result.error) {
      setErrors({ email: result.error });
      return;
    }
    navigate(redirect, { replace: true });
  };

  return (
    <div className="register__page">
      <Header />

      <main className="register__main">
        <div className="main__login">
          <h2 className="login__title">Already have an account?</h2>

          <Linkin
            link={searchParams.get("redirect") ? `/login?redirect=${encodeURIComponent(redirect)}` : "/login"}
            text={"sign in"}
            classStyle={"login__link"}
          />
        </div>

        <div className="main__register">
          <h2 className="register__title">first time here?</h2>

          <form className="form__register" onSubmit={handleSubmit} noValidate>
            <Input
              label={"Email"}
              id={"register-email"}
              type={"email"}
              value={email}
              setValue={setEmail}
              error={errors.email}
              autoComplete={"email"}
            />

            <div className="form__register-block">
              <Input
                label={"First name"}
                id={"register-first-name"}
                value={firstName}
                setValue={setFirstName}
                error={errors.firstName}
                autoComplete={"given-name"}
              />
              <Input
                label={"Last name"}
                id={"register-last-name"}
                value={lastName}
                setValue={setLastName}
                error={errors.lastName}
                autoComplete={"family-name"}
              />
            </div>

            <Input
              label={"Password"}
              id={"register-password"}
              type={"password"}
              value={password}
              setValue={setPassword}
              error={errors.password}
              hint={PASSWORD_HINT}
              autoComplete={"new-password"}
            />

            <Checkbox
              label={"Yes, I want to subscribe to the newsletter (optional)"}
              id={"newsletter"}
              value={newsletter}
              setValue={setNewsletter}
            />
            <Checkbox
              label={"Keep me signed in"}
              id={"keep-signed-in"}
              value={remember}
              setValue={setRemember}
            />

            <button type="submit" className="form__register-btn" disabled={isLoading}>
              create
            </button>
          </form>

          <p className="register__text">
            By clicking “Create”, you agree to the{" "}
            <Linkin
              link={"/terms"}
              text={"Terms of sale"}
              classStyle={"register__text-textLink"}
            />{" "}
            and the{" "}
            <Linkin
              link={"/privacy"}
              text={"Privacy Policy"}
              classStyle={"register__text-textLink"}
            />
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};
