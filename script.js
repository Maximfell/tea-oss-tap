document.getElementById('connect').addEventListener('click', async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      document.getElementById('status').innerText = 'Connected: ' + accounts[0];
    } catch (error) {
      document.getElementById('status').innerText = 'Connection failed';
    }
  } else {
    document.getElementById('status').innerText = 'MetaMask not found';
  }
});
