const styledHeading = (Title, name = "default") => {
  const colors = [
    { name: "whiteTitle", color: "#fff" },
    { name: "dark", color: "#202020" },
  ];
  const { color } = colors.find((item) => item.name === name);

  const handleStyles = {
    color,
    textAlign: "center",
    fontSize: "20px",
    fontWeight: 500,
    textTransform: "uppercase",
    wordSpacing: "1px",
    letterSpacing: " 2px",
  };
  return (props) => {
    return <Title {...props} styling={handleStyles} />;
  };
};
export default styledHeading;
