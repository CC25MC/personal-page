export const Counter = ({
  data = [
    {
      title: "Projects Completed",
      number: "777",
    },
    {
      title: "Happy Clients",
      number: "500+",
    },
    {
      title: "Lines of Code",
      number: "700K+",
    },
  ],
}) => {
  return (
    <ul>
      {data.map((item, key) => (
        <li key={key}>
          <div className="list_inner">
            <h3>
              <span>{item.number}</span>
            </h3>
            <span className="name">{item.title}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};
