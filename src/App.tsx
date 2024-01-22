import VideoJS from './VideoJS';
import Separator from './Separator';
import Card from './Card';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Bar, BarChart, Rectangle, LineChart, Line } from 'recharts';
import { homelessness, jout } from './data';
const App = () => {
	return (
		<main className="bg-space-cadet-100 w-screen h-screen text-white overflow-x-hidden relative app">
			<section className="relative fr w-screen h-screen max-h-[75vh] overflow-x-hidden bg-space-cadet">
				<div className="fc w-1/2 items-start h-full">
					<div className="fc h-full z-10 px-10 items-start">
						<h1 className="text-8xl font-bold font-playfair">London Central Law Society</h1>
						<p className="font-lato text-xl mt-3 max-w-[60ch]">
							Igniting a passion for law in central students, and providing them with the resources to succeed.
						</p>
						<h2 className="font-lato text-2xl mt-2">
							January 2024 Issue <span className="font-bold">by Vihaan Sharma</span>
						</h2>
					</div>
					<div className="bg-[url(/images/pattern.jpg)] absolute w-full h-full bg-cover bg-center mix-blend-screen opacity-50"></div>
				</div>
				<div className="w-1/2 h-full relative">
					<img src="/images/img.png" alt="Gavel and books" className="absolute w-full h-full object-cover rounded-l-2xl" />
				</div>
			</section>
			<section className="w-full fc max-w-2xl mx-auto">
				<section className="w-full pt-10 fc">
					<h2 className="text-xl text-iris-700 font-playfair w-full text-center font-bold">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod perferendis id cupiditate magni ratione facilis quae explicabo,
						modi pariatur velit, facere temporibus sunt neque. At quidem dolore fugiat culpa asperiores!
					</h2>
				</section>
				<Separator />
				<article className="w-full fc">
					<h2 className="text-iris-700 font-playfair font-bold text-4xl mb-3">
						Justice Prevails: Uncovering Excessive Use of Force in R. v. Lindsay
					</h2>
					<figure className="w-full gap-2 fc">
						<div className="fr gap-2 w-full">
							<div className="flex-shrink">
								<img src="/images/Daniel.png" className="rounded-xl aspect-square flex-shrink object-cover w-full max-w-full" />
							</div>
							<div className="flex-shrink">
								<img src="/images/Trevor.png" className="rounded-xl aspect-square  object-cover w-full max-w-full" />
							</div>
						</div>
						<figcaption className="w-full mt-2">
							Daniel Haworth, left, had a fractured skull and brain injury after a violent arrest by Calgary police Const. Trevor
							Lindsay, right.
						</figcaption>
					</figure>
					<div className="gap-4 fc font-lato text-lg mt-5">
						<p className="">
							Last month, we saw a live example of how justice has no time constraint, and can be served any time. Trevor Ian James
							Lindsay was a constable with the Calgary Police Service who found himself facing criminal charges after an altercation
							with an arrestee back in 2015, more than 8 years ago. Mr. Lindsay was transporting Mr. Haworth to a proceeding in Calgary
							Court Proceedings for an appearance when an interaction occurred between them, ending up with "Constable Lindsay punching
							Mr. Haworth in the face and head three times, throwing him to the pavement, then both constables holding him to the
							ground." The following is a video of the incident, captured by a security camera.
						</p>

						<figure className="w-full fc gap-2">
							<VideoJS
								options={{
									autoplay: false,
									controls: true,
									responsive: true,
									fluid: true,
									sources: [
										{
											src: '/Evidence.mp4',
											type: 'video/mp4',
										},
									],
								}}
							/>
							<figcaption>
								This graphic security footage shows what appears to be a Calgary police officer punching a man repeatedly before
								throwing him on the ground.
							</figcaption>
						</figure>

						<p>
							Just last month, on December 14, 2023, the Supreme Court of Canada released its decision in the case of Trevor Ian James
							Lindsay v. His Majesty the King. In a unanimous decision, the Supreme Court upheld the majority decision of the Court of
							Appeal of Alberta, concluding that Constable Lindsay's use of force was excessive and that section 25 of the Criminal Code
							was not applicable in this case. Section 25 is a provision that protects peace officers from liability related to their
							lawful use of force. The Court found that the Crown had proven beyond a reasonable doubt that Constable Lindsay had
							committed the crime of aggravated assault. The Court emphasized that the use of force by a peace officer must be
							reasonable and proportionate to the circumstances. In this case, the Court found that Constable Lindsay's use of force
							went beyond what was necessary to control Mr. Haworth. The Court also rejected Constable Lindsay's argument that he was
							acting out of fear of being spat on, stating that there was no evidence to support this fear and that it did not justify
							the level of force used.
						</p>

						<figure className="fc gap-2 w-full mt-4">
							<VideoJS
								options={{
									autoplay: false,
									controls: true,
									responsive: true,
									fluid: true,
									sources: [
										{
											src: 'https://video.isilive.ca/scc/2023/2023-12-14--40569-oral-english.mp4',
											type: 'video/mp4',
										},
									],
								}}
							/>
							<figcaption>The final verdict of the Supreme Court of Canada</figcaption>
						</figure>

						<p>
							Personally, I believe that the Supreme Court made the right decision in this case. It is important for peace officers to
							have the ability to use force when necessary in order to maintain public safety and their own safety as well. However, in
							this case, this power was not exercised responsibly. It's very important that no peace officer abuses this power since
							they are trusted with the responsibility to protect and serve the community. This case serves as a reminder that the use
							of force by peace officers must always be justified and proportionate to the circumstances at hand.
						</p>
					</div>
				</article>
			</section>
			<section className="w-full fc max-w-2xl mx-auto">
				<Separator />
				<img src="/images/ad.png" alt="Ad" className="w-full rounded-xl" />
				<Separator />
			</section>

			<section className="w-full fc max-w-2xl mx-auto">
				<article className="w-full fc mb-5">
					<h2 className="text-iris-700 font-playfair font-bold text-4xl mb-3">Bill S-233: A Step Towards a UBI for Canadians</h2>
					<figure className="fc gap-2">
						<div className="fr gap-2 w-full">
							<img src="/images/homeless.jpg" className="rounded-xl" alt="" />
						</div>
						<figcaption className="w-full mt-2">Long lines at a Toronto food bank in 2023. Lance McMillan / Toronto Star file</figcaption>
					</figure>
					<div className="gap-4 fc font-lato text-lg mt-5">
						<p>
							There has been progress on an exciting new bill introduced by Sen. Kim Pate, which proposes a national framework for a
							universal basic income program. This bill had its first reading all the way back in 2021 with its second reading completed
							in April of 2023. Universal Basic Income (UBI) is "a government program in which every adult citizen receives a set amount
							of money regularly."^2 The idea of implementing such a program has been talked about for decades. The COVID-19 Pandemic
							and the CERB, which provided $2,000 per month to millions of Canadians, brought the concept of a basic income program to
							the forefront of discussions.
						</p>
						<p>
							Now, with the Senate's national finance committee looking into the proposal, the possibility of a basic income program in
							Canada is becoming more achievable. So, what exactly is a universal basic income and how would it work in Canada?
						</p>
						<p>
							According to{' '}
							<a target="blank" href="https://www.investopedia.com/terms/b/basic-income.asp">
								Investopedia
							</a>
							,{' '}
							<i>
								"Universal basic income (UBI) is a government program in which every adult citizen receives a set amount of money
								regularly."
							</i>{' '}
							It is meant to ensure that everyone has a minimum level of financial security and can cover their basic needs. In Canada,
							the proposed basic income program, as outlined in Sen. Kim Pate's bill, would provide a guaranteed "livable basic income"
							to anyone over the age of 17, including temporary workers, permanent residents, and refugee claimants. The program would
							work alongside existing health and disability benefits and would not replace or decrease them. This program is currently
							in the "consideration in committee" phase of the legislative process, and if passed, it could have a significant impact on
							poverty rates in Canada.
						</p>

						<figure className="fc gap-2 w-full mt-4">
							<h4>Homelessness in Canada by the Numbers</h4>
							<ResponsiveContainer width="100%" minHeight={500}>
								<LineChart
									width={500}
									height={300}
									data={homelessness}
									margin={{
										top: 5,
										right: 30,
										left: 20,
										bottom: 5,
									}}
								>
									<CartesianGrid strokeDasharray="4 4" />
									<XAxis stroke="#ffffff" dataKey="Year" interval={0} angle={-45} textAnchor="end" />
									<YAxis stroke="#ffffff" domain={[0, 5]} />
									<Tooltip content={CustomTooltip} />
									<Legend
										wrapperStyle={{
											position: 'relative',
										}}
									/>
									<Line type="monotone" dataKey="Population" stroke="#5a4fcf" activeDot={{ r: 8 }} />
								</LineChart>
							</ResponsiveContainer>
							<figcaption className="mt-4">
								Homeless population predicted by an{' '}
								<a target="blank" href="https://app.hubspot.com/documents/5183115/view/720352202?accessId=80c682">
									AI model
								</a>{' '}
								trained on historical data. The model predicts that the homeless population will rise to 342,738 by 2030.
							</figcaption>
						</figure>

						<p>
							Personally, I believe that this is really exciting news for Canada. People have been advocating for a basic income program
							for years, and now it seems like it might actually become a reality. The potential benefits of a basic income program are
							immense. It could help alleviate poverty, provide a safety net for those facing economic insecurity, and support
							individuals in pursuing education and career opportunities.
						</p>
					</div>
				</article>
			</section>
			<section className="w-full h-full bg-space-cadet-300 fc lg:fr justify-start items-start relative gap-10">
				<div className="relative min-h-full w-full md:w-1/4">
					<div className="w-full absolute h-full bg-[url(/images/lawyer.jpg)] bg-cover bg-center"></div>
					<div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black"></div>
					<div className="absolute w-full h-3/4 bottom-0 fc px-5 gap-3">
						<h2 className="font-playfair text-5xl">Criminal Defence Lawyer</h2>
						<p className="text-md font-lato">
							Professionals in the legal field, lawyers represent and preserve their clients' rights in court. Criminal defence lawyers
							defend the accused person in a criminal case. They handle a variety of matters, such as theft, embezzlement, and domestic
							abuse. They engage in activities such as gathering information, looking into the allegations made against their clients,
							and settling cases with the prosecution. Their ultimate goal for their clients is to gain a reduced sentence, lower bail
							fees, or fewer charges. The accused person can go out and hire a criminal defence lawyer themselves, or a court appointed
							defence lawyer can be assigned if they're unable to afford a lawyer.
						</p>
					</div>
				</div>
				<div className="py-10 fc w-2/4 h-full">
					<h2 className="text-2xl font-playfair">Insight</h2>
					<div className="grid grid-cols-3 gap-3 w-full px-5 py-10 h-full">
						<Card content="$74K - $135K (base pay)" headline="Average Salary" />
						<Card
							headline="Skills Needed"
							content={
								<p className="text-xl">
									Research, Writing, Time Management, Communication, Critical Thinking, Public Speaking, Negotiation, Persuasion,
									Attention
								</p>
							}
						/>
						<Card
							headline="Work Environment"
							content={
								<p className="text-xl">
									Office, Courtroom, Jail, Police Station, Client's Home, Client's Workplace, Client's Hospital Room, Client's
									Prison Cell
								</p>
							}
						/>
						<Card
							headline="Education"
							content={
								<p className="text-xl">
									High School Diploma, Bachelor's Degree, Law School, Bar Exam, Law License, Continuing Education, Internship
								</p>
							}
						/>
						<Card
							headline="Work Schedule"
							content={
								<p className="text-xl">
									Full-Time, 40 Hours/Week, Overtime, Weekends, Evenings, Holidays, On-Call, Emergency Calls, Travel, Work from Home
								</p>
							}
						/>
						<Card
							headline="Certifications"
							content={
								<p className="text-xl">
									Consider enhancing your expertise and marketability with certifications like Certified Legal Technician (CLT) or
									others in legal technology
								</p>
							}
						/>
						<div className="px-5 py-5 rounded-3xl bg-space-cadet-500 gap-2 fc col-span-3">
							<h2 className="font-bold font-lato">Job Outlook in Canadian Provinces</h2>
							<ResponsiveContainer width="100%" height="100%">
								<BarChart width={500} height={300} data={jout}>
									<CartesianGrid strokeDasharray="4 4" />
									<XAxis stroke="#ffffff" dataKey="name" interval={0} angle={-45} textAnchor="end" />
									<YAxis stroke="#ffffff" domain={[0, 5]} />
									<Tooltip content={CustomTooltip} />
									<Legend />
									<Bar dataKey="Rating" fill="#5a4fcf" activeBar={<Rectangle fill="#7b72d8" stroke="white" />} />
								</BarChart>
							</ResponsiveContainer>
						</div>
					</div>
				</div>
				<div className="h-full overflow-y-scroll w-1/4 bg-space-cadet-400 fc items-start justify-start px-5 py-10">
					<h2 className="text-3xl font-playfair">How to become one</h2>
					<ol className="fc gap-4 justify-start items-start mt-4">
						<li className="fc gap-2 items-start justify-start">
							<h4 className="font-bold text-xl">Get a high school diploma</h4>
							<p>
								Obtain a diploma after completing your high school education in any province or territory. Science, English, social
								studies, and public speaking are suitable classes to take. Getting through high school is a great way to be ready for
								college, when you can start specializing and concentrating on criminal justice-related subjects. Many high schools
								offer law courses, which will help you find out if you want to pursue a career in law.
							</p>
						</li>
						<li className="fc gap-2 items-start justify-start">
							<h4 className="font-bold text-xl">Get a bachelor's degree</h4>
							<p>
								You must have a bachelor's degree to be admitted to law school. You can choose any major, but it is recommended that
								you take courses in English, history, economics, and public speaking. You can also take a pre-law program, which
								includes courses in criminal justice, law, and political science. If you want to be a criminal defence lawyer, you
								should take courses in criminal justice, criminology, and sociology.
							</p>
						</li>
						<li className="fc gap-2 items-start justify-start">
							<h4 className="font-bold text-xl">Write the LSAT</h4>
							<div>
								The LSAC designs and administers the standardized law school admission test (LSAT). This exam, which the LSAC
								administers up to eight times throughout a test cycle, has two required sections:
								<ul className="list-disc list-inside m-0 p-0">
									<li>
										A part of multiple-choice questions and puzzles designed to assess your ability to comprehend what you've read
										and to reason logically and analytically
									</li>
									<li>A section devoted to essays.</li>
								</ul>
							</div>
						</li>
						<li className="fc gap-2 items-start justify-start">
							<h4 className="font-bold text-xl">Apply to law school</h4>
							<p>
								Based on your LSAT results, GPA, school size, and legal specialization, research the law schools you might want to
								apply to. Upon completion of your three-year legal education, you are normally qualified to receive the Juris Doctor
								(JD) degree. A JD is typically an undergraduate degree, though admission does need prior college coursework. Acquiring
								a JD degree could make you eligible to join the bar in numerous provinces or territories.
							</p>
						</li>
						<li className="fc gap-2 items-start justify-start">
							<h4 className="font-bold text-xl">Obtaining a License</h4>
							<p>
								Generally speaking, finishing the bar admission course and completing an internship in the province of your choice are
								prerequisites for obtaining a license to practice law. The requirements for completing the bar admission course vary
								by area, so you should thoroughly investigate each province to see which one best suits your skills and credentials.
								Working under the supervision of a skilled and licensed attorney for a set amount of time, typically ten months, is
								referred to as a "articling."
							</p>
						</li>
						<li className="fc gap-2 items-start justify-start">
							<h4 className="font-bold text-xl">Gain professional experience</h4>
							<p>
								After obtaining all necessary degrees and getting a licence from the appropriate authority, you may begin your law
								practice. You can work in the public interest, a private practice, or for the government. Working in the public
								interest involves working for a public interest group or doing legal aid work. Private practice means you have
								individual clients, and working for the government may mean working as a criminal prosecutor or for government
								ministries.
							</p>
						</li>
					</ol>
				</div>
			</section>
			<section className="w-full fc max-w-2xl mx-auto mt-10">
				<article className="w-full fc mb-5">
					<h2 className="text-iris-700 font-playfair font-bold text-4xl mb-3">The need for AI regulation in Canada</h2>
					<div className="gap-4 fc font-lato text-lg mt-5">
						<p>
							The world is evolving rapidly and laws in Canada need to keep up with it. In 2021, the company known as OpenAI launched
							its own AI chatbot known as ChatGPT that took the world by a storm. As of right now, it has over 180 million users. This
							triggered many companies to develop Artifical Intelligence models that can be used by the public sector. One such model is
							DALL·E 2, again by OpenAI. This model is given a text prompt, and it will generate any image you describe to it. For
							example, in the image below, I told DALL·E that I wanted an image of "A Shiba Inu dog wearing a beret and black
							turtleneck":
						</p>
						<figure className="fc gap-2">
							<div className="fr gap-2 w-full">
								<img src="/images/shiba.webp" className="rounded-xl" alt="" />
							</div>
							<figcaption className="w-full mt-2">
								AI generated image of a Shiba Inu dog wearing a beret and black turtleneck
							</figcaption>
						</figure>
						<p>
							As you can see, this image model is capable of producing realistic and robust looking content. I personally wouldn't be
							able to tell apart this image from real life if I didn't know it was AI generated.
						</p>
						<p>
							With this powerful new technology, Canadian laws have a necessity to adapt and keep up with the advancements in artificial
							intelligence. As AI technologies like ChatGPT and DALL·E 2 become more prevalent and sophisticated, it raises important
							legal and ethical considerations.
						</p>
						<p>
							One key area that Canadian laws have to address is Intellectual Property Rights. The content generation done by these AI
							models brings up questions about ownership and copyright. Establishing clear guidelines for intellectual property in the
							context of AI creations will be crucial.{' '}
						</p>
						<p>
							Another important consideration is privacy. These AI systems need enormous amounts of data to do things like text and
							image generation, making protection of individuals' privacy very important. This data usage is to train the AI about what
							it has to do. For example, if we want to make an AI that looks at a picture and tells us is it has pizza in it, we will
							need to provide the AI with Marge amounts of photos that have pizza in them and those that do not. Regulations need to
							evolve to address privacy concerns with the use of AI and what type of data can be used to train the models.{' '}
						</p>
						<p>
							Furthermore, as AI systems continue to evolve, labor laws might need updates to address the changing nature of work.
							Ensuring fair practices and protecting workers from job displacement are important considerations for policymakers.{' '}
						</p>
						<p>
							The rapid evolution of AI requires a proactive approach to update and adapt Canadian laws. Intellectual property, privacy,
							and labor laws are just some of the many crucial considerations that legal frameworks must address to ensure that the
							rights and well being of Canadians are safeguarded.
						</p>
					</div>
				</article>
			</section>
			<section className="w-full fc max-w-2xl mx-auto">
				<Separator />
			</section>
			<section className="w-full fc max-w-2xl mx-auto mt-10">
				<article className="w-full fc mb-5">
					<h2 className="text-iris-700 font-playfair font-bold text-4xl mb-3">Meta's $51 Million Settlement</h2>
					<div className="gap-4 fc font-lato text-lg mt-5">
						<p>
							A recent case of a $51 million Meta settlement proves how important it is for companies to carefully review privacy laws
							in countries that they want to operate in. Meta is offering $51 million to resolve a class-action lawsuit that they face
							in four Canadian provinces including Saskatchewan, British Columbia, Manitoba, and Newfoundland and Labrador.
						</p>
						<figure className="fc gap-2">
							<div className="fr gap-2 w-full">
								<img src="/images/meta.webp" className="rounded-xl" alt="" />
							</div>
						</figure>
						<p>
							This settlement took place due to Facebook's "Sponsored Stories" advertising program that took place from 2011 to 2014.
							This program used people's names and images to generate news feed endorsements when they interacted with a product, such
							as liking it. This is a breach of privacy, as individuals were not explicitly informed or given the opportunity to consent
							to the use of their names and images in these Sponsored Stories.
						</p>
						<p>
							Meta has previously been involved in settlements of a similar nature. Information about users has also been used in the
							past. For the first time, Meta had to pay out $725 million last year after giving away user data to Cambridge Analytica, a
							business connected to Donald Trump's 2016 campaign.
						</p>
						<p>
							I personally believe that money is not something that solves this kind of a privacy issue. Meta makes a lot more than the
							money that they pay out in these lawsuits, sometimes even solely from the features being accused. There needs to be
							another consequence of these actions, rather than just a fine they could keep paying over and over again. Meta will
							continue to use any methods to make money, even if it completely breaches the privacy of its users.
						</p>
						<p>
							Since there is no specified database that holds all of the people whose information was used in the Sponsored Stories
							program, lawyers estimate that "4.3 million people who had their real name or photo used in a sponsored story could
							qualify as part of the Canadian settlement." (CBC)
						</p>
						<p>
							This case serves as a stark reminder of the importance of companies to specifically navigate and adhere to privacy laws in
							their respectful countries. If companies want to globalize they also have to do the work for it. The resolution of this
							program underscores the significance of obtaining explicit consent and respecting privacy rights.
						</p>
					</div>
				</article>
			</section>
			<section className="w-full fc max-w-2xl mx-auto">
				<Separator />
			</section>

			<section className="w-full fc max-w-2xl mx-auto mt-10">
				<article className="w-full fc mb-5 font-lato text-lg">
					<h2 className="text-iris-700 font-playfair font-bold text-4xl mb-3">Parting words from a Grade 11 student</h2>
					<p>
						{/* Message from the Editor “Parting Words and Advice from a Grade 11 Law
Student” In this section, offer some words of advice to readers (not advice about
dating or stocks) about the Canadian Legal System. Most importantly, be sure to
share what you have learned in the course. */}
						As a grade 11 student, I have learned a lot about the Canadian Legal System. I have learned about the different types of laws,
						the different types of lawyers, and the different types of courts. I have also learned about the different types of crimes and
						the different types of sentences. I now possess more knowledge about the Canadian Legal System than I did before, and probably
						even more knowledge than the average citizen of this country. I now have much more respect for the people that deliver justice
						everyday. I believe that everyone should have a basic understanding of the legal system in the country they live in. It's
						crucial for citizens to be aware of their rights and responsibilities, as well as the mechanisms in place to ensure justice.
						Finally, I would like to thank you for reading this magazine. I hope you learned something new about the Canadian Legal
						System.
					</p>
				</article>
			</section>
			<section className="w-full fc max-w-2xl mx-auto">
				<Separator />
			</section>

			<section className="w-full fc max-w-2xl mx-auto mt-10">
				<article className="w-full fc mb-5">
					<h2 className="text-iris-700 font-playfair font-bold text-4xl mb-3">Works Cited</h2>
					<div className="gap-4 fc font-lato text-lg mt-5 justify-start text-left mb-10">
						<a className="text-left w-full" target="blank" href="https://www.scc-csc.ca/case-dossier/info/sum-som-eng.aspx?cas=40569">
							Case Summary of Lindsay v. R.
						</a>
						<a
							className="w-full text-left"
							href="https://www.thestar.com/news/canada/canada-is-considering-a-guaranteed-universal-basic-income-program-here-s-what-that-means/article_98a4ee99-150c-50b5-8867-0203efc51520.html"
							target="blank"
						>
							Canada is considering a guaranteed universal basic income program. Here's what that means
						</a>
						<a className="w-full text-left" href="https://www.parl.ca/legisinfo/en/bill/44-1/s-233?view=progress" target="blank">
							Bill S-233
						</a>
						<a className="w-full text-left" href="https://openai.com/dall-e-2" target="blank">
							DALL·E 2
						</a>
						<a
							className="w-full text-left"
							href="https://www.cbc.ca/news/canada/meta-facebook-canadian-images-lawsuit-1.7081357"
							target="blank"
						>
							Meta's $51 Million Settlement
						</a>
						<a className="w-full text-left" href="https://globalnews.ca/news/10221593/meta-facebook-canada-lawsuit/" target="blank">
							Meta's $51 Million Settlement
						</a>
						<a className="w-full text-left" href="https://www.jobbank.gc.ca/marketreport/outlook-occupation/15815/ON" target="blank">
							Job Outlook in Canada
						</a>
						<a className="w-full text-left" href="https://www.jobbank.gc.ca/marketreport/outlook-occupation/15815/ca" target="blank">
							Job Outlook in Canada
						</a>
						<a
							className="w-full text-left"
							href="https://uwaterloo.ca/future-students/missing-manual/careers/how-become-lawyer-canada#degree"
							target="blank"
						>
							How to become a lawyer
						</a>
						<a
							className="w-full text-left"
							href="https://www.glassdoor.ca/Salaries/criminal-defence-lawyer-salary-SRCH_KO0,23.htm"
							target="blank"
						>
							Average Salary
						</a>
						<a className="w-full text-left" href="https://www.investopedia.com/terms/b/basic-income.asp" target="blank">
							Investopedia
						</a>
						<a
							className="w-full text-left"
							href="https://ca.indeed.com/career-advice/finding-a-job/what-does-criminal-lawyer-do"
							target="blank"
						>
							What does a criminal lawyer do?
						</a>
					</div>
				</article>
			</section>
		</main>
	);
};

export default App;

const CustomTooltip = ({ active, payload }) => {
	if (active && payload && payload.length) {
		return (
			<div className="custom-tooltip" style={{ backgroundColor: 'black', color: 'white', padding: '10px', borderRadius: '5px' }}>
				{Object.keys(payload[0].payload).map((key) => {
					return (
						<p className="desc" key={key}>
							{key}: {payload[0].payload[key]}
						</p>
					);
				})}
			</div>
		);
	}

	return null;
};
