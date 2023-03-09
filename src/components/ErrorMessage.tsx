interface ErrorMessageProps {
  error: any;
}

// TODO: customize error message based on the type of error
const ErrorMessage = (props: ErrorMessageProps) => {
  const { error } = props;

  return error && <h2>An Error Occurred. Please try again.</h2>;
};

export default ErrorMessage;
