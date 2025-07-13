Tech Stack Used

Frontend: React.js 

Backend: Node.js, Express.js

Database: MongoDB (Atlas)

Styling: CSS Modules / Bootstrap 

Authentication: JWT (JSON Web Token)

Deployment:

Frontend: Vercel

Backend: Render

External API: CoinGecko API (for fetching cryptocurrency data)

Other Tools: Axios, dotenv, cors, redux

How the Cron Job Works

I have used Node's node-cron or setInterval to run background tasks at fixed intervals.

Example: Fetch the latest crypto prices every hour and cache them in memory or MongoDB.

This helps prevent hitting the CoinGecko rate limit.


Live Frontend URL-https://crypto-zeta-ivory.vercel.app/

Live Backend API URL-https://crypto-5t19.onrender.com/

GitHub Repository - https://github.com/namangupta507/crypto