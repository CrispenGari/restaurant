import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../actions";
import { Loading } from "../../components";
import { useLoginMutation } from "../../graphql/generated/graphql";
import "./Login.css";
interface Props {}
const Login: React.FC<Props> = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { data, loading }] = useLoginMutation({
    fetchPolicy: "network-only",
  });
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login({
      variables: {
        input: {
          email,
          password,
        },
      },
    });
  };

  useEffect(() => {
    if (data?.login?.error) {
      setError(data.login.error.message);
    } else {
      setError("");
      setEmail("");
      setPassword("");
    }
    if (data?.login?.user) {
      dispatch(setUser(data.login.user));
      navigate("/", { replace: true });
    }
  }, [data, navigate, dispatch]);

  return (
    <div className="login">
      {loading && <Loading />}
      <form className="login__card" onSubmit={onSubmit}>
        <img alt="logo" src="/logo.png" />
        <h1>
          <span>LOGIN</span> <span></span>
        </h1>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email address"
          type={"email"}
        />
        <input
          placeholder="password"
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <p>{error}</p>
        <button type="submit">LOGIN</button>
        <h1>
          <span>{"I'm a new user?"}</span> <span></span>
        </h1>
        <button
          type="button"
          onClick={() => {
            navigate("/register", { replace: false });
          }}
        >
          REGISTER
        </button>
      </form>
    </div>
  );
};

export default Login;
