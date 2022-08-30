import { Route, Routes } from "react-router"
import { CreatePage } from "./CreatePage/CreatePage"
import { EditPage } from "./EditPage/EditPage"
import { PageList } from "./PageList/PageList"

export function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<PageList/>} />
      <Route path="/createpage" element={<CreatePage/>} />
      <Route path="/editpage/:pageId" element={<EditPage/>} />
    </Routes>
  )
}