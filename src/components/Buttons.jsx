const PrimaryButton = (props) => {
  const { children, type, onClick, disabled } = props;

  const classes = `bg-primary text-lightGrey rounded-md py-2 text-sm transition-all duration-500 hover:bg-darkPrimary hover:ease-in-out  active:scale-[0.97]`;

  const classesForDisabled =
    "bg-primary text-lightGrey rounded-md py-2 text-sm transition-all duration-500 hover:cursor-not-allowed hover:bg-[#5eead4] hover:text-darkGrey";

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
  const { children, type, onClick } = props;

  const classes =
    "bg-lightGrey text-darkGrey rounded-md py-2 text-sm outline outline-[0.5px] transition-all duration-500 hover:ease-in-out hover:bg-primary hover:outline-none hover:text-lightGrey active:scale-[0.97]";

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export { PrimaryButton, SecondaryButton };
