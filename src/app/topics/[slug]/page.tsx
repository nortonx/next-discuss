export default function TopicShowPage({ params }: { params: { slug: string } }) {
    const { slug } = params;
    return (
      <div>Topic Show: {slug}</div>
    );
}