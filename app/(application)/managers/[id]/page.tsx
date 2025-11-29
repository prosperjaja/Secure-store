import { ManagerDetailsPageContent } from "@/src/components/managers/manager-details-content";

export default async function ManagerDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <ManagerDetailsPageContent id={id} />;
}
