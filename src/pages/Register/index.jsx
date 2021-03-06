import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { Title, Container } from "../../styles/GlobalStyle";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import "./style.css";
const Register = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório."),
    email: yup.string().email("E-mail inválido.").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Senha precisa ter ao menos 8 dígitos.")
      .required("Campo obrigatório"),
    passwordConfirm: yup
      .string()
      .required("Campo obrigatório.")
      .oneOf([yup.ref("password"), null], "Senhas não correspodem."),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const handleForm = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Container>
        <div className="login-page">
          <span className="mini-bar"></span>
          <Title>Cadastrar</Title>
          <form
            className="login-form"
            action=""
            onSubmit={handleSubmit(handleForm)}
          >
            <TextField
              label="Nome"
              type="text"
              autoComplete=""
              variant="standard"
              {...register("name")}
              error={!!errors.name}
              fullWidth
              helperText={errors.name?.message}
            />
            <TextField
              label="E-mail"
              type="text"
              autoComplete=""
              variant="standard"
              {...register("email")}
              error={!!errors.email}
              fullWidth
              helperText={errors.email?.message}
            />
            <TextField
              label="Senha"
              type="password"
              autoComplete="current-password"
              variant="standard"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
              fullWidth
            />
            <TextField
              fullWidth
              label="Repetir Senha"
              type="password"
              autoComplete="current-password"
              variant="standard"
              {...register("passwordConfirm")}
              error={!!errors.passwordConfirm}
              helperText={errors.passwordConfirm?.message}
            />
            <button type="submit" class="btn btn-primary">
              Cadastrar
            </button>
            <button type="button" class="btn btn-light">
              Cadastrar com o Google
            </button>

            <Link className="link-login-register" to="/login">
              Já tenho conta
            </Link>
          </form>
          <span className="footer-bar"></span>
        </div>
      </Container>
    </div>
  );
};
export default Register;
