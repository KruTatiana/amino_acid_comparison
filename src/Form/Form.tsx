import { useForm } from "react-hook-form";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setAcidA, setAcidB, resetForm, setLoading } from "../store/formSlise";
import { RootState } from "../store";

type FormData = {
  acidA: string;
  acidB: string;
};

export const Form = () => {
  const dispatch = useDispatch();
  const { acidA, acidB } = useSelector((state: RootState) => state.form);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onBlur",
    defaultValues: { acidA, acidB },
  });

  const onSubmit = async (data: FormData) => {
    dispatch(setLoading(true));

    dispatch(setAcidA(data.acidA));
    dispatch(setAcidB(data.acidB));
    dispatch(resetForm());
    reset();
    dispatch(setLoading(false));
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Визуализация выравнивания
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          label="acidA"
          margin="normal"
          {...register("acidA", {
            required: "Поле обязательно для заполнения",
          })}
          error={!!errors.acidA}
          helperText={errors.acidA?.message}
        />

        <TextField
          fullWidth
          label="acidB"
          margin="normal"
          {...register("acidB", {
            required: "Поле обязательно для заполнения",
          })}
          error={!!errors.acidB}
          helperText={errors.acidB?.message}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};
