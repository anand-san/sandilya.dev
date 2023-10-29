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
    description: "Online shop for https://xerobit.in",
    url: "https://sureclickz.com/",
    imagePath: "bg-[url('/images/projects/sureclickz.png')]",
  },
  {
    order: 5,
    title: "Quantilope GmbH",
    description: "",
    url: "https://www.quantilope.com/",
    imagePath: "bg-[url('/images/projects/quantilope.webp')]",
  },
  {
    order: 6,
    title: "Mieterengel GmbH",
    description: "",
    url: "https://mieterengel.de/",
    imagePath: "bg-[url('/images/projects/mieterengel.jpg')]",
  },
  {
    order: 7,
    title: "Leadsquared",
    description: "",
    url: "https://leadsquared.com/",
    imagePath: "bg-[url('/images/projects/leadsquared.png')]",
  },
];

export default function ProjectInfoCard() {
  return (
    <section className="h-screen snap-start snap-always grid grid-flow-col auto-cols-[80%] gap-3 overflow-x-auto items-center snap-x snap-mandatory mx-4">
      {PROJECTS.sort(sortByOrder).map(
        ({ order, title, description, url, imagePath }) => (
          <Link key={order} href={url} target="_blank">
            <div
              className={`transition-all border rounded-2xl m-4 sm:m-y-2 h-80 md:h-[480px] ${imagePath} bg-no-repeat bg-cover bg-center cursor-pointer bg-origin-padding snap-center snap-always`}
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
