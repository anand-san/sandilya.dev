import { ChevronRightCircle } from "lucide-react";
import Link from "next/link";

interface Project {
  order: number;
  title: string;
  description: string;
  url: string;
  imagePath: string;
}
const PROJECTS: Project[] = [
  {
    order: 3,
    title: "Talab App",
    description: "Liquor Trivia App",
    url: "https://play.google.com/store/apps/details?id=com.talabapp&hl=de&gl=US",
    imagePath: "bg-[url('/images/projects/talab.png')]",
  },
  {
    order: 4,
    title: "Bluprint",
    description:
      "Streamlining workforce management and empowering the business to efficiently manage employee data, contracts, and compliance in one centralized platform ",
    url: "https://ps.leadsquaredapps.com",
    imagePath: "bg-[url('/images/projects/bluprint.png')]",
  },
  {
    order: 1,
    title: "Odd Beans Coffee",
    description: "Experiience the real taste of 'Good Coffee'",
    url: "https://www.oddbeanscoffee.com/",
    imagePath: "bg-[url('/images/projects/oddbeanscoffee.png')]",
  },
  {
    order: 2,
    title: "Sure Clickz",
    description: "Experiience the real taste of 'Good Coffee'",
    url: "https://sureclickz.com/",
    imagePath: "bg-[url('/images/projects/sureclickz.png')]",
  },
];

export default function ProjectInfoCard() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {PROJECTS.sort(sortByOrder).map(
        ({ order, title, description, url, imagePath }) => (
          <Link key={order} href={url} target="_blank">
            <div
              className={`transition-all border rounded-2xl m-4 sm:m-y-2 h-80 md:h-96 ${imagePath} bg-no-repeat bg-cover bg-center cursor-pointer bg-origin-padding`}
            >
              <div className="p-4 rounded-2xl rounded-b-none flex justify-between items-center">
                <span className="whitespace-nowrap overflow-hidden text-ellipsis max-w-sm">
                  <h1 className="text-2xl font-semibold">{title}</h1>
                  <h4 className="font-light text-sm text-slate-500">
                    {description}
                  </h4>
                </span>

                <ChevronRightCircle
                  size={28}
                  className="transition-all hover:rotate-[-45deg]"
                />
              </div>
            </div>
          </Link>
        )
      )}
    </section>
  );
}

const sortByOrder = (a: Project, b: Project) => a.order - b.order;
