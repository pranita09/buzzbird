const PrimaryButton = (props) => {
  const { children, type } = props;
  const classes =
    "bg-[#0d9488] text-[#f2f2f2] rounded-md py-2 text-sm transition-all duration-500 hover:bg-[#115e59] hover:ease-in-out  active:scale-[0.95]";
  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};

const SecondaryButton = (props) => {
  const { children, type } = props;
  const classes =
    "bg-[#f2f2f2] text-[#333333] rounded-md py-2 text-sm outline outline-[0.5px] transition-all duration-500 hover:ease-in-out hover:bg-[#0d9488] hover:outline-none hover:text-[#f2f2f2] active:scale-[0.95]";
  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};

export { PrimaryButton, SecondaryButton };
