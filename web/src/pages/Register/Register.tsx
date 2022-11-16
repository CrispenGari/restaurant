import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../components";
import { useRegisterMutation } from "../../graphql/generated/graphql";
import { useDispatch, useSelector } from "react-redux";
import "./Register.css";
import { setUser } from "../../actions";
import { StateType } from "../../types";
interface Props {}
const Register: React.FC<Props> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [role, setRole] = useState("CUSTOMER");
  const [conf, setConf] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [l, setLoading] = useState(true);
  const user = useSelector(({ user }: StateType) => user);

  const [register, { data, loading }] = useRegisterMutation({
    fetchPolicy: "network-only",
  });
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (conf !== password) {
      setError("The two passwords must match.");
      setPassword("");
      setConf("");
      return;
    }

    await register({
      variables: {
        input: {
          email,
          password,
          role: role as any,
        },
      },
    });
  };

  useEffect(() => {
    if (data?.register?.error) {
      setError(data.register.error.message);
    } else {
      setError("");
      setEmail("");
      setPassword("");
      setConf("");
    }
    if (data?.register?.user) {
      dispatch(setUser(data.register.user));
      navigate("/", { replace: true });
    }
  }, [data, navigate, dispatch]);

  React.useEffect(() => {
    let mounted: boolean = true;
    if (mounted) {
      if (user) {
        navigate("/", { replace: true });
        setLoading(false);
      } else {
        setLoading(false);
      }
    }
    return () => {
      mounted = false;
    };
  }, [user, navigate]);

  if (l) {
    return <Loading />;
  }

  return (
    <div className="register">
      {loading && <Loading />}
      <form className="register__card" onSubmit={onSubmit}>
        <img alt="logo" src="/logo.png" />
        <h1>
          <span>REGISTER</span> <span></span>
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

        <input
          placeholder="confirm password"
          type={"password"}
          value={conf}
          onChange={(e) => setConf(e.target.value)}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="ADMIN">ADMIN</option>
          <option value="CUSTOMER">CUSTOMER</option>
        </select>
        <p>{error}</p>
        <button type="submit">REGISTER</button>
        <h1>
          <span>Already have an Account?</span> <span></span>
        </h1>
        <button
          type="button"
          onClick={() => {
            navigate("/login", { replace: false });
          }}
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Register;
