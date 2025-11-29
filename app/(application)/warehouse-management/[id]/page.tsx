import { WarehouseDetailsPageContent } from "@/src/components/warehouse-management/warehouse-details-content";

export default async function WarehouseDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <WarehouseDetailsPageContent id={id} />;
}
