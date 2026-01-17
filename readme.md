# Healthcare Support Portal

A modern, compassionate online platform designed to support patients throughout their healthcare journey. This web application brings essential healthcare services together in one secure, user-friendly place.

## 🎯 Features

- **Patient Support**: Submit and track healthcare concerns with dedicated support
- **Volunteer Registration**: Register as a volunteer to contribute to healthcare initiatives
- **Contact Us**: Direct communication channel with the support team
- **FAQ Chatbot**: AI-powered intelligent assistant for common healthcare questions
- **Responsive Design**: Beautiful, accessible interface for users of all ages and technical backgrounds

## 🛠️ Tech Stack

### Frontend
- **Next.js 16.1.3** - React framework with App Router (server & client components)
- **React 19.2.3** - Modern UI library with latest hooks
- **Tailwind CSS 4** - Utility-first CSS framework
- **CSS 3** - Custom styling with gradients and animations

### Backend
- **Node.js** - Runtime environment
- **Next.js API Routes** - Serverless API endpoints
- **MongoDB** - NoSQL database for form submissions
- **Mongoose** - MongoDB ODM for schema validation

### AI & Tools
- **FAQ Keyword Matching** - Smart pattern recognition for chatbot responses
- **Extensible to Google Gemini API** - Ready for advanced AI integration
- **React Compiler** - Babel plugin for optimized React performance

## 📋 Project Structure

```
healthcare/
├── app/
│   ├── layout.js              # Root layout with navbar and chatbox
│   ├── page.js                # Home page
│   ├── globals.css            # Global styles
│   ├── patient/page.js        # Patient support form
│   ├── contact/page.js        # Contact form
│   ├── volunteer/page.js      # Volunteer registration form
│   ├── chat/page.js           # Chat interface
│   └── api/
│       ├── patient/route.js   # Patient submission API
│       ├── contact/route.js   # Contact submission API
│       ├── volunteer/route.js # Volunteer registration API
│       └── chatbox/route.js   # Chatbot API
├── components/
│   ├── Navbar.js              # Navigation component
│   └── Chatbox.js             # FAQ chatbot component
├── lib/
│   └── mongodb.js             # MongoDB connection utility
├── package.json               # Dependencies
├── next.config.mjs            # Next.js configuration
└── .env.local                 # Environment variables
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- MongoDB running locally OR MongoDB Atlas connection string
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd healthcare
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables in `.env.local`:
```env
MONGODB_URI=mongodb://localhost:27017/healthcareSupport
PORT=3000
GOOGLE_API_KEY=your_api_key_here
```

For MongoDB Atlas:
```env
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/healthcareSupport?retryWrites=true&w=majority
```

4. Start MongoDB (if running locally):
```bash
net start MongoDB
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📱 Available Scripts

```bash
npm run dev    # Start development server with hot reload
npm run build  # Build for production
npm start      # Start production server
npm run lint   # Run ESLint
```

## 🤖 Chatbot AI Implementation

The FAQ chatbot uses a **keyword-matching algorithm** that:
- Analyzes user input for healthcare-related keywords
- Returns pre-defined helpful responses about symptoms, vaccines, appointments, and volunteering
- Falls back to a default comprehensive message if no keywords match

### Example Keywords
- `symptoms` → Medical guidance
- `vaccine` → Vaccination information
- `appointment` → Booking instructions
- `volunteer` → Registration info

**Future Enhancement**: Integrate with Google Gemini API for advanced natural language understanding and more personalized responses.

## 🗄️ Database Schema

### Contact Collection
```javascript
{
  name: String,
  email: String,
  message: String,
  submittedAt: Date
}
```

### Patient Support Collection
```javascript
{
  name: String,
  email: String,
  issue: String,
  submittedAt: Date
}
```

### Volunteer Collection
```javascript
{
  name: String,
  email: String,
  skills: String,
  availability: String,
  submittedAt: Date
}
```

## 🎨 UI/UX Highlights

- **Gradient Backgrounds**: Modern, calming color schemes
- **Responsive Forms**: Client-side validation with user-friendly alerts
- **Fixed Chatbot Button**: Always accessible in the bottom-right corner
- **Modal Dialogs**: Clean, focused interactions
- **Smooth Animations**: Enhanced user experience with CSS transitions

## ⚠️ Form Submission Features

- **Duplicate Prevention**: Uses refs to prevent accidental double submissions
- **Real-time Validation**: HTML5 form validation
- **Auto-clear**: Forms reset after successful submission
- **Error Handling**: Detailed error messages with console logging
- **Loading States**: Visual feedback during submission

## 🔒 Security Considerations

- Environment variables for sensitive data
- Input validation on both client and server
- CORS-ready API structure
- MongoDB connection pooling
- Validated form data before database insertion

## 🌐 Deployment

### Vercel (Recommended for Next.js)
```bash
npm install -g vercel
vercel
```

### Docker
Create a `Dockerfile` and `docker-compose.yml` for containerized deployment.

### Other Platforms
- AWS EC2 / Elastic Beanstalk
- DigitalOcean
- Heroku
- Azure App Service

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📝 License

This project is open source and available under the MIT License.

## 📞 Support

For questions or issues, please:
- Create an issue on GitHub
- Contact the support team via the Contact Us page
- Email support with details about your concern

## 🙏 Acknowledgments

Built with Next.js, React, and MongoDB to create a compassionate healthcare support experience.

---

**Last Updated**: January 17, 2026
