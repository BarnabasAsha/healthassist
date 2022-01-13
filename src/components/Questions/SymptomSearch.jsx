import "./styles.css"
import { ReactComponent as SearchIcon } from '../../assets/icons/search-icon.svg';
import { ReactComponent as CancelIcon } from '../../assets/icons/cancel.svg';
import { useState } from "react";


const symptoms = [
  "pain in chest",
  "pain in back",
  "pain in lower back",
  "pain in throat",
  "pain when bending head forward",
  "pain in eyes",
  "headache",
  "cough",
  "high fever"
]

const SelectedSymptoms = ({ list, onCancel }) => {
  return (
    <ul className="selected_symptoms">
      {
        list.length ? (
          list.map((item, index) => (
            <li key={index} className="selected_symptom">
              <span>{item}</span>
              <button onClick={() => onCancel(item)}>
                <CancelIcon />
              </button>
            </li>
          ))
        ) : null
      }
    </ul>
  )
}

const SymptomsBoard = ({ list, onSelect }) => {
  return (
    <ul className="symptoms_board">
    {
      list.length ? (
        list.map((item, index) => <li className="symptoms_board_text" onClick={() => onSelect(item)} key={index}>{item}</li>)
      ) : null
    }
  </ul>
  )
}

const SymptomSearch = () => {

  const [searchResults, setSearchResults] = useState([])
  const [selected, setSelected] = useState([])

  const onSelect = (item) => {
    const arr = selected.filter(symptom => symptom === item)
    if (arr.length) {
      return
    }
    setSelected(list => [...list, item])
  }

  const onCancel = (item) => {
    const filtered = selected.filter(symptom => symptom !== item)
    setSelected([...filtered])
  }

  const runQuery = ({ target }) => {
    const query = target.value
    if(query !== "") {
      const results = symptoms.filter(symptom => symptom.includes(query))
      setSearchResults(results)
    } else {
      setSearchResults([])
    }
  }

  return (
    <div className="symptoms">
      <div className="symptoms_search">
        <input type="text" name="search" id="search" onChange={runQuery} placeholder="Type disease here" />
        <div className="symptoms_search_icon">
          <SearchIcon />
        </div>
      </div>
      {
        searchResults.length ? (
            <SymptomsBoard list={searchResults} onSelect={onSelect} />
        ) : null
      }
      {
        selected.length ? <SelectedSymptoms list={selected} onCancel={onCancel} /> : null
      }
    </div>
  )
}

export default SymptomSearch