export const Heading = ({ children, className }) => {
  return (
    <h1
      className={`text-xl md:text-3xl font-semibold text-shadow-sm tracking-tight ${className}`}
    >
      {children}
    </h1>
  );
};
