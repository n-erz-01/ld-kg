# Knowledge Graph - L&D Network

Interactive network visualization of the L&D Silicon Valley network. Explore connections, enrich profiles, and discover relationships between entrepreneurs, investors, and operators.

## 🚀 Live Demo

Visit the live application: [https://yourusername.github.io/your-repo-name](https://yourusername.github.io/your-repo-name)

## ✨ Features

- **Interactive Network Graph**: Visualize professional relationships and connections
- **Profile Enrichment**: Integration with Aviato API for enhanced profile data
- **Semantic Connections**: Smart linking based on company mentions, work experience, and education
- **Persistent Interactions**: Like and comment system with Supabase backend
- **Tactical Design**: Clean, professional interface with tactical aesthetics

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Graph Visualization**: D3.js with React Force Graph 2D
- **Backend**: Supabase (PostgreSQL, Auth, Real-time)
- **Enrichment**: Aviato API
- **Hosting**: GitHub Pages

## 📁 Project Structure

```
├── index.html              # Landing page
├── ld-graph.html          # Main application
├── config.js              # Default configuration
├── config.local.js         # Local credentials (gitignored)
├── .gitignore             # Git ignore rules
└── enrichment/            # Python enrichment scripts
    ├── aviato_enrichment.py
    └── comprehensive_enrichment_test.py
```

## ⚙️ Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. **Configure Supabase**
   - Copy `config.js` to `config.local.js`
   - Update with your Supabase URL and Anon Key
   - Set your team password

3. **Run Python Enrichment** (Optional)
   ```bash
   cd enrichment
   pip install -r requirements.txt
   python aviato_enrichment.py
   ```

## 🔧 Configuration

The application uses a JavaScript-based configuration system:

- `config.js` - Default configuration (safe to commit)
- `config.local.js` - Local credentials (gitignored)

Required environment variables:
- `SUPABASE_URL` - Your Supabase project URL
- `SUPABASE_ANON_KEY` - Your Supabase anonymous key
- `TEAM_PASSWORD` - Authentication password

## 📊 Data Sources

- **People Data**: Supabase database with profile information
- **Enrichment**: Aviato API for enhanced LinkedIn profiles
- **Connections**: Semantic analysis of notes and work experience

## 🎨 Design

- **Color Scheme**: Black, white, and orange tactical theme
- **Typography**: JetBrains Mono monospace font
- **Layout**: Responsive design with sidebar and graph view
- **Interactions**: Hover tooltips, clickable nodes, persistent popups

## 📝 License

This project is for internal use by the L&D team.

## 🤝 Contributing

This is a private project. Contact the team for access and contribution guidelines.
