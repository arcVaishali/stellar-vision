# RELIEF CONNECT - Connect for rescue and relief

This project was first runner up in Impact Hacks'23. Checkout our devpost submission- https://devpost.com/software/relief-connect

This is a disaster relief and rescue aid. It aims to reduce the issue of fragmented response by various organizations during the times of floods. This solution is a web based app.

This product aims at building two interfaces- 
- Portal for users to send alerts for rescue, food/water supplies, power and report missing/stranded person report with no login required for first time access. Request and alert will be validated via GPS.
- Portal for NDRF (National Disaster Relief Force), various NGOs, logistics companies etc. for notifying them the alerts.

### Tech Stack
We aim to use PWA (Progressive Web App Technology) to implement this idea, as it provides better connectivity and works during power outage, low internet connectivity.
- HTML
- CSS
- JavaScript
- React.js
- Tailwind CSS
- Node.js
- MongoDB
- Google Map APIs  
- Mapbox
- Oauth

 ## Inspiration
During natural calamities, people face a myriad of challenges, including a fragmented response, lack of information sharing, inefficient resource allocation, communication gaps, and difficulties in volunteer coordination. Relief Connect addresses these challenges and thus contributing to a more compassionate and effective relief effort during times of crisis.

## What it does
The Relief Connect project serves as a comprehensive platform for disaster response and relief coordination. It places importance on community engagement, offering a platform for affected communities to communicate their needs, provide feedback, and actively participate in the relief process. Serving as a coordination hub, the platform allows different relief organizations, government agencies, and volunteers to collaborate in real-time. 

The Relief Connect website incorporates a mapbox to efficiently track the locations of individuals affected by a disaster. We at the backend aim to prioritize requests and locations on the map using color-coded dots—red for immediate help, orange for food and water supplies, and yellow for power and gasoline assistance. This intuitive system allows for a quick and visual representation of urgent needs in specific areas. Rescue teams, equipped with access to the map, can easily interpret the colored dots and respond promptly to the identified needs. Map present on the afflicted users portal will be for them to share their live location with our chatbot which will go to our backend and will be stored and shown on the rescue teams portal.

The platform extends its utility beyond just rescue teams. Various NGOs, nearest communities and logistic companies also have access to the website, enabling them to address the specific needs of afflicted people. This collaboration fosters a more coordinated and comprehensive response to the challenges posed by a natural calamity. NGOs can analyze the map data to identify areas with high concentrations of urgent needs and strategically deploy their resources. 
The platform exemplifies the potential of technology to enhance coordination and responsiveness in the face of natural disasters, ultimately contributing to more efficient and targeted assistance for affected communities.

## How we built it
The site was built with a React, Tailwind, JavaScript, Vercel, Mapbox, HTML5 and CSS. We started with creating some wireframes using pen and paper to get a basic idea of how to layout the pages as required. The agreed-upon wireframe was integrated into a basic design system with tailwind, setting theme colors and fonts globally. The pages were created following a monotonous Dune-Armadillo color palette selected using Canva color palette picker. This color palette symbolizes earth color representing earthliness. We relied on a design and theme template inspiration from Webflow for the starting point, but then used a combination of tailwind and inline style prop to customize everything. We also used Trengo, Dialogflow and Google Cloud API keys for implementing the common chatbot present throughout the application which we trained using Trengo. We also used OpenAI and Zapier to implement an AI enabled chatbot for getting real time requests from the afflicted individuals, evacuees and survivors 

## How to get started?
- clone the repo 

   ```
   git clone git@github.com:arcVaishali/stellar-vision.git
   ```
- run the following commands

   ```
   cd stellar-vision
   ``` 

   ```
   npm install
   ``` 
- create a separate branch

   ```
   git branch <branch_name>
   ```

   ```
   git checkout <branch_name>
   ``` 
- make changes and then stage, commit, push and create PR.

   ```
   git add .
   ``` 

   ```
   git commit -m "message"
   ```

   ```
   git push -u origin <branch_name>
   ``` 

- Go to Create Pull Request tab above and create PR.



## Challenges we ran into
Building the Relief Connect project with the React, Tailwind, Mapbox presented its own set of challenges. One significant challenge was ensuring seamless integration and communication between the frontend components. Creating a cohesive design system with Tailwind and integrating the agreed-upon theme across pages required meticulous planning. While wireframes provided a basic layout, customization using a combination of Tailwind and inline styles posed a challenge, required to balance the flexibility of customization with consistency in design. 

Moreover, the decision to deploy the project on Vercel, was a logical choice for this React.js project. We also were presented with some challenges in configuring the deployment settings, ensuring proper environment configurations, and handling any platform-specific nuances. We also used Trengo, Dialogflow and Google Cloud API keys for implementing the common chatbot present throughout the application. We also used OpenAI and Zapier to implement an AI enabled chatbot for getting real time requests from the afflicted individuals, evacuees and survivors. It took a lot of time to successfully integrate the wind range of tools that we chose to use.

Additionally, collaborative challenges during the development process could have arisen from the need for effective communication and coordination among team members. Clear communication and proper documentation were likely crucial in addressing challenges related to code integration, feature implementation, and ensuring that everyone was aligned with the project's goals.

The project has two portals- one for the afflicted users and the other one for the rescue teams. The Rescue portal as well as the Afflicted portal i.e. the portal for Evacuees and survivors has been made completely with the amazing tools and is quite responsive. We look forward to adding real time updates , information by using Google Maps API, implement Oauth for easier authentication, implement a robust backend and database using MongoDB, Node.js and Express.js.

## Accomplishments that we're proud of
Our team takes immense pride in the accomplishments achieved during the development of the Relief Connect project. One major achievement lies in our ability to efficiently plan and execute strategic workflows within a limited timeframe, resulting in the successful delivery of the Minimum Viable Product (MVP) for Relief Connect. Beyond the efficient delivery of Relief Connect, we are particularly proud of creating something that holds substantial utility and impact for our society. Designing a platform that contributes to disaster relief and rescue aid signifies our commitment to addressing critical societal needs and making a positive difference during times of crisis. Another source of pride stems from the learning journey of our novice team members who engaged with cutting-edge technologies, despite being initially unfamiliar with some tools. This reflects our team's dedication to continuous learning and the ability to adapt to new technologies to bring innovative solutions to life. 
The collaborative experiences with the Impact Hacks team and their Discord community have been invaluable. Connecting with like-minded individuals, participating in live hack sessions, and learning from the experiences of both our team members and the broader Impact Hacks community have enriched our development process. This collaborative environment has not only fostered a sense of community but has also provided opportunities for mutual learning and growth.

## What we learned
 Building a comprehensive disaster relief platform over a weekend is undoubtedly a substantial undertaking, yet the experience was not only a lot of work but also immensely enjoyable. The main takeaway from our endeavor is the recognition of what can be achieved when the team is aligned on objectives and leverages individual strengths effectively. The acknowledgment that starting with basic tools, even using fundamental HTML and CSS, can be incredibly powerful, especially when the focus is on refining and implementing the core idea. This reinforced the idea that frameworks, while beneficial for rapid development, should not overshadow the simplicity that allows broad team participation. By choosing simple tools initially, the team was able to ensure that everyone, regardless of their familiarity with specific technologies, could actively contribute to the project.

## What's next for Relief Connect
- Request Search Feature Enhancement
- Chatbot Feature Optimization
- Location Share and Map Feature Optimization
- User Engagement and Feedback
- Integration of Additional Services
- Visual representation of priority of requests on Map
- Scalability and Infrastructure
- Backend and database integration
- Real time API calls
- Real time GPS data fetch
- Real time request data fetch from the afflicted portal

# UPDATE
**It was told in the demo video above that we are yet to implement the portal for Afflicted individuals i.e. for evacuees, trapped and survivors but we have a good news- WE HAVE SUCCESSFULLY IMPLEMENTED THE PORTAL FOR AFFLICTED INDIVIDUALS** 

## CHECKOUT OUR DEMO FOR AFFLICTED INDIVIDUALS/EVACUEES/SURVIVORS' PORTAL- [Demo video || Afflicted user Portal || Impact Hacks 2023 || Screen Rec Shareable Link](https://screenrec.com/share/tIAZ7jGYS5)

