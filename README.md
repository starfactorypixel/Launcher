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
    <li><a href="https://nodejs.org/">Node.js</a> >= <code>18.12.1</code></li>
    <li><a href="https://www.npmjs.com/">npm</a> >= <code>9.1.2</code></li>
    <li><a href="https://www.docker.com/">Docker</a> >= <code>20.10.14</code></li>
</ul>
<p>Installing dependencies:</p>
<pre>npm i</pre>

<h2>Building</h2>
<p>Build application main (entry point):</p>
<pre>npm run build:main</pre>
<p>Build application view (react app):</p>
<pre>npm run build:view</pre>
<table>
    <tr>
        <th colspan="3">Build application installer</th>
    </tr>
    <tr>
        <th><img src="https://img.shields.io/static/v1?label=Windows&message=x64&color=blue" /></th>
        <th><img src="https://img.shields.io/static/v1?label=Linux&message=arm64&color=yellow" /></th>
        <th><img src="https://img.shields.io/static/v1?label=Linux&message=x64&color=yellow" /></th>
    </tr>
    <tr>
        <td>
            <pre>npm run build:win</pre>
        </td>
        <td>
            <pre>npm run build:linux</pre>
        </td>
        <td>
            <pre>npm run build:linux-x64</pre>
        </td>
    </tr>
</table>
<p>Build all:</p>
<pre>npm run build</pre>

<h2>ESLint & Prettier</h2>
<p>Linter check:</p>
<pre>npm run lint</pre>
<p>Linter fix:</p>
<pre>npm run lint:fix</pre>
<p>Format code (with Prettier):</p>
<pre>npm run format</pre>

<h2>Starting</h2>
<p>Starting in development mode:</p>
<pre>npm start</pre>
<p>Starting in production mode:</p>
<pre>npm start:prod</pre>

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
    <li><code>DEV_PORT</code> - Dev Server port. Default: 15070.</li>
    <li><code>DEV_TOOLS</code> - Usage DevTools if 1. Default: 0.</li>
    <li><code>DEV_TOOLS_EXTENSIONS</code> - Usage DevTools extensions (React Developer Tools) if 1. Default: 0.</li>
    <li><code>DOCKER_BUILD</code> - Usage Docker in build. Default: 0.</li>
    <li><code>WEBPACK_DEV</code> - Webpack middleware starting if 1. Default: 0.</li>
</ul>
<p><a href="https://www.npmjs.com/package/dotenv">Dotenv</a> support is present!</p>

<h2>Stack</h2>
<p>
    <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
    <img src="https://img.shields.io/badge/Electron-191970?style=for-the-badge&logo=Electron&logoColor=white" />
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
    <img src="https://img.shields.io/badge/mobx-%23FF9955.svg?&style=for-the-badge&logo=mobx&logoColor=black" />
    <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />
    <img src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white" />
    <img src="https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black" />
    <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" />  
    <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" />
    <img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" />
    <img src="https://img.shields.io/badge/prettier-%23F7B93E.svg?&style=for-the-badge&logo=prettier&logoColor=black" />
</p>

<h2>License</h2>
<p><a href="./LICENSE">GPL-3.0</a></p>
