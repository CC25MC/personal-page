
export const Notify = ({ action, msj }) => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "300px",
        borderRadius: "20px",
        backgroundColor: "white",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
      }}
    >
      <p
        style={{
          textAlign: "center",
          color: "black",
          padding: "5px",
          margin: "0px",
          fontWeight: "bold",
        }}
      >
        Notify
      </p>
      <p
        style={{
          textAlign: "center",
          color: "black",
          padding: "0px",
          paddingBottom: "5px",
          margin: "0px",
        }}
      >
        {msj}
      </p>
      <hr />
      <div onClick={action} style={{ cursor: "pointer" }}>
        <p
          style={{
            textAlign: "center",
            color: "black",
            padding: "0px",
            paddingBottom: "10px",
            margin: "0px",
            fontWeight: "bold",
          }}
        >
          Close
        </p>
      </div>
    </div>
  );
};
