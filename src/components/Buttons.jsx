const PrimaryButton = (props) => {
  const { children, type, className, onClick, disabled } = props;

  const classes =
    className +
    " bg-primary text-lightGrey text-sm transition-all duration-500 hover:bg-darkPrimary hover:ease-in-out  active:scale-[0.97]";

  const classesForDisabled =
    className +
    " bg-primary text-lightGrey text-sm transition-all duration-500 hover:cursor-not-allowed hover:bg-[#5eead4] hover:text-darkGrey";

  return (
    <button
      type={type}
      className={!disabled ? classes : classesForDisabled}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

const SecondaryButton = (props) => {
  const { children, type, className, onClick } = props;

  const classes =
    className +
    " bg-lightGrey text-darkGrey text-sm outline outline-[0.5px] transition-all duration-500 hover:ease-in-out hover:bg-primary hover:outline-none hover:text-lightGrey active:scale-[0.97]";

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export { PrimaryButton, SecondaryButton };
