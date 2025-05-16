import { PageLayout } from "@/components/layout";


export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <PageLayout>
      <div className="prose prose-h2:pt-8 prose-h2:m-0 prose-h2:pb-4 prose-headings:font-semibold  dark:prose-headings:text-white">
        {children}
      </div>
    </PageLayout>
  )
}

// prose-headings:text-black prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg