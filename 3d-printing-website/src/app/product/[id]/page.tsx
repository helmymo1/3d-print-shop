type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  return <h1 className="text-xl font-bold">Product Page for ID: {id}</h1>;
}
