import Dropdown from "react-dropdown";
// import "react-dropdown/style.css";
export const Select = ({ setLanguage, language }) => {
  const options = [
    { value: "en", label: "English" },
    { value: "es", label: "Español" },
  ];
  return (
    <Dropdown
      options={options}
      onChange={(e) => setLanguage(e.value)}
      value={language}
      placeholder="Select idiom"
    />
  );
};
