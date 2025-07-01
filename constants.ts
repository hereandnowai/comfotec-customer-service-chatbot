
import { LanguageOption, ChatMessage } from './types';

export const LANGUAGES: LanguageOption[] = [
  { code: 'en-US', name: 'English', geminiLangCode: 'English' },
  { code: 'ar-SA', name: 'العربية (Arabic)', geminiLangCode: 'Arabic' },
  { code: 'fr-FR', name: 'Français (French)', geminiLangCode: 'French' },
  { code: 'es-ES', name: 'Español (Spanish)', geminiLangCode: 'Spanish' },
  { code: 'de-DE', name: 'Deutsch (German)', geminiLangCode: 'German' },
];

export const DEFAULT_LANGUAGE_CODE: string = 'en-US';

export const INITIAL_ASSISTANT_MESSAGE: () => ChatMessage = () => ({
  id: 'initial-greeting-' + Date.now(),
  text: "Hello! I'm ComfoBot, Comfotec's virtual assistant. How can I help you today? You can select your preferred language using the dropdown below, or try one of the quick questions.",
  sender: 'assistant',
  timestamp: new Date(),
  language: DEFAULT_LANGUAGE_CODE,
});

export const PREDEFINED_QUESTIONS: string[] = [
  "What is Comfotec?",
  "What services does Comfotec offer?",
  "Tell me about BIM Consultancy.",
  "Where is Comfotec located?",
  "How can I contact Comfotec?",
  "What notable projects has Comfotec worked on?",
  "Does Comfotec offer BIM training?",
  "What is Scan to BIM?",
  "CAD Engineering Support?",
  "Laser 3D Scanning services?",
  "What LOD levels do you work with?",
  "Are there job opportunities at Comfotec?",
  "Do you offer free consultations?",
  "What industries does Comfotec serve?",
  "Tell me about Secondment Solutions.",
  "Does Comfotec work on international projects?"
];


const COMFOTEC_FAQ_DATA = `
Customized FAQ Bot Training Dataset for Comfotec
Company Overview FAQs
1. What is Comfotec?
 Comfotec is a leading CAD & BIM solution provider headquartered in Dubai, UAE, known for bringing ideas to life with a meticulous, client-focused approach1. The company was founded in 2014 and has consistently delivered high-quality CAD and BIM services2.
2. When was Comfotec established?
 Comfotec was founded in 2014 and has been operating for over a decade in the AEC industry23.
3. Where is Comfotec located?
 Comfotec is headquartered in Dubai, UAE, with offices at Palace Towers – 301 – Dubai Silicon Oasis4. The company also has operations in Chennai, India, and Sydney, Australia4.
4. How many employees does Comfotec have?
 Comfotec has over 400 employees and operates with a team size ranging from 201-500 professionals23.
5. What is Comfotec's company tagline?
 Comfotec is known as "THE BIM COMPANY" and positions itself as an expert solution provider in BIM, CAD, Engineering, and Consultancy53.
Services and Specializations
6. What services does Comfotec offer?
 Comfotec specializes in AEC & MEP Design Support, Infra & Utilities, CAD & BIM Services, Scan to BIM, Content Creations, Outsourcing Engineering Experts, Outsourcing BIM Modelers, Outsourcing CAD experts, and Engineering Calculations53.
7. What is BIM Consultancy?
 Comfotec provides expert BIM consultancy services tailored to streamline project workflows, enhance coordination, and ensure seamless integration of BIM standards across all project stages2. This includes implementation strategies to BIM Execution Plans (BEPs)2.
8. What BIM Engineering Support does Comfotec provide?
 The company's team of BIM specialists offers robust engineering support across architectural, structural, and MEP disciplines from LOD100 to LOD5002. They ensure precise model development, clash detection, quantity take-offs, and coordination deliverables2.
9. Does Comfotec offer CAD Engineering Support?
 Yes, Comfotec delivers high-quality CAD drafting and detailing services for architectural, structural, and MEP drawings2. The team ensures accuracy, clarity, and compliance with client standards2.
10. What are Secondment Solutions?
 Comfotec offers flexible secondment services by deploying skilled BIM Technicians, Modelers, CAD draftsmen and coordinators directly to client offices or remotely2. These resources integrate seamlessly with client teams2.
11. Does Comfotec provide Laser 3D Scanning services?
 Yes, utilizing advanced laser scanning technology, Comfotec captures high-precision point cloud data for existing structures and converts them into intelligent BIM models or 2D drawings2. These solutions are ideal for renovation, facility management, and retrofit projects2.
12. What BIM Training does Comfotec offer?
 Comfotec's training programs are designed to upskill teams in industry-standard BIM tools and workflows2. They offer customized training for beginners to advanced users covering software like Revit, Navisworks, and BIM Collaboration Pro2.
Technical Expertise
13. What software does Comfotec specialize in?
 Comfotec specializes in BIM software such as Revit, AutoCAD, and Navisworks3. The team is proficient in industry-leading technologies and tools2.
14. What BIM standards does Comfotec follow?
 Comfotec ensures compliance with international BIM standards and has strong knowledge of BIM standards, workflows, and coordination between different disciplines23.
15. Does Comfotec work with Dubai building codes?
 Yes, Comfotec's team is familiar with Dubai Building Codes, Dubai Municipality & Dubai Civil Defense standards3.
16. What LOD levels does Comfotec work with?
 Comfotec provides BIM engineering support across all levels from LOD100 to LOD5002.
17. Does Comfotec offer clash detection services?
 Yes, clash detection is part of their BIM engineering support services, along with quantity take-offs, and coordination deliverables2.
Project Experience
18. How many projects has Comfotec completed?
 Comfotec has completed more than 650 projects completed worldwide2.
19. How many clients does Comfotec serve?
 The company has a client base of over 170 clients2.
20. What notable projects has Comfotec worked on?
 Comfotec has contributed to iconic projects including Museum of the Future, EXPO 2020 Mobility Pavilion, Bee'ah Headquarters, Creek Harbour Gate, Sea World, One Za'abeel Towers, Jumeirah Beach Hills Development, Marsa Al Arab, Wasl Tower, Nakheel Mall, Blue Waters, Mashreq Bank HQ, and Al Ain Hospital2.
21. Does Comfotec work on international projects?
 Yes, Comfotec executes projects across several nations and has experience handling diverse regulatory environments, cultural design preferences, and region-specific workflows2.
22. What types of projects does Comfotec handle?
 Comfotec serves projects of all sizes, from infrastructure and residential buildings to public spaces and commercial monuments2.
Contact Information
23. How can I contact Comfotec?
 You can contact Comfotec at +971 4 430 8329 or email contact@comfotec.net64. Their main office is located at Office 301 Palace Towers Dubai Silicon Oasis – Dubai, UAE4.
24. What is Comfotec's email format?
 Comfotec's official email format follows the pattern name@comfotec.com7.
25. Does Comfotec have international offices?
 Yes, Comfotec has offices in Dubai (UAE), Chennai (India), and Sydney (Australia)4.
26. How can I apply for a job at Comfotec?
 For career opportunities, you can contact careers@comfotec.net4.
Industry Focus
27. What industries does Comfotec serve?
 Comfotec specializes in the Architecture, Engineering, and Construction (AEC) industry12. They help industrial organizations leverage Building Information Modeling (BIM) tools1.
28. Does Comfotec work with MEP systems?
 Yes, Comfotec provides AEC & MEP Design Support and has expertise in MEP disciplines across all LOD levels523.
29. What is Comfotec's approach to infrastructure projects?
 Comfotec offers expert AEC engineering support as a trusted infrastructure consulting firm, assisting with critical deadlines and compliance1.
Technology and Innovation
30. What makes Comfotec's laser 3D design services unique?
 Comfotec's laser 3D design services offer unmatched precision and detail, rapid project turnarounds, versatility for any project size and environment, and cost-effective solutions for long-term value6.
31. How does Comfotec ensure precision in their work?
 Comfotec uses advanced laser technology that captures every detail, ensuring 3D designs are accurate and detailed, eliminating guesswork and enhancing decision-making6.
32. What technology does Comfotec use for scanning?
 Comfotec utilizes advanced laser scanning technology to capture high-precision point cloud data for existing structures2.
Business Model and Approach
33. What is Comfotec's service philosophy?
 Comfotec's service philosophy focuses on flexibility and scalability, integrated project teams, cutting-edge technology, and operational excellence2.
34. How does Comfotec ensure client satisfaction?
 Comfotec is a process-driven entity that values and adheres to business commitments while ensuring all business is managed professionally and responsibly5.
35. What makes Comfotec different from competitors?
 Comfotec positions itself as a long-term partner in digital transformation, offering dedicated BIM professionals who work as true extensions of client in-house teams2.
Quality and Standards
36. What quality standards does Comfotec maintain?
 Comfotec ensures every project meets world-class standards through seamless BIM integration and compliance with international BIM standards2.
37. How does Comfotec handle complex projects?
 Comfotec's expert team handles complex projects with ease, delivering iconic results that exceed expectations through precision, speed, and advanced BIM integration12.
38. What is Comfotec's track record for project delivery?
 Comfotec has a proven track record of delivering projects on time and within budget, with the ability to collaborate with multiple project stakeholders and meet tight deadlines2.
Training and Development
39. What training levels does Comfotec offer?
 Comfotec offers customized training for beginners to advanced users in industry-standard BIM tools and workflows2.
40. Which software training programs are available?
 Training programs cover software like Revit, Navisworks, and BIM Collaboration Pro2.
41. How does Comfotec ensure teams are equipped for modern projects?
 Through comprehensive training programs that ensure teams are equipped for modern project demands with up-to-date BIM tools and workflows2.
Global Operations
42. How does Comfotec handle different time zones?
 Comfotec's global reach enables them to provide time-zone-compatible assistance and cross-border resource deployment2.
43. Does Comfotec adapt to local construction practices?
 Yes, Comfotec meets international BIM standards while adapting to local construction practices, codes, and expectations2.
44. What is Comfotec's global presence strategy?
 Comfotec operates with a global mindset and local expertise, providing responsive, culturally aware support throughout the project lifecycle2.
Recruitment and Careers
45. What positions does Comfotec typically hire for?
 Comfotec regularly hires BIM Architects, Architectural BIM Modelers, Mechanical BIM Modelers, and Electrical BIM Modelers3.
46. What qualifications are required for BIM positions?
 Positions typically require a Diploma/Degree in Engineering with 4+ years of experience as a BIM Modeler, with GCC project experience being essential3.
47. What skills are important for Comfotec employees?
 Important skills include proficiency in BIM software such as Revit, AutoCAD, and Navisworks, strong knowledge of BIM standards and workflows, and ability to deliver high-quality BIM models and shop drawings efficiently3.
Project Management
48. How does Comfotec ensure project coordination?
 Comfotec provides coordination deliverables aligned with project requirements and international BIM standards, along with clash detection services2.
49. What is Comfotec's approach to project scalability?
 The company changes resources and workflows based on project size and complexity, offering flexible and scalable solutions2.
50. How does Comfotec handle tight deadlines?
 Comfotec's team experience and efficiency enable them to deliver exceptional results quickly, allowing clients to stay on schedule26.
Specialized Services
51. What is Scan to BIM?
 Scan to BIM is one of Comfotec's specialized services where they convert laser scan data into intelligent BIM models53.
52. Does Comfotec create BIM content?
 Yes, Content Creations is listed among Comfotec's specialties53.
53. What engineering calculations does Comfotec provide?
 Engineering Calculations is one of Comfotec's specialized services, though specific details would need to be discussed directly with their team53.
54. Does Comfotec offer facility management solutions?
 Yes, their laser scanning and as-built digitization solutions are ideal for facility management applications2.
Industry Leadership
55. How long has Comfotec been in the BIM industry?
 Comfotec has been providing BIM services since 2014, representing over a decade of industry experience23.
56. What makes Comfotec a market leader?
 Comfotec is recognized as a market-leading CAD & BIM solution-providing firm with over 400 employees, 650+ completed projects, and 170+ clients52.
57. How does Comfotec stay current with industry trends?
 Comfotec uses cutting-edge technology and industry-leading technologies and tools to accelerate turnarounds and make better decisions2.
Client Relationships
58. How does Comfotec build long-term partnerships?
 Comfotec positions itself as a long-term partner in the digital transformation journey of clients, focusing on client success rather than just service provision2.
59. What is Comfotec's client-first culture?
 Comfotec's dedication to client success includes providing dedicated BIM professionals who work as true extensions of the client's in-house team2.
60. How does Comfotec ensure client satisfaction?
 The company is determined to deliver nothing but the very best to all clients with utmost satisfaction5.
Technical Capabilities
61. What modeling capabilities does Comfotec have?
 Comfotec provides precise model development across architectural, structural, and MEP disciplines from LOD100 to LOD5002.
62. Does Comfotec provide quantity take-offs?
 Yes, quantity take-offs are part of their BIM engineering support services2.
63. What documentation services does Comfotec offer?
 Comfotec provides construction documentation and engineering design support through their CAD engineering services2.
64. Can Comfotec handle retrofit projects?
 Yes, their laser scanning and as-built digitization solutions are ideal for renovation and retrofit projects2.
Innovation and Future
65. How is Comfotec shaping the future of construction?
 Comfotec is shaping the future through advanced BIM solutions that provide clarity, control, and collaboration to the construction design and execution process2.
66. What innovative solutions does Comfotec bring?
 Comfotec is a process-driven entity that looks at bringing innovative solutions to the table for every challenging situation5.
67. How does Comfotec embrace change?
 Comfotec's team of well-experienced professional experts are always ready to embrace change and take up new challenges5.
Operational Excellence
68. What delivery models does Comfotec use?
 Comfotec implements efficient delivery models that minimize errors, reduce costs, and increase productivity2.
69. How does Comfotec ensure accuracy?
 Through their CAD engineering support, Comfotec ensures accuracy, clarity, and compliance with client standards2.
70. What is Comfotec's approach to cost-effectiveness?
 Comfotec provides cost-effective solutions for long-term value, helping reduce future costs by enabling precise planning and minimizing risks6.
Digital Transformation
71. How does Comfotec support digital transformation?
 Comfotec positions itself as a long-term partner in the digital transformation journey of its clients2.
72. What digital workflows does Comfotec implement?
 Comfotec has a thorough understanding of engineering standards and digital workflows, allowing them to serve projects of all sizes2.
73. How does Comfotec integrate BIM standards?
 Comfotec ensures seamless integration of BIM standards across all project stages through their consultancy services2.
Regional Expertise
74. Does Comfotec have GCC experience?
 Yes, GCC project experience is a requirement for their team members, indicating extensive regional expertise3.
75. What UAE projects has Comfotec worked on?
 Comfotec has delivered and contributed to many mega and iconic projects in the UAE5.
76. How familiar is Comfotec with Middle East construction?
 Comfotec has extensive experience with Middle East projects and is familiar with regional building codes and standards23.
Collaboration and Teamwork
77. How does Comfotec collaborate with project stakeholders?
 Comfotec has demonstrated ability to collaborate with multiple project stakeholders and meet tight deadlines in highly competitive industry environments2.
78. What is Comfotec's team integration approach?
 Comfotec provides dedicated BIM professionals who work as true extensions of the client's in-house team2.
79. How does Comfotec ensure seamless collaboration?
 Through their secondment solutions, Comfotec resources integrate seamlessly with client teams, ensuring continuity and expertise2.
Competitive Advantages
80. What sets Comfotec apart in the industry?
 Comfotec's ability to collaborate with multiple project stakeholders, meet tight deadlines, and deliver precision, speed, and advanced BIM integration sets them apart2.
81. Why should clients choose Comfotec?
 Clients should choose Comfotec for their proven track record, global presence, technical expertise, and client-first approach2.
82. What is Comfotec's unique value proposition?
 Comfotec transforms every idea into reality through their process-driven approach and innovative solutions5.
Service Delivery
83. How does Comfotec ensure rapid turnarounds?
 Comfotec's team experience and efficiency enable rapid project turnarounds while maintaining quality standards6.
84. What is Comfotec's approach to project complexity?
 Comfotec's expert team handles complex projects with ease, delivering iconic results that exceed expectations1.
85. How does Comfotec manage project workflows?
 Comfotec streamlines project workflows through their BIM consultancy services and coordination expertise2.
Quality Assurance
86. How does Comfotec maintain quality standards?
 Comfotec ensures every project meets world-class standards through seamless BIM integration and compliance with international standards2.
87. What quality control measures does Comfotec implement?
 Comfotec implements efficient delivery models that minimize errors and increase productivity2.
88. How does Comfotec ensure compliance?
 Comfotec assists with critical deadlines and compliance, ensuring clients can navigate complex challenges with confidence1.
Market Position
89. What is Comfotec's market position?
 Comfotec is recognized as the leading CAD & BIM solution provider in Dubai, UAE1.
90. How does Comfotec maintain its leadership position?
 Through continuous innovation, technical expertise, and a proven track record of successful project delivery2.
91. What recognition has Comfotec received?
 Comfotec is known for bringing ideas to life with a meticulous, client-focused approach and has built a strong reputation for precision and expertise12.
Future Growth
92. What are Comfotec's growth plans?
 Comfotec continues to expand its global presence while maintaining local expertise in key markets2.
93. How does Comfotec plan to stay competitive?
 By using cutting-edge technology, maintaining operational excellence, and continuing to deliver innovative solutions2.
94. What markets is Comfotec expanding into?
 Comfotec already operates in UAE, India, and Australia, with potential for further global expansion4.
Partnership Approach
95. How does Comfotec approach client partnerships?
 Comfotec partners with clients to build enduring legacies and achieve seamless, successful project outcomes1.
96. What does it mean to work with Comfotec?
 Working with Comfotec enables clients to produce even the most challenging and complex projects with a success story5.
97. How does Comfotec support client success?
 Through their dedication to client success, flexible solutions, and integrated project teams2.
Environmental and Sustainability
98. Does Comfotec work on sustainable projects?
 Yes, Comfotec has worked on innovative projects like the Museum of the Future and Bee'ah Headquarters, which are known for their sustainable design2.
99. How does BIM contribute to sustainability?
 BIM helps in precise planning and minimizing risks, which can contribute to more sustainable construction practices6.
100. Does Comfotec support green building initiatives?
 Through their work on iconic sustainable projects and precise BIM modeling, Comfotec supports efficient and sustainable construction2.
Additional Services
101. Does Comfotec provide shop drawings?
 Yes, the ability to deliver high-quality shop drawings efficiently and on schedule is mentioned as a key skill requirement3.
102. What infrastructure services does Comfotec offer?
 Comfotec specializes in Infra & Utilities as part of their service offerings53.
103. Does Comfotec work on residential projects?
 Yes, Comfotec serves projects ranging from residential buildings to commercial monuments2.
104. Can Comfotec handle public space projects?
 Yes, Comfotec serves projects including public spaces and has worked on major public projects like EXPO 20202.
105. Does Comfotec work on hospitality projects?
 Yes, they have worked on projects like Marsa Al Arab and other hospitality developments2.
Technical Support
106. What kind of technical support does Comfotec provide?
 Comfotec provides comprehensive technical support through their BIM and CAD engineering services2.
107. How does Comfotec handle technical challenges?
 Comfotec's team of well-experienced professionals are always ready to take up new challenges5.
108. What expertise does Comfotec bring to complex projects?
 Deep technical expertise combined with flexible and adaptable project approaches2.
Communication and Updates
109. How can I stay updated with Comfotec's latest developments?
 You can follow Comfotec on LinkedIn for updates and expert tips2.
110. Does Comfotec share industry insights?
 Yes, Comfotec shares BIM and engineering insights through their LinkedIn presence2.
111. How does Comfotec communicate with clients?
 Through professional communication channels including official emails and direct contact methods74.
Project Portfolio
112. Can I view Comfotec's project portfolio?
 Yes, Comfotec mentions that you can explore their project portfolio to see their work2.
113. What types of projects are in Comfotec's portfolio?
 The portfolio includes iconic landmarks, infrastructure projects, residential buildings, commercial developments, and public spaces2.
114. How diverse is Comfotec's project experience?
 Comfotec has experience across various project types and has executed projects across several nations2.
Consultation Services
115. Does Comfotec offer free consultations?
 Yes, Comfotec offers free consultations - you can contact them at +971 4 430 8329 or email contact@comfotec.net6.
116. What consultation services does Comfotec provide?
 Comfotec provides expert BIM consultancy services tailored to streamline project workflows and enhance coordination2.
117. How can I get a company profile from Comfotec?
 You can share your email, and Comfotec will send their company profile to demonstrate how they can support your projects effectively4.
Industry Standards
118. What international standards does Comfotec follow?
 Comfotec ensures compliance with international BIM standards and industry best practices2.
119. How does Comfotec ensure BIM compliance?
 Through their BIM consultancy services, they guide teams in achieving digital excellence and compliance with industry best practices2.
120. What local standards does Comfotec work with?
 Comfotec is familiar with Dubai Building Codes, Dubai Municipality & Dubai Civil Defense standards3.
Resource Management
121. How does Comfotec manage resources across projects?
 Comfotec changes resources and workflows based on project size and complexity, offering flexible and scalable solutions2.
122. What is Comfotec's approach to resource deployment?
 Comfotec enables cross-border resource deployment and adaptive solutions for both local and worldwide clients2.
123. How does Comfotec ensure resource continuity?
 Through their secondment solutions, they ensure continuity, expertise, and project efficiency without the overhead of in-house recruitment2.
Competitive Analysis
124. How does Comfotec compare to other BIM companies?
 Comfotec distinguishes itself through its dedication to client success, global presence, and proven track record of over 650 completed projects2.
125. What makes Comfotec's approach unique?
 Comfotec's process-driven approach and commitment to bringing innovative solutions to every challenging situation5.
126. Why is Comfotec considered a trusted partner?
 Due to their proven track record, technical expertise, and ability to deliver projects on time and within budget2.
Technology Integration
127. How does Comfotec integrate new technologies?
 Comfotec uses cutting-edge technology and industry-leading tools to accelerate turnarounds and improve decision-making2.
128. What is Comfotec's approach to digital workflows?
 Comfotec has a thorough understanding of engineering standards and digital workflows2.
129. How does Comfotec stay current with BIM technology?
 Through continuous use of industry-leading technologies and maintaining expertise in the latest BIM tools2.
Client Support
130. What kind of support does Comfotec provide to clients?
 Comfotec provides proactive assistance with critical deadlines and compliance, ensuring clients can navigate complex challenges with confidence1.
131. How responsive is Comfotec to client needs?
 Comfotec provides responsive, culturally aware support throughout the project lifecycle2.
132. What is Comfotec's commitment to clients?
 Comfotec's commitment goes beyond standard services to proactively assist clients1.
Business Operations
133. How is Comfotec's business managed?
 Comfotec ensures all business is managed in a professional and responsible manner with best-in-practice corporate responsibility5.
134. What is Comfotec's business model?
 Comfotec operates as a process-driven entity focused on delivering innovative solutions and client satisfaction5.
135. How does Comfotec ensure business continuity?
 Through their global presence, diverse expertise, and scalable solutions2.
Performance Metrics
136. What are Comfotec's key performance indicators?
 Over 400 employees, more than 650 projects completed worldwide, and a client base of over 1702.
137. How does Comfotec measure success?
 Through client satisfaction, project delivery on time and within budget, and building long-term partnerships2.
138. What is Comfotec's project success rate?
 Comfotec has a proven track record of delivering successful projects with their ability to handle complex challenges52.
Market Reach
139. What is Comfotec's global reach?
 Comfotec operates across several nations with offices in UAE, India, and Australia24.
140. How does Comfotec serve international clients?
 Through time-zone-compatible assistance, cross-border resource deployment, and adaptive solutions2.
141. What markets does Comfotec focus on?
 Comfotec focuses on the AEC industry globally while maintaining strong presence in the Middle East market2.
Innovation Leadership
142. How does Comfotec drive innovation in BIM?
 Through their commitment to bringing innovative solutions and using cutting-edge technology52.
143. What innovative approaches does Comfotec use?
 Advanced laser scanning technology, precise BIM modeling, and integrated digital workflows26.
144. How does Comfotec contribute to industry advancement?
 By setting industry benchmarks in precision and detail, and sharing expertise through thought leadership6.
Risk Management
145. How does Comfotec minimize project risks?
 Through precise planning, clash detection, and efficient delivery models that minimize errors26.
146. What risk mitigation strategies does Comfotec employ?
 Advanced BIM integration, thorough quality control, and experienced project management2.
147. How does Comfotec ensure project success?
 Through their proven methodologies, experienced team, and commitment to meeting deadlines2.
Value Proposition
148. What value does Comfotec bring to projects?
 Comfotec brings precision, expertise, innovation, and the ability to handle complex projects with successful outcomes12.
149. How does Comfotec maximize client value?
 Through cost-effective solutions, long-term value creation, and efficient project delivery6.
150. What return on investment can clients expect?
 Clients can expect reduced costs, minimized risks, improved efficiency, and successful project outcomes26.
Final Questions
151. How can I get started with Comfotec?
 Contact Comfotec at +971 4 430 8329 or email contact@comfotec.net for a consultation64.
152. What information should I provide when contacting Comfotec?
 Share your project requirements and email to receive their company profile demonstrating how they can support your projects4.
153. What can I expect from working with Comfotec?
 You can expect professional service, innovative solutions, timely delivery, and successful project outcomes152.
154. How does Comfotec ensure client satisfaction?
 Through their client-first culture, dedicated teams, and commitment to delivering nothing but the very best52.
155. What makes Comfotec the right choice for BIM services?
 Comfotec's combination of technical expertise, global presence, proven track record, and client-focused approach makes them the ideal choice for BIM services12.
Extended Technical FAQs
156. What is the difference between LOD100 and LOD500?
 LOD (Level of Development) ranges from conceptual (LOD100) to as-built conditions (LOD500), and Comfotec provides BIM engineering support across all these levels2.
157. How does Comfotec handle MEP coordination?
 Comfotec provides robust engineering support across MEP disciplines with precise model development and clash detection2.
158. What is a BIM Execution Plan (BEP)?
 A BEP is part of Comfotec's BIM consultancy services, providing implementation strategies and ensuring compliance with industry best practices2.
159. How accurate is Comfotec's laser scanning?
 Comfotec uses advanced laser technology that captures every detail with high-precision point cloud data26.
160. What software integration does Comfotec provide?
 Comfotec integrates various BIM software including Revit, AutoCAD, Navisworks, and BIM Collaboration Pro23.
161. How does Comfotec handle point cloud data?
 Comfotec converts point cloud data from laser scanning into intelligent BIM models or 2D drawings2.
162. What coordination deliverables does Comfotec provide?
 Comfotec provides coordination deliverables aligned with project requirements and international BIM standards2.
163. How does Comfotec ensure model accuracy?
 Through precise model development, quality control processes, and compliance with international standards2.
164. What visualization services does Comfotec offer?
 Comfotec transforms complex environments into accurate, high-resolution 3D models for better decision-making6.
165. How does Comfotec handle as-built documentation?
 Through laser scanning and digitization services, Comfotec provides accurate as-built documentation for renovation and facility management2.
166. What content creation services does Comfotec provide?
 Content creation is one of Comfotec's specialties, though specific details would need to be discussed with their team53.
167. How does Comfotec ensure interoperability?
 Through their expertise in multiple software platforms and understanding of digital workflows2.
168. What quality assurance processes does Comfotec follow?
 Comfotec implements efficient delivery models that minimize errors and ensure compliance with client standards2.
169. How does Comfotec handle large-scale projects?
 Through their scalable solutions, experienced team of 400+ employees, and proven track record with mega projects2.
170. What training certifications does Comfotec provide?
 Comfotec offers customized training programs, though specific certifications would need to be confirmed directly2.
171. How does Comfotec support facility management?
 Through their laser scanning and as-built digitization solutions that are ideal for facility management applications2.
172. What engineering calculations does Comfotec perform?
 Engineering calculations is listed as one of their specialties, covering various aspects of AEC projects53.
173. How does Comfotec ensure data security?
 As a professional firm handling sensitive project data, Comfotec maintains professional standards, though specific security measures should be discussed directly5.
174. What project management tools does Comfotec use?
 Comfotec uses industry-leading technologies and tools, though specific project management platforms would need to be confirmed2.
175. How does Comfotec handle project documentation?
 Through their CAD engineering support and construction documentation services, ensuring accuracy and compliance2
`;


export const getSystemPrompt = (languageName: string, userQuery: string, chatHistory: ChatMessage[]): string => {
  const formattedHistory = chatHistory
    .filter(msg => msg.sender === 'user' || msg.sender === 'assistant')
    .slice(-MAX_CHAT_HISTORY_FOR_CONTEXT)
    .map(msg => `${msg.sender === 'user' ? 'User' : 'Assistant'}: ${msg.text}`)
    .join('\n');

  return `
You are Comfotec’s intelligent virtual assistant. Your name is ComfoBot.
Your purpose is to help users with information about Comfotec’s BIM, CAD, and engineering support services, primarily in Dubai and the surrounding region.
Your knowledge about Comfotec comes exclusively from the comprehensive FAQ document provided below.

<START OF COMFOTEC FAQ>
${COMFOTEC_FAQ_DATA}
<END OF COMFOTEC FAQ>

Response Guidelines:
1.  Tone & Style: Respond in a warm, charming, helpful, and highly professional manner. Use simple, clear language. Avoid overly technical jargon unless the user's query is highly technical or the FAQ uses it.
2.  Source of Information: Answer user questions using *only* the information found within the Comfotec FAQ document. Present the information naturally, as if it's your own knowledge.
3.  DO NOT MENTION THE FAQ: Avoid phrases like "According to the FAQ...", "Based on our documents...", "The FAQ states...", or any similar phrasing that refers to the FAQ document as your source. Simply provide the information directly.
4.  Service Suggestions: If the FAQ mentions a specific Comfotec service relevant to the user's query, suggest it naturally within your response.
5.  Quotes & Consultations: If asked for a quote or detailed consultation, and the FAQ provides guidance (e.g., visit website, email contact@comfotec.net), use that. If no specific guidance is in the FAQ for quotes, guide the user to visit the Comfotec website (e.g., "For a detailed quote, you can visit the Comfotec website and fill out their inquiry form.") or provide a generic contact email like "contact@comfotec.net" if it's mentioned in the FAQ. Do not ask for their email or personal details to provide a quote yourself.
6.  Limitations & Escalation: If a query is complex, highly specific beyond the FAQ's scope, or you cannot answer using the FAQ, politely state your limitations (e.g., "I can help with general information about Comfotec's services. For that specific query...") and offer to connect the user with a human representative by saying something like: "It would be best to speak with one of our specialists. You can reach them through the contact form on our website or by emailing the relevant contact address mentioned in our FAQ (e.g., contact@comfotec.net)."
7.  Language: The current conversation MUST be in: ${languageName}. Respond ONLY in ${languageName}. If the user types in a different language, continue to respond ONLY in ${languageName}.
8.  Clarification: If a question is unclear, politely ask for clarification.
9.  Privacy: Always prioritize user privacy. Do not ask for or store personal sensitive information.
10. Human Agent Request: If the user requests to speak with a human, provide the contact guidance mentioned in point 5 or 6, or as specified in the FAQ.
11. Process Questions: For process-related questions (e.g., "How does BIM consulting work?"), provide a brief overview or step-by-step guidance if the FAQ contains such information, presenting it clearly.

Current user query is: "${userQuery}"

Previous conversation history for context (last few messages):
${formattedHistory}

Respond ONLY with the assistant's message text. Ensure your response is entirely in ${languageName}, adheres to all the guidelines above, and is phrased naturally without mentioning the FAQ as your source.
`.trim();
};

export const GEMINI_MODEL_NAME = 'gemini-2.5-flash-preview-04-17';
export const API_REQUEST_TIMEOUT_MS = 30000; // 30 seconds
export const MAX_CHAT_HISTORY_FOR_CONTEXT = 10; // Number of messages to send as context
export const DEBOUNCE_DELAY = 300; // milliseconds for debouncing typed input (if used)
