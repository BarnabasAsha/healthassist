import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ResultsLoader } from "../../components"

const AnalysingResults = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/questions/results')
    }, 1000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <ResultsLoader />
    </div>
  )
}

export default AnalysingResults