import { useSelector } from "react-redux";
import { RootState } from "../store";
import { CircularProgress, Typography, Box, Grid, Alert } from "@mui/material";
import { ResultItem } from "./ResultItem";

export const Result = () => {
  const { validateValue, arrA, arrB, isLoading, error } = useSelector(
    (state: RootState) => state.form
  );

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Box mt={4} display="flex" justifyContent="center" alignItems="center">
        {!validateValue && !error && (
          <Typography marginTop={"8%"}>Введите данные</Typography>
        )}
        {error && <Alert severity="error">{error}</Alert>}
        {validateValue && (
          <Grid container paddingX={"5%"}>
            {Array.isArray(arrA) &&
              Array.isArray(arrB) &&
              arrA.map((elementA, index) => (
                <ResultItem elementA={elementA} index={index} arrB={arrB} />
              ))}
          </Grid>
        )}
      </Box>
    </>
  );
};
