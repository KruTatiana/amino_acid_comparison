import { Typography, Grid } from "@mui/material";
import { ColorsEnum } from "../constants";

type ResultItemProps = {
  index: number;
  elementA: string;
  arrB: string[];
};

export const ResultItem = ({ index, elementA, arrB }: ResultItemProps) => {
  let colorB;

  if (elementA !== arrB[index]) {
    colorB = ColorsEnum[arrB[index] as keyof typeof ColorsEnum];
  } else {
    colorB = "#FFFFFF";
  }

  return (
    <Grid marginTop={"5px"} key={`A-${index}`}>
      <Typography
        sx={{
          border: 1,
          backgroundColor: ColorsEnum[elementA as keyof typeof ColorsEnum],
          fontSize: 24,
          padding: "12px",
        }}
      >
        {elementA}
      </Typography>
      <Typography
        sx={{
          border: 1,
          backgroundColor: colorB,
          fontSize: 24,
          padding: "12px",
        }}
      >
        {arrB[index]}
      </Typography>
    </Grid>
  );
};
