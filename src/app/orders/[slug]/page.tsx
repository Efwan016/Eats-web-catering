import { notFound } from "next/navigation";
import OrdersClient from "./OrdersClient";
import { getPackageDetailsMock } from "@/mocks/package-details";

type PageProps = {
  params: {
    slug: string;
  };
  searchParams: {
    phone?: string;
    booking_trx_id?: string;
    tierId?: string;
    quantity?: string;
  };
};

export default async function OrdersFoundPage({
  params,
  searchParams,
}: PageProps) {
  const { slug } = await params;
  const { phone, booking_trx_id, tierId = "", quantity = "0" } = await searchParams;

  if (!slug || !phone || !booking_trx_id) {
    notFound();
  }

  const pkg = getPackageDetailsMock(slug);
  if (!pkg) notFound();

  return (
    <OrdersClient
      data={pkg}
      slug={slug}
      phone={phone}
      booking_trx_id={booking_trx_id}
      tierId={tierId}
      quantity={quantity}
    />
  );
}
