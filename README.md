<p align="center">
    <img src="https://user-images.githubusercontent.com/68344264/189981737-6ccf400c-2f67-44d4-9363-58d5de89ae3c.png" />
</p>
<h1 align="center">Pixel Launcher</h1>
<p align="center">Launcher for Pixel OS.</p>
<p align="center">
    <a href="https://github.com/starfactorypixel/Launcher/releases/"><img src="https://img.shields.io/github/v/release/starfactorypixel/Launcher" /></a>
    <a href="https://github.com/starfactorypixel/Launcher/blob/main/LICENSE"><img src="https://img.shields.io/github/license/starfactorypixel/Launcher" /></a>
</p>

<h2>Installing</h2>
<p>Preliminary requirements:</p>
<ul>
    <li><a href="https://nodejs.org/">Node.js</a> >= <code>16.14.2</code></li>
    <li><a href="https://www.npmjs.com/">npm</a> >= <code>8.16.0</code></li>
    <li><a href="https://www.docker.com/">Docker</a> >= <code>20.10.14</code></li>
    <li><a href="https://www.gnu.org/software/make/">GNU Make</a> >= <code>3.81</code></li>
</ul>
<p>Installing dependencies:</p>
<pre>npm i</pre>

<h2>Building</h2>
<p>Build application:</p>
<pre>npm run build</pre>
<p>Build application view:</p>
<pre>npm run build:view</pre>
<p>Build Windows X64 application:</p>
<pre>npm run build:win</pre>
<p>Build Linux X64 application:</p>
<pre>npm run build:linux</pre>

<h2>Starting</h2>
<p>Starting in production mode:</p>
<pre>npm start</pre>
<p>Starting in development mode:</p>
<pre>npm run dev</pre>

<h2>File structure</h2>
<p>List of folders:</p>
<ul>
    <li><code>src</code> - Application code.</li>
    <li>
        <code>view</code> - Application view (frontend).
        <ul>
            <li><code>src</code> - Code.</li>
            <li><code>public</code> - Static assets for server.</li>
        </ul>
    </li>
    <li><code>assets</code> - Application assets (Icons and others).</li>
    <li><code>build</code> - Built application installer (Windows (.exe) or Linux (.deb)).</li>
    <li><code>dist</code> - Compiled application code.</li>
    <li><code>node_modules</code> - Node.js dependencies.</li>
</ul>

<h2>Environment variables</h2>
<p>List of variables:</p>
<ul>
    <li><code>NODE_ENV</code> - Application mode.</li>
    <li><code>WEBPACK_DEV</code> - Webpack middleware starting if 1. Default: 0.</li>
</ul>
<p><a href="https://www.npmjs.com/package/dotenv">Dotenv</a> support is present!</p>

<h2>Stack</h2>
<p>
    <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
    <img src="https://img.shields.io/badge/Electron-191970?style=for-the-badge&logo=Electron&logoColor=white" />
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
    <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />
    <img src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white" />
    <img src="https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black" />
    <img src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white" />
    <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" />
</p>

<h2>Todo list</h2>

- [x] Add build support for Windows and Linux platforms.
- [ ] Add Protocol L3 support.
- [ ] Update view from Figma.

<h2>License</h2>
<p><a href="./LICENSE">GPL-3.0</a></p>
