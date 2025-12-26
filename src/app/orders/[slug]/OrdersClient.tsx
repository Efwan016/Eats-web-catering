"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { format } from "date-fns";

import ComposeHeader from "./ComposeHeader";
import { TBookingDetails } from "@/components/packages/type";

import ReceiptIcon from "@/aseets/icons/ReceiptIcon";
import Notes from "@/aseets/icons/Notes";
import People from "@/aseets/icons/People";
import Clock from "@/aseets/icons/clock";
import PinPoint from "@/aseets/icons/PinPoint";
import PackageIcon from "@/aseets/icons/PackageIcon";
import Truck from "@/aseets/icons/Truck";
import PromoIcon from "@/aseets/icons/Promo";
import { getPackageDetailsMock, PackageDetails } from "@/mocks/package-details";
import { formatCurrency } from "@/app/packages/[packageSlug]/informations/formatCurrency";

type Props = {
    data: PackageDetails;
    tierId: string;
    quantity: string;
    slug: string;
    phone: string;
    booking_trx_id: string;
};



export default function OrdersClient({ tierId, quantity, slug, phone, booking_trx_id }: Props) {
    const [booking, setBooking] = useState<TBookingDetails | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            const raw = localStorage.getItem("checkout");
            if (!raw) return;

            const store = JSON.parse(raw);


            const data = store?.[slug];

            if (
                data &&
                data.phone === phone &&
                data.booking_trx_id === booking_trx_id
            ) {
                setBooking(data);
            }
        } catch (e) {
            console.error("Failed to load booking", e);
        } finally {
            setLoading(false);
        }
    }, [slug, phone, booking_trx_id]);


    if (loading) return null;

    if (!booking) {
        return (
            <div className="min-h-screen flex items-center justify-center text-slate-500">
                Booking not found
            </div>
        );
    }

    const pkg = getPackageDetailsMock(slug)
    if (!pkg) return null;

    const tiers = pkg.tiers ?? [];
    if (tiers.length === 0) return null;


    const lowestTier = tiers.reduce((min, curr) =>
        curr.price < min.price ? curr : min
    );

    const highestTier = tiers.reduce((max, curr) =>
        curr.price > max.price ? curr : max
    );

    const resolvedTierId = Number(tierId);

    const tier =
        pkg.tiers.find((t) => t.id === resolvedTierId) ?? pkg.tiers[0];

    const orderQty = Number(quantity) || tier.quantity;

    const TAX_RATE = 0.11;
    const subtotal = tier.price * orderQty;
    const taxAmount = Math.round(subtotal * TAX_RATE);
    const total = subtotal + taxAmount;

    console.log("BOOKING:", booking);
    console.log("BOOKING STATE:", booking);




    return (
        <>
            <ComposeHeader />
            <br />
            <br />

            <main className="bg-slate-50 min-h-screen pb-32">
                {/* HEADER CARD */}
                <section className="relative px-4 -mt-20 z-10">
                    <div className="max-w-3xl mx-auto bg-white rounded-3xl p-5 shadow-xl space-y-5">
                        {/* Status */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-3xl border border-slate-400 bg-slate-50/50">
                            <div
                                className={`flex items-center gap-3 px-4 py-3 rounded-full border ${booking.is_paid
                                    ? "bg-green-500 border-green-300"
                                    : "bg-amber-50 border-amber-100"
                                    }`}
                            >
                                <div
                                    className={`w-8 h-8 flex items-center justify-center rounded-full ${booking.is_paid
                                        ? "bg-green-100 text-green-600"
                                        : "bg-amber-100 text-amber-500"
                                        }`}
                                >
                                    <ReceiptIcon />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-wider font-bold text-slate-500 leading-tight">
                                        Payment Status
                                    </p>
                                    <p
                                        className={`font-bold text-sm leading-tight ${booking.is_paid ? "text-green-700" : "text-amber-700"
                                            }`}
                                    >
                                        {booking.is_paid
                                            ? "Paid · Waiting Delivery"
                                            : "Pending Payment"}
                                    </p>
                                </div>
                            </div>

                            <div className="sm:text-right">
                                <p className="text-xs text-slate-400 font-medium mb-0.5">
                                    Transaction ID
                                </p>
                                <p className="font-mono font-bold text-slate-700 text-sm tracking-tight break-all">
                                    {booking.booking_trx_id}
                                </p>
                            </div>
                        </div>

                        <br />


                        {/* Package */}
                        <div className="flex gap-4 items-center">
                            <div className="relative w-24 h-24 rounded-2xl overflow-hidden flex-none">
                                {pkg?.thumbnail && (
                                    <Image
                                        src={pkg.thumbnail}
                                        alt={pkg.name}
                                        fill
                                        className="object-cover"
                                        priority
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                )}
                            </div>

                            <div className="flex flex-col gap-1">
                                <h1 className="font-bold text-lg text-slate-900">
                                    {pkg?.name}
                                </h1>

                                <div className="flex items-center gap-2 text-sm text-slate-500">
                                    <Notes />
                                    {pkg.category?.name}
                                </div>

                                <div className="flex items-center gap-2 text-sm text-slate-500">
                                    <People />
                                    {lowestTier.quantity} - {highestTier.quantity} People
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONTENT */}
                <section className="px-4 mt-6">
                    <div className="max-w-3xl mx-auto grid gap-6">
                        {/* Schedule */}
                        <Card title="Schedule">
                            <Row
                                icon={<Clock />}
                                label="Start Date"
                                value={
                                    booking?.started_at
                                        ? format(
                                            new Date(`${booking.started_at}T00:00:00`),
                                            "dd MMM yyyy"
                                        )
                                        : "-"
                                }
                            />
                            <Row
                                icon={<Clock />}
                                label="Time"
                                value="Lunch Time"
                            />
                            <Row
                                icon={<PinPoint />}
                                label="City"
                                value={pkg?.city?.name ?? "-"}
                            />
                        </Card>


                        {/* Payment */}
                        <Card title="Payment Details">
                            <Row
                                icon={<PackageIcon />}
                                label="Package Price"
                                value={formatCurrency(tier?.price ?? 0)}
                            />
                            <Row
                                icon={<People />}
                                label="Quantity"
                                value={`${orderQty} People`}
                            />
                            <Row
                                icon={<Truck />}
                                label="Delivery"
                                value="Free"
                            />
                            <Row
                                icon={<PromoIcon />}
                                label="Tax (11%)"
                                value={formatCurrency(taxAmount)}
                            />
                            <Row
                                icon={<ReceiptIcon />}
                                label="Total Payment"
                                value={formatCurrency(total)}
                            />

                        </Card>

                        {/* Proof */}
                        {booking.proof && (
                            <Card title="Proof of Payment">
                                <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                                    <Image
                                        src={booking.proof}
                                        alt="Proof of payment"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </Card>
                        )}
                    </div>
                </section>

                {/* CTA */}
                <div className="fixed bottom-4 left-0 right-0 px-4">
                    <div className="max-w-3xl mx-auto">
                        <a
                            href="#"
                            className="block bg-amber-500 hover:bg-amber-600 transition text-white font-bold py-4 rounded-full text-center shadow-lg shadow-amber-500/30"
                        >
                            Contact Customer Service
                        </a>
                    </div>
                </div>
            </main>
        </>
    );
}

/* ---------- small UI helpers ---------- */

function Card({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm">
            <h2 className="font-bold text-slate-900 mb-4">{title}</h2>
            <div className="space-y-3">{children}</div>
        </div>
    );
}

function Row({
    icon,
    label,
    value,
}: {
    icon: React.ReactNode;
    label: string;
    value: string;
}) {
    return (
        <div className="flex items-center gap-3">
            <span className="text-amber-500">{icon}</span>
            <div className="flex flex-col">
                <span className="text-xs text-slate-500">{label}</span>
                <span className="font-semibold text-slate-900">{value}</span>
            </div>
        </div>
    );
}
