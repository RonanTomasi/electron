// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// console.log(app.getPath('test'));
// console.log(app.setPath('test', true));
// console.log(app.getPath('test'));

const iframe = document.createElement('iframe');
iframe.style.width = '100%';
iframe.style.height = '100%';
iframe.src = 'http://draft.org/desktop';
iframe.setAttribute('frameborder', 0);
document.body.appendChild(iframe);

//<iframe frameborder="0" style="width:100%;height:100%;" src="https://draft.do/desktop"></iframe>
