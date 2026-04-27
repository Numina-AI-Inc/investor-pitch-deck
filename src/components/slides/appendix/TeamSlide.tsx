import Slide from "@/components/Slide";

const team = [
  {
    photo: "/1756873360937.jpeg",
    name: "Harshul Chandrashekhar",
    role: "Product Strategy Lead",
    text: "Translates the core customer pain point into product direction, ensuring every feature maps to measurable accounting workflow outcomes.",
  },
  {
    photo: "/1742413688007.jpeg",
    name: "Manish Reddy",
    role: "Vision, Strategy & Outreach",
    text: "Shapes market narrative and drives founder-led outreach with CPA stakeholders to convert insight into validated commercial demand.",
  },
  {
    photo: "/1725953369695.jpeg",
    name: "Muhammad Aatiq",
    role: "Engineering Lead",
    text: "Owns technical execution, turning validated requirements into secure, production-ready systems that scale across client environments.",
  },
  {
    photo: "/1691457413564.jpeg",
    name: "Animesh Kumar",
    role: "ERP Consulting & Integration",
    text: "Brings enterprise consulting depth across ERP and accounting stacks, guiding how Numina fits into real-world finance, compliance, and reporting workflows.",
  },
];

const TeamSlide = () => {
  return (
    <Slide>
      <div className="max-w-5xl mx-auto">
        <span className="text-primary text-sm font-medium tracking-widest uppercase mb-6 block">
          Team
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Numina <span className="text-primary">founding team</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          One founding team spanning product strategy, market development, production engineering, and ERP integration expertise
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div key={i} className="feature-card p-6 flex flex-col h-full">
              <div className="w-28 h-28 mb-5 shrink-0 rounded-full overflow-hidden border border-border/50 bg-muted/30">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">{member.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
};

export default TeamSlide;
