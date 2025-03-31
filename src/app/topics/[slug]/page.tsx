interface TopicShowPageProps {
  readonly slug: string;
}

export default function TopicShowPage(props: TopicShowPageProps) {
  const { slug } = props;
  return <div>Topic Show: {slug}</div>;
}
