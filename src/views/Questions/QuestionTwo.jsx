import { QuestionsLayout, SymptomSearch } from "../../components"

const QuestionsTwo = () => {
  return (
    <QuestionsLayout title="What kind of symptoms you
    notice in patient?" desc="Search as many symptoms as you can for the better result" last={true}>
        <SymptomSearch />
    </QuestionsLayout>
  )
}

export default QuestionsTwo