import React from 'react'



const CheckBoxLevelLang = () => {
    const [levelsLang, setLevelsLang] = useState([
        "A1",
        "A2",
        "B1",
        "B2",
        "C1",
        "C2",
      ]);
  return (
    <div> {levelsLang.length > 0 &&
        levelsLang.map((lvLang, index) => (
          <label className="flex gap-1" key={lvLang}>
            <input
              className="mb-0"
              type="checkbox"
              value={lvLang}
              checked={lvLang.includes(lang.levelLang)}
              onChange={(ev) =>
                handleLevelLangChange(index, lang.levelLang, ev)
              }
            />
            {lvLang}
          </label>
        ))}</div>
  )
}

export default CheckBoxLevelLang