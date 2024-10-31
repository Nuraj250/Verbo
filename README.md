# Verbo - Voice-Activated Quick Commands Extension

**Verbo** is a voice-activated extension designed to streamline workflows through customizable voice commands. With Verbo, you can manage tasks, open apps, and navigate effortlessly, all hands-free. It's an ideal productivity tool for multitaskers and those looking for a smoother digital experience.

## Features

- **Custom Voice Commands**: Define unique commands to fit your personal workflow.
- **Hands-Free Navigation**: Control applications, manage tabs, and take quick notes without lifting a finger.
- **Adaptable and Intuitive**: Accurate voice recognition adapts to your preferences over time.
- **Privacy-Focused**: Verbo runs locally, keeping your data safe and private.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/username/verbo.git
    cd verbo
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Build the project:
    ```bash
    npm run build
    ```

4. Load the extension in Chrome:
    - Open **chrome://extensions/**
    - Enable **Developer mode**
    - Click **Load unpacked** and select the `verbo/build` folder

## Folder Structure

```plaintext
verbo/
├── public/
│   ├── icons/                # Extension icons
│   └── manifest.json         # Extension metadata and permissions
├── src/
│   ├── background/           # Background scripts for voice recognition
│   ├── content/              # Content scripts for web page interactions
│   ├── popup/                # Popup interface files (HTML, CSS, JS)
│   ├── options/              # Options page for command management
│   ├── utils/                # Utility modules (voice recognition, command manager)
│   └── styles/               # Global styling
└── package.json              # Dependency management
```

## Usage

1. Click the Verbo icon in your browser toolbar to access the popup and configure commands.
2. Use voice commands to interact with Verbo, navigate, and perform tasks.
3. Manage and customize commands on the **Options** page.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-name
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m "Add new feature"
    ```
4. Push the changes to your branch:
    ```bash
    git push origin feature-name
    ```
5. Submit a pull request.

## License

This project is licensed under the MIT License.

**Enjoy Verbo and experience a new way to navigate with your voice!**
