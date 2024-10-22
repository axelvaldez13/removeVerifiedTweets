function removeTweets() {
  const value = document.querySelector('[aria-label="Timeline: Conversation"]');
  if (value) {
    const arr = value.querySelectorAll('[data-testid="tweet"]');
    arr.forEach((tweet) => {
      const tabindex = parseInt(tweet.getAttribute("tabindex") || "", 10);
      const hasVerifiedAccounts = tweet.querySelector(
        '[aria-label="Verified account"]'
      );
      if (tabindex >= 0 && hasVerifiedAccounts) {
        tweet.style.display = "none";
      }
    });
  }
}

window.addEventListener("scroll", removeTweets);
