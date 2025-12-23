import SuccessClient from "./SuccessClient";

type Props = {
  params: { packageSlug: string };
  searchParams: {
    "trx-id"?: string;
    phone?: string;
  };
};

async function BookingSuccessPage({ params, searchParams }: Props) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  return (
    <SuccessClient
      packageSlug={resolvedParams.packageSlug}
      trxId={resolvedSearchParams["trx-id"]}
      phone={resolvedSearchParams.phone}
    />
  );
}

export default BookingSuccessPage;
