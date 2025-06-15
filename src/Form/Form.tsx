import { useForm } from "react-hook-form";
import { Button, Container, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  resetForm,
  setAcidA,
  setAcidB,
  setLoading,
  setError,
} from "../store/formSlise";
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
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onBlur",
    defaultValues: { acidA, acidB },
  });

  const onSubmit = async (data: FormData) => {
    dispatch(setLoading(true));
    dispatch(setAcidA(data.acidA));
    dispatch(setAcidB(data.acidB));

    setValue("acidA", data.acidA);
    setValue("acidB", data.acidB);

    dispatch(setLoading(false));
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography
        padding={{ xs: "5%", sm: 0 }}
        gutterBottom
        sx={{
          fontSize: {
            xs: "1.5rem",
            sm: "1.75rem",
            md: "2.125rem",
          },
          fontWeight: 600,
        }}
      >
        Визуализация выравнивания аминокислотных последовательностей
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          label="acidA"
          margin="normal"
          {...register("acidA", {
            required: "Поле обязательно для заполнения",
            pattern: {
              value: /^[ARNDCEQGHILKMFPSTWYV-]+$/,
              message: "Не корректный ввод данных",
            },
            onChange: (e) => {
              const upperLiterA = e.target.value.toUpperCase();
              setValue("acidA", upperLiterA);
            },
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
            pattern: {
              value: /^[ARNDCEQGHILKMFPSTWYV-]+$/,
              message: "Не корректный ввод данных",
            },
            onChange: (e) => {
              const upperLiterB = e.target.value.toUpperCase();
              setValue("acidB", upperLiterB);
            },
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
          Сравнить
        </Button>
      </form>
    </Container>
  );
};
