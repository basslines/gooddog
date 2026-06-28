import Image from "next/image";

const values = [
  { icon: "🌱", title: "Positive Methods", desc: "We never use force, fear, or punishment. Every technique is science-backed and reward-based." },
  { icon: "🏠", title: "In Your Home", desc: "Training in your dog's own environment means real-world results — not just clinic behavior." },
  { icon: "🤝", title: "Owner Education", desc: "We train you too. Understanding your dog's behavior means lasting change beyond our sessions." },
  { icon: "📞", title: "Ongoing Support", desc: "Questions after a session? We're always a WhatsApp message away for guidance and check-ins." },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#faf8f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/logo side */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-green-dark flex items-center justify-center shadow-2xs">
                <Image
                  src="/logo.png"
                  alt="Good Dog Training"
                  width={340}
                  height={340}
                  // className="invert brightness-0 invert p-6"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                <div className="font-display font-bold text-green-dark text-2xl">5+</div>
                <div className="text-xs text-gray-500 mt-0.5">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-green-mid">Who We Are</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-green-dark mt-3 mb-6 leading-tight">
              Trainers Who Truly
              <br />
              Love Dogs.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Good Dog Training is a Dubai-based team of certified professional dog trainers 
              committed to transforming the relationship between dogs and their owners. 
              We believe every dog — regardless of age, breed, or background — deserves a 
              patient, positive, and structured path to becoming their best self.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10">
              Operating under The Gentle Lead Dog Training Services, we bring training directly 
              to your home, where your dog is most comfortable. Our programs are always 
              personalized — no one-size-fits-all templates, no shortcuts.
            </p>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-5">
              {values.map((v, i) => (
                <div key={i} className="flex gap-3">
                  <span className="text-2xl shrink-0">{v.icon}</span>
                  <div>
                    <div className="font-semibold text-green-dark text-sm mb-1">{v.title}</div>
                    <div className="text-gray-500 text-xs leading-relaxed">{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
