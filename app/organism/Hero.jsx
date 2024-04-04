import { Github, Linkedin } from 'lucide-react';
import MaxWidthWrapper from '../components/MaxWidthWrapper';
import Image from 'next/image';

export default function Hero() {
	const stackList = [
		'html_css.svg',
		'js_ts.svg',
		'react_nextjs.svg',
		'tailwind_sass.svg',
	];
	return (
		<>
			<section className='px-20 pb-20 bg-secondary lg:justify-center lg:p-20'>
				<MaxWidthWrapper className='pt-10'>
					<div className='flex flex-col-reverse  gap-15 lg:flex lg:flex-row items-center'>
						<div className='flex flex-col gap-10 lg:items-start items-center text-center lg:text-start	'>
							<h1 className='text-6xl font-bold mt-10 lg:mt-0'>
								DI Group CEO 👋
							</h1>
							<p className='text-xl w-full lg:w-2/3'>
								Сәлем, Мен Дилшодбек Турсынбаевпін. Кәсікермін инвестормын блогермін. 
								Тараз қаласында алғаш кәсібімді бастағанмын. Қазір масштабқа 
								Алматы қаласына шығып жатырмын. 📍
							</p>
							<div className='flex gap-5'>
								<button>
									<Linkedin className='w-7 h-7 hover:text-blue-600 transition-all duration-200' />
								</button>
								<button>
									<Github className='w-7 h-7 hover:text-blue-600 transition-all duration-200' />
								</button>
							</div>
						</div>
						<Image
							src='/boy.jpg'
							className='hero-animate float-right '
							width={400}
							height={400}
							alt='boy.png'
						/>
					</div>
					<div className='stack flex flex-col lg:flex-row lg:flex gap-3 lg:gap-10 mt-20 items-center'>
						<p>Tech Stack</p>
						<p className='text-2xl rotate-90 lg:rotate-0 '>|</p>
						<div>
							<ul className='flex gap-10 w-full'>
								{stackList.map(item => (
									<li key={item}>
										<Image src={item} width={100} height={100} alt='stack' />
									</li>
								))}
							</ul>
						</div>
					</div>
				</MaxWidthWrapper>
			</section>
		</>
	);
}
