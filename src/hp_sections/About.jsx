import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10 md:px-12 px-4">
        <div className="md:w-2/5 md:aspect-square aspect-video shadow-lg md:float-left md:mr-12 max-w-full">
          {/* Ilustrační obrázek */}
          <motion.img
          src="/img/portrait.jpg"
          alt="Umělkyně"
          className="object-cover w-full h-full md:object-top object-[0%_25%]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          />
        </div>
        {/* Text o tobě */}
        <motion.div
          className="text-center md:text-left md:w-2/3"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-4">O mně</h2>
          <p className="text-gray-700 italic text-lg leading-relaxed md:mt-12 mt-8">
          „Jsem vlastně překladatelka řeči světa, a to do mého jazyka. Pokud některým mým překladům aspoň trochu rozumíte, ráda si s Vámi dám někdy kafe.“
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Tvorbě se věnuji od nepaměti. Vždycky se mi něco rodilo v hlavě, pořád jsem měla nové nápady. Nikdy jsem nezůstala jen u jednoho druhu zhmotňování věcí, ani u předem vyšlapané cesty. Někdy se ponořím do určité techniky, ale ta se pak volně prolíná s těmi předešlými. Baví mě možnosti kombinací a experimentování. Když míchám média dohromady, vzniká nečekané a rozšiřuje se prostor pro vyjádření.
          </p>
          <p className="mt-4">
            <NavLink to="/o-mne" className="text-gray-700 underline underline-offset-4 hover:text-gray-600 text-lg transition-colors">
              Více o mně
              <ChevronRight size={20} className="inline-block ml-1" />
            </NavLink>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
