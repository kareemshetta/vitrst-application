import { FC } from "react";

type Props = { message: string };

const ErrorCom: FC<Props> = ({ message }) => {
  return <h1>{message}</h1>;
};

export default ErrorCom;
