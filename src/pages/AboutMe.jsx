import { motion } from 'framer-motion';

export default function AboutMe() {
  return (
    <section id="about-me" className="sm:py-20 py-10 bg-white">
        <div className="md:px-12 px-4 text-center max-w-7xl mx-auto">
            {/* <motion.h2
            className="text-4xl font-bold text-gray-800 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            >
            O mně
            </motion.h2> */}

        <div className="text-gray-700 text-lg leading-relaxed text-left space-y-4">
                <div className="flex flex-col gap-12">
                    <div className="space-y-4">
                        <div className="md:w-2/5 md:aspect-square aspect-video shadow-lg md:float-left md:mr-12 ">
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
                        <motion.p
                        className="mt-8 md:mt-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        >
                        Tvorbě se věnuji od nepaměti. Vždycky se mi něco rodilo v hlavě, pořád jsem měla nové nápady. Nikdy jsem nezůstala jen u jednoho druhu zhmotňování věcí, ani u předem vyšlapané cesty. Někdy se ponořím do určité techniky, ale ta se pak volně prolíná s těmi předešlými. Baví mě možnosti kombinací a experimentování. Když míchám média dohromady, vzniká nečekané a rozšiřuje se prostor pro vyjádření.
                        </motion.p>
                        <motion.p
                        className=""
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        >
                        V dospělosti jsem se ale na delší dobu ve své tvorbě trochu ztratila. Často jsem se dotýkala toho, co by chtělo „moje skutečné já“ tvořit, ale rychle mi to zase uteklo. Podvědomě jsem se pořád přizpůsobovala „publiku“ – a tím jsem se vzdalovala tomu, co chtělo skrze mě opravdu přijít.
                        </motion.p>
                        <motion.p
                        className="italic text-2xl text-white bg-gray-800 p-4 float-right lg:w-1/4 md:w-1/2 md:ml-12 my-8 md:my-4" 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        >
                        „Jsem vlastně překladatelka řeči světa, a to do mého jazyka. Pokud některým mým překladům aspoň trochu rozumíte, ráda si s Vámi dám někdy kafe.“
                        </motion.p>
                        <motion.p
                        className=""
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        >
                        Poslední roky intenzivně pracuji na tom, abych vytvářela to, co skutečně chci. Bez ohledu na to, co si o tom, kdo pomyslí, jak to kdo hodnotí. I já sama. Začala jsem zkoumat, proč se mi líbí právě to, co se mi líbí. Proč některé motivy opakuji, a u jiných cítím odpor už při pomyšlení, že bych je měla použít. Jdu do hloubky, jak jen to jde a zaměřuji se na všechny detaily, kterých si všimnu. Způsob tažení tužky po papíře, specifický odstín, sympatický tvar…Hledám vlastní podvědomé záměry a pravdy, které se objevují, když tvoření nechám, aby se dělo samo a přirozeně, bez zábran. To je na umění to, co mě nejvíc fascinuje – že může být médiem, poselstvím i překladatelem našeho opravdového já.
                        </motion.p>
                        <motion.p
                        className=""
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        >
                        To, co vytvářím, je vždy odrazem toho, kým jsem – s mými osobními „filtry“, skrze které vidím svět. To ale není nic speciálního. Každý z nás má svůj jedinečný set filtrů, tedy svůj opravdu jedinečný úhel pohledu. Proto, když dva dělají totéž, nikdy to není totéž.
                        </motion.p>
                        <motion.p
                        className=""
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        >
                        Věřím, že jsme nikdy neumírající součástí jednoho celku, ale tady na Zemi zakoušíme malý zlomek naoko oddělené existence, svou vlastní unikátní zkušenost. A ta se vždy otiskuje do toho, co tvoříme. A proto se to všechno děje. A taky, aby byla nějaká prdel.
                        </motion.p>
                        <motion.p
                        className=""
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        >
                        Mým nejhlubším přáním je, abychom se co nejvíce dokázali přiblížit svému necenzurovanému pohledu a měli odvahu ho sdílet. Vím, že by svět byl pak ještě krásnější a zajímavější, než si dokážeme představit. Moje umění je pro mě cestou k této autenticitě – a doufám, že někdo, kdo se bude dívat, zachytí můj signál. Píp půp.
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
