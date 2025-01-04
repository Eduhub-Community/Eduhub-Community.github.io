document.addEventListener("DOMContentLoaded", function () {
  const connectButton = document.getElementById("connectButton");
  const mainContent = document.getElementById("mainContent");
  const errorMessage = document.getElementById("errorMessage");
  const walletAddress = document.getElementById("walletAddress");

  // Add hover effect for button
  connectButton.addEventListener("mouseover", function () {
    this.style.backgroundColor = "#45a049";
  });
  connectButton.addEventListener("mouseout", function () {
    this.style.backgroundColor = "#4CAF50";
  });

  // Check if MetaMask is installed
  const isMetaMaskInstalled = () => {
    return typeof window.ethereum !== "undefined" && window.ethereum.isMetaMask;
  };

  // Function to format address
  function formatAddress(address) {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  }

  // Connect Wallet Function
  async function connectWallet() {
    if (!isMetaMaskInstalled()) {
      errorMessage.style.display = "block";
      return;
    }

    try {
      // Request account access
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (accounts.length > 0) {
        // Hide connect button and show main content
        connectButton.style.display = "none";
        mainContent.style.display = "block";

        // Display formatted wallet address
        const connectedAccount = accounts[0];
        walletAddress.textContent = formatAddress(connectedAccount);
        console.log("Connected account:", connectedAccount);
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  }

  // Add click event listener to connect button
  connectButton.addEventListener("click", connectWallet);

  // Handle account changes
  if (window.ethereum) {
    window.ethereum.on("accountsChanged", function (accounts) {
      if (accounts.length === 0) {
        // User disconnected their wallet
        connectButton.style.display = "block";
        mainContent.style.display = "none";
      } else {
        // Update displayed address when account changes
        walletAddress.textContent = formatAddress(accounts[0]);
      }
    });
  }
});
