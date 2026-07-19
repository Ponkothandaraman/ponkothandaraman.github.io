<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="Personal_Portfolio_Website_0"></a>Personal Portfolio Website</h1>
<p class="has-line-data" data-line-start="2" data-line-end="3">This repository contains the source code for my personal portfolio website, built using React and Vite. The website showcases my professional experience, education, projects, and skills.</p>
<h2 class="code-line" data-line-start=4 data-line-end=5 ><a id="_Tech_Stack_4"></a>🚀 Tech Stack</h2>
<ul>
<li class="has-line-data" data-line-start="6" data-line-end="7"><strong>React</strong> - Frontend library</li>
<li class="has-line-data" data-line-start="7" data-line-end="8"><strong>Vite</strong> - Build tool and development server</li>
<li class="has-line-data" data-line-start="8" data-line-end="9"><strong>Tailwind CSS</strong> - Utility-first CSS framework</li>
<li class="has-line-data" data-line-start="9" data-line-end="10"><strong>ESLint</strong> - Code linting</li>
<li class="has-line-data" data-line-start="10" data-line-end="12"><strong>PostCSS</strong> - CSS transformation tool</li>
</ul>
<h2 class="code-line" data-line-start=12 data-line-end=13 ><a id="_Project_Structure_12"></a>📁 Project Structure</h2>
<pre><code class="has-line-data" data-line-start="15" data-line-end="32">└── Ponkothandaraman-ponkothandaraman.github.io/
    ├── index.html              # Entry HTML file
    ├── eslint.config.js        # ESLint configuration
    ├── public/                 # Static assets
    ├── postcss.config.js       # PostCSS configuration
    ├── package.json           # Project dependencies and scripts
    ├── vite.config.js         # Vite configuration
    ├── tailwind.config.js     # Tailwind CSS configuration
    └── src/                   # Source code
        ├── App.jsx            # Root React component
        ├── index.css          # Global styles
        ├── main.jsx          # Application entry point
        ├── assets/           # Media assets
        │   └── projects/     # Project images
        ├── components/       # React components
        └── constants/        # Application constants
</code></pre>
<h2 class="code-line" data-line-start=33 data-line-end=34 ><a id="_Setup_and_Installation_33"></a>🛠 Setup and Installation</h2>
<ol>
<li class="has-line-data" data-line-start="35" data-line-end="36">Clone the repository:</li>
</ol>
<pre><code class="has-line-data" data-line-start="37" data-line-end="40" class="language-bash">git <span class="hljs-built_in">clone</span> https://github.com/Ponkothandaraman/ponkothandaraman.github.io.git
<span class="hljs-built_in">cd</span> ponkothandaraman-ponkothandaraman.github.io
</code></pre>
<ol start="2">
<li class="has-line-data" data-line-start="41" data-line-end="42">Install dependencies:</li>
</ol>
<pre><code class="has-line-data" data-line-start="43" data-line-end="45" class="language-bash">npm install
</code></pre>
<ol start="3">
<li class="has-line-data" data-line-start="46" data-line-end="47">Start the development server:</li>
</ol>
<pre><code class="has-line-data" data-line-start="48" data-line-end="50" class="language-bash">npm run dev
</code></pre>
<ol start="4">
<li class="has-line-data" data-line-start="51" data-line-end="52">Build for production:</li>
</ol>
<pre><code class="has-line-data" data-line-start="53" data-line-end="55" class="language-bash">npm run build
</code></pre>
<h2 class="code-line" data-line-start=56 data-line-end=57 ><a id="_Components_56"></a>🧱 Components</h2>
<p class="has-line-data" data-line-start="58" data-line-end="59">The website consists of several key components:</p>
<ul>
<li class="has-line-data" data-line-start="60" data-line-end="61"><code>Navbar.jsx</code> - Navigation menu</li>
<li class="has-line-data" data-line-start="61" data-line-end="62"><code>Hero.jsx</code> - Landing section</li>
<li class="has-line-data" data-line-start="62" data-line-end="63"><code>Experience.jsx</code> - Professional experience section</li>
<li class="has-line-data" data-line-start="63" data-line-end="64"><code>Education.jsx</code> - Educational background</li>
<li class="has-line-data" data-line-start="64" data-line-end="65"><code>Projects.jsx</code> - Portfolio projects showcase</li>
<li class="has-line-data" data-line-start="65" data-line-end="66"><code>Skills.jsx</code> - Technical skills and competencies</li>
<li class="has-line-data" data-line-start="66" data-line-end="67"><code>Contact.jsx</code> - Contact information</li>
<li class="has-line-data" data-line-start="67" data-line-end="69"><code>Copyright.jsx</code> - Footer with copyright information</li>
</ul>
<h2 class="code-line" data-line-start=69 data-line-end=70 ><a id="_Assets_69"></a>🖼 Assets</h2>
<p class="has-line-data" data-line-start="71" data-line-end="72">Project images are stored in the <code>src/assets/projects/</code> directory in WebP format for optimal performance.</p>
<h2 class="code-line" data-line-start=73 data-line-end=74 ><a id="_Configuration_73"></a>🔧 Configuration</h2>
<ul>
<li class="has-line-data" data-line-start="75" data-line-end="76"><strong>Tailwind CSS</strong>: Customized in <code>tailwind.config.js</code></li>
<li class="has-line-data" data-line-start="76" data-line-end="77"><strong>ESLint</strong>: Code style rules in <code>eslint.config.js</code></li>
<li class="has-line-data" data-line-start="77" data-line-end="78"><strong>PostCSS</strong>: CSS processing configuration in <code>postcss.config.js</code></li>
<li class="has-line-data" data-line-start="78" data-line-end="80"><strong>Vite</strong>: Build and development settings in <code>vite.config.js</code></li>
</ul>
<h2 class="code-line" data-line-start=80 data-line-end=81 ><a id="_License_80"></a>📝 License</h2>
<p class="has-line-data" data-line-start="82" data-line-end="83"><a href="LICENSE">MIT License</a></p>
<h2 class="code-line" data-line-start=84 data-line-end=85 ><a id="_Contact_84"></a>👤 Contact</h2>
<p class="has-line-data" data-line-start="86" data-line-end="87">Feel free to reach out to me through the contact form on the website or create an issue in this repository.</p>
<hr>
<p class="has-line-data" data-line-start="89" data-line-end="90">Made with ❤️ using React and Vite</p>
