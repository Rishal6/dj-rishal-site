import { primaryFaqs } from "@/content/site";

type FaqProps = {
  title?: string;
  faqs?: typeof primaryFaqs;
};

export function Faq({ title = "AEO-ready answers", faqs = primaryFaqs }: FaqProps) {
  return (
    <section className="bg-zinc-100 text-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-black uppercase text-fuchsia-700">FAQ</p>
            <h2 className="mt-2 text-3xl font-black leading-tight sm:text-4xl">{title}</h2>
          </div>
          <div className="grid gap-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-sm border border-zinc-200 bg-white p-5 shadow-sm open:border-zinc-300"
              >
                <summary className="cursor-pointer list-none text-base font-black text-zinc-950">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-6 text-zinc-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
