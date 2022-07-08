import { TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Title, Container } from "../../styles/GlobalStyle";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../providers/Auth";
import "./style.css";
const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().email("E-mail inválido.").required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { logon } = useAuth();
  const handleForm = (data) => {
    console.log(data);
    logon(data, navigate);
  };
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <div className="login-page">
          <span className="mini-bar"></span>
          <Title>Entrar</Title>
          <form
            className="login-form"
            onSubmit={handleSubmit(handleForm)}
            action=""
          >
            <TextField
              label="E-mail"
              type="email"
              autoComplete=""
              variant="standard"
              {...register("email")}
              helperText={errors.email?.message}
              error={!!errors.email}
            />
            <TextField
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              {...register("password")}
              helperText={errors.password?.message}
              error={!!errors.password}
            />
            <button type="submit" class="btn btn-primary">
              Entrar
            </button>
            <button type="button" class="btn btn-light">
              Entrar com o Google
            </button>

            <Link className="link-login-register" to="/register">
              Não tenho conta
            </Link>
          </form>
          <span className="footer-bar"></span>
        </div>
      </Container>
    </div>
  );
};
export default Login;
