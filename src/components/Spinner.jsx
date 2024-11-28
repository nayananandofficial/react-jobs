import SyncLoader from "react-spinners/SyncLoader";

const override = {
  display: "block",
  margin: "0 auto",
};

const Spinner = ({ loading }) => {
  return (
    <SyncLoader
      className="text-center"
      color="#000"
      loading={loading}
      cssOverride={override}
      size={10}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Spinner;
