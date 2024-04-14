'use client';

import { motion } from 'framer-motion';

const AboutPage = () => {
	return (
		<motion.div
			className='h-full'
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 1 }}
		>
			{/* {CONTAINER} */}
			<div className=''>
				{/* TEXT CONTAINER */}
				<div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64'>
					{/* BIOGRAPHY CONTAINER */}
					<div className='flex flex-col gap-12 justify-center'>
						{/* BIOGRAPHY TITLE */}
						<h1 className='font-bold text-2xl uppercase'>biography</h1>
						{/* BIOGRAPHY DESCRIPTION */}
						<p className='text-lg'>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
							repellat quam beatae, maiores tempore, aliquid nostrum illum
							veritatis est similique nihil quisquam laudantium. Dolores dolor
							adipisci est earum? Maxime, eligendi.
						</p>
						{/* BIOGRAPHY QUOTE */}
						<span className='italic'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						</span>
						{/* BIOGRAPHY SIGNATURE SVG*/}
						<div className='self-end'>
							<svg
								width='280'
								height='93'
								viewBox='0 0 280 93'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M23 13H24'
									stroke='black'
									stroke-width='3'
									stroke-linecap='round'
								/>
								<path
									d='M25 13C30.9883 16.9234 40.1155 24.4652 47.6667 23.9444C61.0825 23.0192 71.2465 12.6127 78 2'
									stroke='black'
									stroke-width='3'
									stroke-linecap='round'
								/>
								<path
									d='M77 2C62.1179 14.7561 48.2625 29.3969 39.1667 46.8889C32.4612 59.7839 28.7645 73.7129 22.5556 86.7222C22.3248 87.2056 20.6786 91.6318 19.3333 90.5556C14.3036 86.5318 11.3875 76.2072 9.33333 70.6667C8.49154 68.3961 -4.7318 37.5267 5.44444 38C17.2939 38.5511 29.414 43.0766 41.3333 44.4444C46.668 45.0566 50.6494 45.8461 55.6111 47.5C63.123 50.004 68.6727 48.7113 73.3333 42C74.8725 39.7836 78.0081 34.1198 74.4444 32.5C68.6041 29.8453 62.5695 48.5834 64.7778 53C66.7589 56.9622 81.088 43.7599 83.3889 42.0556C86.6304 39.6544 89.7022 34.8446 88.7778 41.7778C88.5443 43.5288 86.4196 50.7153 89 51.7778C90.9181 52.5676 97.8885 40.3457 101 40C107.389 39.2901 104.752 49.4789 112.667 44.2778C114.583 43.0188 122.941 37.9412 120 35C117.264 32.2637 115.815 36.291 114.778 38.4444C112.605 42.9565 110.223 49.6243 114.111 53.9444C118.323 58.624 121.611 58.5394 126.667 54.6667C131.786 50.7457 136.362 45.7274 140.333 40.6667C140.512 40.4394 143 35.6483 141.944 38.1111C140.954 40.4229 139.288 42.7563 140.056 45.4444C140.407 46.6751 144.551 41.7814 145.222 41.2222C146.877 39.8435 151.739 46.7977 152.556 47.7778C158.77 55.2347 160.373 38.2507 164.556 37.0556C171.059 35.1974 165.515 46.2945 165 48C164.448 49.8286 164.474 55.5877 168 55C171.478 54.4203 171 41.7911 171 39'
									stroke='black'
									stroke-width='3'
									stroke-linecap='round'
								/>
								<path
									d='M172 12H174'
									stroke='black'
									stroke-width='3'
									stroke-linecap='round'
								/>
								<path
									d='M191 40C186.342 39.0683 182.158 35.6933 177.056 35.0556C173.3 34.5861 175 43.328 175 45.7778C175 53.0841 176.639 55.6195 183.5 58.4444C192.608 62.1949 207.208 45.1207 212.389 39.5556C212.964 38.9382 216.055 34.1663 216.611 34.7222C219.509 37.6205 222.233 41.8328 224.333 45.3333C226.707 49.2895 224.039 53.1938 220.056 54.3889C218.367 54.8954 216.228 55.2687 214.444 54.9444C213.15 54.7091 208.865 52.4502 212.667 53.4444C233.178 58.8089 257.575 61 278 61'
									stroke='black'
									stroke-width='3'
									stroke-linecap='round'
								/>
							</svg>
						</div>
						{/* BIOGRAPHY SCROLL SVG */}
						<motion.svg
							initial={{ opacity: 0.2, y: 0 }}
							animate={{ opacity: 1, y: '10px' }}
							transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							width={50}
							height={50}
						>
							<path
								d='M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z'
								stroke='#000000'
								strokeWidth='1'
							></path>
							<path d='M12 6V14' stroke='#000000' strokeWidth='1'></path>
							<path
								d='M15 11L12 14L9 11'
								stroke='#000000'
								strokeWidth='1'
							></path>
						</motion.svg>
					</div>
					{/* SKILLS CONTAINER */}
					<div className='flex flex-col gap-12 justify-center'>
						{/* SKILL TITLE */}
						<h1 className='font-bold text-2xl uppercase'>skills</h1>
						{/* SKILL LIST */}
						<div className='flex gap-4 flex-wrap'>
							<div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
								JavaScript
							</div>
							<div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
								React.js
							</div>
							<div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
								Next.js
							</div>
							<div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
								Node.js
							</div>
							<div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
								Gulp.js
							</div>
							<div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
								HTML
							</div>
							<div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
								CSS
							</div>
							<div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
								SASS
							</div>
							<div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
								Tailwind
							</div>
							<div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
								Bootstrap
							</div>
							<div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
								Redux
							</div>
							<div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
								REST API
							</div>
							<div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
								Framer Motion
							</div>
						</div>
						{/* SKILL SCROLL SVG */}
						<motion.svg
							initial={{ opacity: 0.2, y: 0 }}
							animate={{ opacity: 1, y: '10px' }}
							transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							width={50}
							height={50}
						>
							<path
								d='M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z'
								stroke='#000000'
								strokeWidth='1'
							></path>
							<path d='M12 6V14' stroke='#000000' strokeWidth='1'></path>
							<path
								d='M15 11L12 14L9 11'
								stroke='#000000'
								strokeWidth='1'
							></path>
						</motion.svg>
					</div>
					{/* EXPERIENCE CONTAINER */}
					<div className=''></div>
				</div>
				{/* SVG CONTAINER */}
				<div className='hidden'></div>
			</div>
		</motion.div>
	);
};

export default AboutPage;
