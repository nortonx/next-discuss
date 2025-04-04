import {redirect} from "next/navigation";
import PostList from "@/components/posts/post-list";
import {fetchPostsBySearchTerm, PostWithData} from "@/db/queries/posts";

interface SearchPageProps {
  readonly searchParams: {
    readonly term: string;
  }
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { term } = await searchParams;

  if (!term) {
    redirect("/");
  }

  return (
    <div>
      <PostList fetchData={(): Promise<PostWithData[]> => fetchPostsBySearchTerm(term)} />
    </div>
  )
}