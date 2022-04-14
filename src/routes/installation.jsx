import '../App.css';
import '../styles/subpage/installation.css';

export default function Installation() {
  return (
    <div className="subpage-container install">
      <header className='intro'>
        <h1>Module Installation</h1>
      </header>
      <main>
        <section className='free-installation'>
          <header><h2>Free</h2></header>
          <div className='card-wrapper'>
            <article className='card-solid free-border'>
              <details>
                <summary className='free-background noselect'>Foundry
                </summary>
                <ol>
                  <li>Select the "Add-on Modules" tab</li>
                  <li>Click the "Install Module" button</li>
                  <li>In the top "Filter Packages" searchbar type the name of the module you want to install</li>
                  <li>Click the "Install" button in the module card</li>
                </ol>
              </details>
            </article>
            <article className='card-solid free-border'>
              <details>
              <summary className='free-background noselect'>Manifest URL</summary>
                <ol>
                  <li>Select the "Add-on Modules" tab</li>
                  <li>Click the "Install Module" button</li>
                  <li>In the bottom input field "Manifest URL" paste the Manifest URL</li>
                  <li>Click the "Install" button in the bottom right, to the left of where you pasted the Manifest URL</li>
                  <li>You can now enable the module inside your worlds. If you need to update you can do so through the "Add-on Modules" tab.</li>
                </ol>
              </details>
            </article>
          </div>
        </section>
        <section className='patreon-installation'>
          <header><h2>Premium</h2></header>
          <div className='card-wrapper'>
            <article className='card-solid paid-border'>
              <details>
                <summary className='paid-background noselect'> Local </summary>
                <ol>
                  <li>Download the ZIP file from the corresponding Patreon post</li>
                  <li>Unzip the file and locate the folder without the module version in it's name</li>
                  <li>For example if you are installing Filepicker+ 0.9.5 you will need to locate the folder named "filepicker-plus", depending on how you extracted the file this folder might be located inside the extracted folder.</li>
                  <li>To make sure you located the correct folder you can temporarily open it to check if it contains a file named manifest (among other files and folders)</li>
                  <li>Copy or Cut the folder</li>
                  <li>Navigate to your Foundry VTT User Data. If you don't know how to locate it, you can right click the Foundry VTT icon in the windows taskbar while the application is running and click "Browse User Data"</li>
                  <li>Open the Data folder, then the modules folder</li>
                  <li>Paste the folder</li>
                  <li>Restart Foundry VTT</li>
                  <li>You can now enable the module inside your worlds. If you need to update simply paste the new version over the old one and replace all the files.</li>
                </ol>
              </details>
            </article>
            <article className='card-solid paid-border'>
              <details >
                <summary className='paid-background noselect'>
                Forge
              </summary>
                <ol>
                  <li>Download the ZIP file from the corresponding Patreon post</li>
                  <li>On the Top Navigation Bar in The Forge homepage, hover over "My Foundry" and click "Games Configuration"</li>
                  <li>Click the "Summon Import Wizard" button</li>
                  <li>Select the "ZIP File" option</li>
                  <li>Click the "Browse" button and locate the ZIP file you previously downloaded</li>
                  <li>Click the "Analyze Files" button</li>
                  <li>Check the "Do not install from the Bazar" checkbox</li>
                  <li>Click the "Import All" button</li>
                  <li>You can now enable the module inside your worlds. If you need to update simply repeat this procedure.</li>
                </ol>
              </details>
            </article>
          </div>

        </section>
      </main >
    </div >
  )
}