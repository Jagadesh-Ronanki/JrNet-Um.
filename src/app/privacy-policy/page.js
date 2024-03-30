import { Mdx } from "@/components/mdx-components"
import { allStatics } from "contentlayer/generated"

export const metadata = {
  title: "Privacy Policy | JrNet ⑅ Um."
}

const page = () => {
  const privacyPolicy = allStatics[0]

  return (
    <div className="p-12">
      <Mdx code={privacyPolicy.body.code} />
    </div>
  )
}

export default page