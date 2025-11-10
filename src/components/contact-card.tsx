import { Mail, PhoneCall, MessageCircle } from "lucide-react";
import Link from "next/link";
import type { FC } from "react";

type ContactCardProps = {
  name: string;
  email: string;
  phone?: string;
  description: string;
};

export const ContactCard: FC<ContactCardProps> = ({ name, email, phone, description }) => {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="text-lg font-semibold text-slate-900">{name}</div>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
      <div className="mt-4 flex flex-col gap-3 text-sm text-slate-700">
        <Link
          href={`mailto:${email}`}
          className="inline-flex items-center gap-2 font-medium text-brand-600 hover:text-brand-500"
        >
          <Mail className="h-4 w-4" aria-hidden />
          {email}
        </Link>
        {phone ? (
          <>
            <div className="text-base font-semibold text-slate-900">{phone}</div>
            <div className="flex flex-wrap gap-2">
              <Link
                href={`https://wa.me/${phone.replace(/[^\d]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-[#1ebe5d]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                WhatsApp
              </Link>
              <Link
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full bg-[#EA4335] px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-[#d13b2f]"
              >
                <PhoneCall className="h-4 w-4" aria-hidden />
                Ara
              </Link>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};
