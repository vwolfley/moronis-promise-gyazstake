import CheckListHero from "../../sections/ChecklistHero"
import MedicalDocuments from "../../sections/MedicalDocuments"
import PhotoRelease from "../../sections/PhotoRelease"
import CodeConductDocuments from "../../sections/CodeConductDocuments"
import PackingListDocs from "../../sections/PackingListDocs"

function Checklist() {
  return (
    <div tag="main-body" className="flex grow flex-col">
      <CheckListHero />
      <CodeConductDocuments />
      <MedicalDocuments />
      <PhotoRelease />
      <PackingListDocs />
    </div>
  )
}

export default Checklist
