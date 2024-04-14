'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Homepage = () => {
	return (
		<motion.div
			className='h-full'
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 1 }}
		>
			<div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
				{/* IMAGE CONTAINER */}
				<div className='h-1/2 lg:h-full lg:w-1/2 relative'>
					<Image src='/hero.png' alt='' fill className='object-contain' />
				</div>
				{/* TEXT CONTAINER */}
				<div className='h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center'>
					{/* TITLE */}
					<h1 className='text-4xl md:text-6xl font-bold capitalize'>
						junior fullstack developer
					</h1>
					{/* DESCRIPTION */}
					<p className='md:text-xl'>
						Passionate and motivated Junior Full Stack Developer eager to embark
						on a dynamic career journey. Armed with a solid foundation in both
						front-end and back-end development, adept at utilizing various
						programming languages and frameworks to create responsive and
						user-friendly web applications. Eager to contribute innovative ideas
						and collaborate within a supportive team environment. With a
						commitment to continuous learning and growth, I am ready to tackle
						new challenges and make meaningful contributions to any project.
					</p>
					{/* BUTTONS */}
					<div className='w-full flex gap-4'>
						<button className='p-4 rounded-lg ring-1 ring-black bg-black text-white capitalize'>
							view my work
						</button>
						<button className='p-4 rounded-lg ring-1 ring-black capitalize'>
							contact me
						</button>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Homepage;
