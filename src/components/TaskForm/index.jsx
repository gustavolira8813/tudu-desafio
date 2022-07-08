import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputAdornment, MenuItem, TextField } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/Auth";
import { TaskFormContainer } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faArrowAltCircleUp,
  faPaperPlane,
  faCalendarAlt,
  faObjectGroup,
} from "@fortawesome/free-regular-svg-icons";
const difficulty = [
  { id: 1, valor: "easy" },
  { id: 2, valor: "medium" },
  { id: 3, valor: "hard" },
];

const TaskForm = () => {
  const schema = yup.object().shape({
    title: yup.string(),
    description: yup.string(),
    deadline: yup.string(),
    difficulty: yup.string(),
    members: yup.string(),
    anexo: yup.string(),
  });
  const { logon } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    console.log(data);
    logon(data);
  };
  return (
    <TaskFormContainer>
      <h1>Criar tarefa</h1>
      <form onSubmit={handleSubmit(handleForm)}>
        <TextField
          fullWidth
          label="Digite o título"
          InputProps={{ disableUnderline: true }}
          variant="filled"
          type="text"
          id="title"
          {...register("title")}
          error={!!errors.title}
          helperText={errors.title?.message}
        />

        <TextField
          fullWidth
          label="Adicione uma descrição(opcional)"
          InputProps={{ disableUnderline: true }}
          variant="filled"
          type="text"
          id="description"
          {...register("description")}
          error={!!errors.description}
          helperText={errors.description?.message}
        />
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FontAwesomeIcon icon={faCalendarAlt} />
              </InputAdornment>
            ),
            disableUnderline: true,
          }}
          fullWidth
          label="Inserir prazo"
          // InputProps={{ disableUnderline: true }}
          variant="standard"
          type="date"
          id="title"
          {...register("deadline")}
          error={!!errors.deadline}
          helperText={errors.deadline?.message}
        />
        <TextField
          fullWidth
          label="Dificuldade"
          variant="filled"
          type="text"
          id="difficulty"
          InputProps={{ disableUnderline: true }}
          select
          {...register("difficulty")}
          error={!!errors.difficulty}
          helperText={errors.difficulty?.message}
        >
          {difficulty.map((element) => (
            <MenuItem key={element.id} value={element.valor}>
              {element.valor}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          label="Adicionar membros"
          InputProps={{ disableUnderline: true }}
          variant="filled"
          type="text"
          id="members"
          {...register("members")}
          error={!!errors.members}
          helperText={errors.members?.message}
        />
        <TextField
          fullWidth
          label="Adicionar anexo"
          InputProps={{ disableUnderline: true }}
          variant="standard"
          type="file"
          id="anexo"
          {...register("anexo")}
          error={!!errors.anexo}
          helperText={errors.anexo?.message}
        />
        <span className="bar-division"></span>

        <p>adicionar sub-tarefas</p>

        <button type="submit">Criar tarefa</button>
      </form>
    </TaskFormContainer>
  );
};
export default TaskForm;
