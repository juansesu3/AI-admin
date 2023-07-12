import React, { useState } from "react";

const CheckBoxLevelLang = ({
  onChange,
  index,
  langLevelSelected: existingLangSelected,
}) => {
  const [langLevelSelected, setLangLevelSelected] = useState(
    existingLangSelected || ""
  );
  const [levelsLang, setLevelsLang] = useState([
    "A1",
    "A2",
    "B1",
    "B2",
    "C1",
    "C2",
  ]);

  const handleCheckBoxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setLangLevelSelected((prev) => [value]);
    } else {
      setLangLevelSelected((prev) => prev.filter((item) => item !== value));
    }
    onChange(index, langLevelSelected, event);
  };
  return (
    <div className="flex flex-row gap-2 justify-end mr-4">
      {" "}
      {levelsLang.length > 0 &&
        levelsLang.map((lvLang, index) => (
          <label className="flex gap-1" key={lvLang}>
            <input
              className="mb-0"
              type="checkbox"
              value={lvLang}
              checked={langLevelSelected.includes(lvLang)}
              onChange={handleCheckBoxChange}
              
            />
            {lvLang}
          </label>
        ))}
    </div>
  );
};

export default CheckBoxLevelLang;
