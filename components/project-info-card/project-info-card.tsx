import { ArrowUpRight } from "lucide-react";

interface Project {
  order: number;
  title: string;
  description: string;
  url: string;
  image: string;
}
const PROJECTS: Project[] = [
  {
    order: 0,
    title: "Talab App",
    description: "Liquor Trivia App",
    url: "https://play.google.com/store/apps/details?id=com.talabapp&hl=de&gl=US",
    image: "bg-[url('https://i.imgur.com/UMRvf7c.png')]",
  },
  {
    order: 1,
    title: "Bluprint",
    description:
      "Streamlining workforce management and empowering the business to efficiently manage employee data, contracts, and compliance in one centralized platform ",
    url: "https://ps.leadsquaredapps.com",
    image: "bg-[url('https://i.imgur.com/5Ah6Kw6.png')]",
  },
];

export default function ProjectInfoCard() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {PROJECTS.sort(sortByOrder).map(
        ({ order, title, description, url, image }) => (
          <div
            key={order}
            className={`border rounded-2xl m-4 sm:m-y-2 h-80 md:h-96 ${image} bg-no-repeat bg-cover bg-center cursor-pointer bg-origin-padding`}
          >
            <div className="p-4 rounded-2xl rounded-b-none flex justify-between items-center">
              <span className="whitespace-nowrap overflow-hidden text-ellipsis max-w-sm">
                <h1 className="text-2xl font-semibold">{title}</h1>
                <h4 className="font-light text-sm text-slate-500">
                  {description}
                </h4>
              </span>

              <ArrowUpRight size={40} />
            </div>
          </div>
        )
      )}
    </section>
  );
}

const sortByOrder = (a: Project, b: Project) => a.order - b.order;
