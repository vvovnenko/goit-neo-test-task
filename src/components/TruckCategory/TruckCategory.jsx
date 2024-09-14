const TruckCategory = ({ name, children }) => {
  return (
    <div>
      {children}
      <span>{name}</span>
    </div>
  );
};

export default TruckCategory;
