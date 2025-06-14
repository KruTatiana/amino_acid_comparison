import { useSelector } from "react-redux";
import { RootState } from "../store";
import { CircularProgress, Typography, Box, Grid } from "@mui/material";
import { ResultItem } from "./ResultItem";

export const Result = () => {
  const { arrA, arrB, isLoading } = useSelector(
    (state: RootState) => state.form
  );

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress />
      </Box>
    );
  }

  if (!arrA && !arrB) {
    return <Typography>Введите данные</Typography>;
  }

  return (
    <Box>
      <Grid container spacing={2}>
        {Array.isArray(arrA) &&
          Array.isArray(arrB) &&
          arrA.map((elementA, index) => (
            <ResultItem elementA={elementA} index={index} arrB={arrB} />
          ))}
      </Grid>
    </Box>
  );
};
