import { useParams } from "react-router"

export const EditPage = () => {
  const {pageId} = useParams()

  return (
    <div>
      <h1>
        Create Page
      </h1>
      <span>{`Page ID: ${pageId}`}</span>
    </div>
  )
}